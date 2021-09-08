import {createCardPrev} from "../utils/imgTools";
import {useDropzone} from "react-dropzone";
import "./css/ImageChooser.scss";
import React from "react";


export function AccountLongBannerChooser(props) {
    const onDrop = (acceptedFiles) => {
        let file = acceptedFiles[0]
        props.pushImg(file)
        createCardPrev(URL.createObjectURL(file), props.pushPrevImg)
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
                            backgroundSize: "cover"
                        }
                    }
                })()
            }
            className="accountImageChooser" {...getRootProps()}>
            <input {...getInputProps()} />
            {
                (props.img===null)&&
                <p>导入店铺横幅</p>
            }
        </div>
    )
}
