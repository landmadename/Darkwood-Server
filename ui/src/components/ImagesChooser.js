import React, {useEffect, useRef, useState} from "react";
import Compressor from "compressorjs";
import {useDropzone} from "react-dropzone";
import {AddThumbIcon} from "./Icons";
import Thumb from "./Thumb";
import "./css/ImageChooser.scss"

function ImagesChooser(props) {
    const [files, setFiles] = useState([]);
    const prevImages = useRef([]);

    useEffect(() => {
        if (prevImages.current.length !== props.initData.length){
            pushFiles(props.initData)
        }
        prevImages.current = props.initData
        // eslint-disable-next-line
    }, [props.initData]);

    const pushFiles = async acceptedFiles => {
        let filenames = new Set(files.map((file)=>file.name))
        let filesTemp = Object.assign([], files)
        let images=Object.assign([], files)
        let image
        for (const file of acceptedFiles) {
            if (!filenames.has(file.name) && !(filesTemp.length===6)){
                filesTemp.push(Object.assign(file, {
                    preview: URL.createObjectURL(file)
                }))
                if(file["init"] !== true){
                    image = await new Promise((resolve, reject) => {
                        new Compressor(file, {
                            quality: 0.6,
                            success(result) {
                                resolve(result)
                            },
                            error: console.log
                        });
                    })
                }else {
                    image = file
                }
                images.push(image)
            }
        }
        props.pushImages(images)
        setFiles(filesTemp)
    }

    const pushImages = images => {
        prevImages.current = images
        props.pushImages(images)
    }

    const {getRootProps, getInputProps} = useDropzone({
        onDrop: acceptedFiles => pushFiles(acceptedFiles),
        accept: '.jpeg,.jpg,.png'
    })

    const {onClick, onDrop} = getRootProps(this)

    return (
        <div
            onClick={onClick}
            onDrop={onDrop}
            className="frameImagesChooserContainer">
            <input {...getInputProps()} />
            <div className="thumbs">
                {files.map(file =>
                    <Thumb
                        key={Math.random()}
                        name={file.name}
                        preview={file.preview}
                        files={files}
                        setFiles={setFiles}
                        pushImages={pushImages}/>
                )}
                {
                    files.length!==0&&
                    <div className="thumb thumbAddMore">
                        <AddThumbIcon/>
                    </div>
                }
                {
                    files.length===0&&
                    <p>{props.placeHolder}</p>
                }
            </div>
        </div>
    )
}

export default ImagesChooser;