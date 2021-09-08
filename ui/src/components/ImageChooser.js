import {useDropzone} from "react-dropzone";
import React from "react";

export function ImageChooser(props) {
    const onDrop = (acceptedFiles) => {
        let file = acceptedFiles[0]
        props.pushImg(file)
        if (props.processor){
            props.processor(URL.createObjectURL(file), props.pushProcessedImg)
        }
    }
    const {getRootProps, getInputProps} = useDropzone({
        onDrop,
        accept: '.jpeg,.jpg,.png',
        maxFiles: 1
    })

    return (
        <div
            style={
                (()=>{
                    if (props.img===null){
                        return {}
                    } else {
                        return {
                            backgroundImage: `url("${URL.createObjectURL(props.img)}")`,
                            border: "none",
                            backgroundRepeat: "no-repeat",
                            backgroundSize: "contain",
                            backgroundPosition: "center"
                        }
                    }
                })()
            }
            className={props.className} {...getRootProps()}>
            <input {...getInputProps()} />
            {
                (props.img===null)&&
                <p>{props.placeHolder}</p>
            }
        </div>
    )
}
