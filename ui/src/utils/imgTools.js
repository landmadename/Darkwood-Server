export function dataURLToBlob(dataurl) {
    let arr = dataurl.split(',');
    let mime = arr[0].match(/:(.*?);/)[1];
    let bstr = atob(arr[1]);
    let n = bstr.length;
    let u8arr = new Uint8Array(n);
    while(n--){
        u8arr[n] = bstr.charCodeAt(n);
    }
    return new Blob([u8arr], {type:mime});
}

export async function getImgSize(src) {
    let img = new Image()
    img.src = src
    await img.decode()
    return {
        width:  img.width,
        height: img.height
    }
}

export function getFramePatten(pattern_width, pattern_height, frame_ctx){
    let pattern_cvs = document.createElement("canvas");
    let pattern_ctx = pattern_cvs.getContext('2d');
    pattern_cvs.width = pattern_width*2
    pattern_cvs.height = pattern_height
    try{
        pattern_ctx.putImageData(frame_ctx.getImageData(0,0,pattern_width*2,pattern_height),0,0)
        return pattern_cvs.toDataURL('image/png')
    }catch (e) {
        return ""
    }
}

export async function loadPatterns(imgPath, range) {
    let img = new Image();
    let cvs = document.createElement("canvas");
    let ctx = cvs.getContext('2d');

    img.src = imgPath;
    await img.decode();

    cvs.width  = 328;
    cvs.height = 64;
    let crop_from =     img.width*range[0]/100
    let crop_width =    img.width * (range[1]-range[0])/100
    let pattern_width = img.width*64/img.height * (range[1]-range[0])/100
    ctx.clearRect(0, 0, 328, 64)

    for (let i = 0; i < 328/pattern_width/2+1; i++) {
        ctx.drawImage(img, crop_from, 0, crop_width, img.height, 0, 0, pattern_width, 64);
        ctx.translate(pattern_width*2, 0)
    }
    ctx.scale(-1, 1)
    for (let i = 0; i < 328/pattern_width/2+1; i++) {
        ctx.drawImage(img, crop_from, 0, crop_width, img.height, 0, 0, pattern_width, 64);
        ctx.translate(pattern_width*2, 0)
    }

    return {
        toSave: getFramePatten(pattern_width, 64, ctx),
        toShow: cvs.toDataURL('image/jpeg')
    }
}

export async function createCardPrev(src, pushPrevImg){
    let img = new Image()
    img.src = src
    await img.decode()

    let pattern_cvs = document.createElement("canvas")
    let pattern_ctx = pattern_cvs.getContext('2d')
    pattern_cvs.width = 64
    pattern_cvs.height = 64

    pattern_ctx.drawImage(img, 0, 0)
    pushPrevImg(dataURLToBlob(pattern_cvs.toDataURL('image/png')))
}

export async function createScenePrev(src, pushPrevImg){
    let img = new Image()
    img.src = src
    await img.decode()

    let pattern_cvs = document.createElement("canvas")
    let pattern_ctx = pattern_cvs.getContext('2d')
    pattern_cvs.width = 64
    pattern_cvs.height = 64

    pattern_ctx.drawImage(img, 0, 0, 64, 64)
    pushPrevImg(dataURLToBlob(pattern_cvs.toDataURL('image/png')))
}

export async function createInnerFramePrev(color, pushPrevImg){
    let pattern_cvs = document.createElement("canvas")
    let pattern_ctx = pattern_cvs.getContext('2d')
    pattern_cvs.width = 64
    pattern_cvs.height = 64

    pattern_ctx.fillStyle = color
    pattern_ctx.fillRect(0, 0, 64, 64)
    pushPrevImg(dataURLToBlob(pattern_cvs.toDataURL('image/png')))
}
