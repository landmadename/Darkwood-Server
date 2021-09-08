package com.dw.server.services;

import com.dw.server.objects.CroppedImageDTO;
import com.dw.server.objects.MarkedImageDTO;
import com.dw.server.utils.MatTools;
import org.opencv.core.*;
import org.opencv.imgproc.Imgproc;
import org.opencv.utils.Converters;
import org.springframework.stereotype.Service;
import sun.misc.BASE64Encoder;

import javax.imageio.ImageIO;
import java.awt.image.BufferedImage;
import java.io.ByteArrayOutputStream;
import java.io.IOException;
import java.util.*;

@Service
public class WarpPerspectiveService {
    public CroppedImageDTO warpPerspective(MarkedImageDTO markedImageDTO){
        nu.pattern.OpenCV.loadShared();
        System.loadLibrary(org.opencv.core.Core.NATIVE_LIBRARY_NAME);

        Mat img = MatTools.base64ToMat(markedImageDTO.chosenImg);
        HashMap<String, Point> rawPoints = locatePoints(markedImageDTO.points);
        HashMap<String, Point> straightPoints = calcStraightPoints(rawPoints);

        CroppedImageDTO croppedImageDTO = new CroppedImageDTO(
                getPrevImg(img, rawPoints, straightPoints),
                getBottomImg(img, rawPoints, straightPoints),
                getRightImg(img, rawPoints, straightPoints)
        );
        return croppedImageDTO;
    }

    public String getPrevImg(Mat Rimg, HashMap<String, Point> rawPoints, HashMap<String, Point> straightPoints){
        Mat img = Rimg.clone();
        List<Point> listSrcs= Arrays.asList(
                rawPoints.get("leftOuter"), rawPoints.get("cornerInner"), rawPoints.get("rightOuter"), rawPoints.get("cornerOuter"));
        Mat srcPoints= Converters.vector_Point_to_Mat(listSrcs, CvType.CV_32F);
        List<Point> listDsts= Arrays.asList(
                straightPoints.get("leftOuter"), straightPoints.get("cornerInner"), straightPoints.get("rightOuter"), straightPoints.get("cornerOuter"));
        Mat dstPoints= Converters.vector_Point_to_Mat(listDsts, CvType.CV_32F);
        Mat perspectiveMat=Imgproc.getPerspectiveTransform(srcPoints, dstPoints);
        Imgproc.warpPerspective(img, img, perspectiveMat, img.size());

        Imgproc.cvtColor(img, img,Imgproc.COLOR_RGB2RGBA);
        Imgproc.rectangle (img, new Point(0, 0), straightPoints.get("cornerInner"), new Scalar(0, 0, 255, 0), -1);

        double offset = calcOffset(rawPoints.get("cornerOuter"), rawPoints.get("cornerInner"));
        Point startPoint = new Point(straightPoints.get("cornerOuter").x-2*offset, straightPoints.get("cornerOuter").y-2*offset);
        Rect prev = new Rect(startPoint, straightPoints.get("cornerOuter"));
        return "data:image/jpeg;base64,"+MatToBase64(img.submat(prev));
    }

    public String getBottomImg(Mat Rimg, HashMap<String, Point> rawPoints, HashMap<String, Point> straightPoints){
        Mat img = Rimg.clone();
        List<Point> listSrcs= Arrays.asList(
                rawPoints.get("leftInner"), rawPoints.get("cornerInner"), rawPoints.get("cornerOuter"), rawPoints.get("leftOuter"));
        Mat srcPoints= Converters.vector_Point_to_Mat(listSrcs, CvType.CV_32F);
        List<Point> listDsts= Arrays.asList(
                straightPoints.get("leftInner"), straightPoints.get("cornerInner"), straightPoints.get("cornerOuter"), straightPoints.get("leftOuter"));
        Mat dstPoints= Converters.vector_Point_to_Mat(listDsts, CvType.CV_32F);
        Mat perspectiveMat=Imgproc.getPerspectiveTransform(srcPoints, dstPoints);
        Imgproc.warpPerspective(img, img, perspectiveMat, img.size());

        Imgproc.cvtColor(img, img,Imgproc.COLOR_RGB2RGBA);
        Point startPoint = new Point(Math.max(straightPoints.get("leftInner").x, straightPoints.get("leftOuter").x), straightPoints.get("leftInner").y);
        Point endPoint =   new Point(straightPoints.get("cornerInner").x, straightPoints.get("cornerOuter").y);
        Rect prev = new Rect(startPoint, endPoint);
        return "data:image/jpeg;base64,"+MatToBase64(img.submat(prev));
    }

