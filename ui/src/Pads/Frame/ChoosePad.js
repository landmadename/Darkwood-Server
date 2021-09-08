import React, {Component} from 'react';
import BasePad from "../BasePad";
import {useDropzone} from 'react-dropzone'
import { connect } from 'react-redux';
import {withRouter} from "react-router-dom";
import Compressor from "compressorjs";

function FileChooser(props) {
    const onDrop = (files) => {
        let file = files[0]
        const reader = new FileReader()
        reader.onload = (e) => {
            new Compressor(file, {
                quality: 0.6,
                maxWidth: 574,
                maxHeight: 390,
                drew(context, canvas) {
                    props.clearMarkPoints()
                    props.setChosenImg(canvas.toDataURL('image/jpeg'))
                    props.goToPage("/框条/标记图片")
                },
                success(result) {
                    // console.log(result)
                },
                error(err) {
                    console.log(err.message);
                },
            });
        }
        reader.readAsDataURL(file)
    }
    const {getRootProps, getInputProps} = useDropzone({
        onDrop,
        accept: '.jpeg,.jpg,.png',
        maxFiles: 1
    })

    return (
        <div className="fullImageChooserContainer" {...getRootProps()}>
            <input {...getInputProps()} />
            <p>拖拽或点击以导入图片</p>
        </div>
    )
}

class ChoosePad extends Component {
    render() {
        return (
            <BasePad
                children={
                    <FileChooser
                        clearMarkPoints={this.props.clearMarkPoints}
                        setChosenImg={this.props.setChosenImg}
                        goToPage={this.props.history.push}/>
                }
                buttons={[
                    {type: "left",      effect: ()=>{this.props.history.push("/框条")}},
                    {type: "right",     effect: ()=>{this.props.history.push("/框条/标记图片")}},
                    {type: "empty",     effect: ()=>{}},
                    {type: "cancelX",   effect: ()=>{}},
                    {type: "okX",       effect: ()=>{}}
                ]}
            />
        );
    }
}

function mapStateToProps(state) {
    return {

    };
}

function mapDispatchToProps(dispatch) {
     return {
         setChosenImg: (img)=>{
             dispatch({
                 type: "setChosenImg",
                 payload: {chosenImg: img}
             })
         },
         clearMarkPoints: ()=>{
             dispatch({
                 type: "clearMarkPoints"
             })
         }
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(withRouter(ChoosePad));