    public String getRightImg(Mat Rimg, HashMap<String, Point> rawPoints, HashMap<String, Point> straightPoints){
        Mat img = Rimg.clone();
        List<Point> listSrcs= Arrays.asList(
                rawPoints.get("rightInner"), rawPoints.get("cornerInner"), rawPoints.get("cornerOuter"), rawPoints.get("rightOuter"));
        Mat srcPoints= Converters.vector_Point_to_Mat(listSrcs, CvType.CV_32F);
        List<Point> listDsts= Arrays.asList(
                straightPoints.get("rightInner"), straightPoints.get("cornerInner"), straightPoints.get("cornerOuter"), straightPoints.get("rightOuter"));
        Mat dstPoints= Converters.vector_Point_to_Mat(listDsts, CvType.CV_32F);
        Mat perspectiveMat=Imgproc.getPerspectiveTransform(srcPoints, dstPoints);
        Imgproc.warpPerspective(img, img, perspectiveMat, img.size());
        
        Imgproc.cvtColor(img, img,Imgproc.COLOR_RGB2RGBA);
        Point startPoint = new Point(rawPoints.get("rightInner").x, Math.max(straightPoints.get("rightInner").y, straightPoints.get("rightOuter").y));
        Point endPoint =   new Point(straightPoints.get("rightOuter").x, straightPoints.get("cornerInner").y);
        Rect prev = new Rect(startPoint, endPoint);
        img = img.submat(prev);
        Core.transpose(img, img);
        Core.flip(img, img, 1);
        return "data:image/jpeg;base64,"+MatToBase64(img);
    }

    public String MatToBase64(Mat capImg){
        String jpg_base64 = null;
        ByteArrayOutputStream baos = new ByteArrayOutputStream();
        try {
            ImageIO.write(mat2BI(capImg), "png", baos);
        }catch (IOException ex){
            System.out.println(ex);
        }
        byte[] bytes = baos.toByteArray();
        BASE64Encoder encoder = new BASE64Encoder();
        jpg_base64 = encoder.encodeBuffer(Objects.requireNonNull(bytes));
        return jpg_base64;
    }

    public BufferedImage mat2BI(Mat mat) {
        int dataSize = mat.cols() * mat.rows() * (int) mat.elemSize();
        byte[] data = new byte[dataSize];
        mat.get(0, 0, data);
        int type = mat.channels() == 1 ? BufferedImage.TYPE_BYTE_GRAY :
                BufferedImage.TYPE_4BYTE_ABGR;

        if (type == BufferedImage.TYPE_4BYTE_ABGR) {
            for (int i = 0; i < dataSize; i += 4) {
                byte blue = data[i + 0];
                data[i + 0] = data[i + 2];
                data[i + 2] = blue;
            }
        }
        BufferedImage image = new BufferedImage(mat.cols(), mat.rows(), type);
        image.getRaster().setDataElements(0, 0, mat.cols(), mat.rows(), data);
        return image;
    }

    public HashMap<String, Point> calcStraightPoints(HashMap<String, Point> rawPoints){
        HashMap<String, Point> straightPoints = new HashMap<>();
        straightPoints.put("cornerOuter",       rawPoints.get("cornerOuter"));
        straightPoints.put("leftOuter",         new Point(rawPoints.get("leftOuter").x,  rawPoints.get("cornerOuter").y));
        straightPoints.put("rightOuter",        new Point(rawPoints.get("cornerOuter").x, rawPoints.get("rightOuter").y));

        double offset = calcOffset(rawPoints.get("cornerOuter"), rawPoints.get("cornerInner"));
        straightPoints.put("cornerInner",       new Point(rawPoints.get("cornerOuter").x-offset, rawPoints.get("cornerOuter").y-offset));
        straightPoints.put("leftInner",         new Point(rawPoints.get("leftInner").x,  straightPoints.get("cornerInner").y));
        straightPoints.put("rightInner",        new Point(straightPoints.get("cornerInner").x, rawPoints.get("rightInner").y));

        return straightPoints;
    }

    public double calcOffset(Point A, Point B){
        double distance = Math.sqrt(Math.pow(A.x-B.x,2)+Math.pow(A.y-B.y,2));
        return distance/Math.sqrt(2);
    }

    public HashMap<String, Point> locatePoints(ArrayList<ArrayList<Float>> points){
        HashMap<String, Point> rawPoints = new HashMap<>();
        points.sort((o1, o2) -> (int)(o1.get(1)-o2.get(1)));

        rawPoints.put("rightInner",     deivdeLeftAndRight(points.get(0), points.get(1)).get("left"));
        rawPoints.put("rightOuter",     deivdeLeftAndRight(points.get(0), points.get(1)).get("right"));
        rawPoints.put("leftInner",      deivdeLeftAndRight(points.get(2), points.get(3)).get("left"));
        rawPoints.put("cornerInner",    deivdeLeftAndRight(points.get(2), points.get(3)).get("right"));
        rawPoints.put("leftOuter",      deivdeLeftAndRight(points.get(4), points.get(5)).get("left"));
        rawPoints.put("cornerOuter",    deivdeLeftAndRight(points.get(4), points.get(5)).get("right"));

        return rawPoints;
    }

    public HashMap<String, Point> deivdeLeftAndRight(ArrayList<Float> A, ArrayList<Float> B){
        HashMap<String, Point> points = new HashMap<>();
        if (A.get(0) < B.get(0)){
            points.put("left",  new Point(A.get(0), A.get(1)));
            points.put("right", new Point(B.get(0), B.get(1)));
        } else {
            points.put("left",  new Point(B.get(0), B.get(1)));
            points.put("right", new Point(A.get(0), A.get(1)));
        }
        return points;
    }
}
