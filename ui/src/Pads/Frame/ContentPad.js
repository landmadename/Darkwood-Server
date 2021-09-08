import React, {Component} from 'react';
import {connect} from 'react-redux';
import BasePad from "../BasePad";
import "../css/ContentPad.scss"
import NumericInput from 'react-numeric-input';
import {withRouter} from "react-router-dom";
import Editor from "../../components/Editor";
import ImagesChooser from "../../components/ImagesChooser";
import {createFrame, deleteA, getA, loadPicture, loadPictures, updateFrame} from "../../utils/requests";

class ContentPad extends Component {
    constructor(props) {
        super(props);
        this.state = {
            content: "",
            contentImages: [],
            historyImages: [],
            width: 2,
            title: ""
        }
    }

    async componentDidMount() {
        if(this.props.status === "edit"){
            const id = this.props.match.params.id
            let frameData = await getA("frame", id)
            frameData.prevImg = await loadPicture(frameData.prevImg)
            frameData.contentImages = await loadPictures(frameData.contentImages)
            frameData.historyImages = await loadPictures(frameData.historyImages)
            document.getElementById("InputBox").value = frameData.title
            await this.setState(frameData)
        }
    }

    deleteFrame(){
        let id = this.props.match.params.id
        deleteA(
            "frame", id,
            ()=>{this.props.history.push("/框条")}
        )
    }

    update(){
        let id = this.props.match.params.id
        let name = document.getElementById("InputBox").value
        let reduce = this.props.reduce
        updateFrame(
            id, name, this.state.contentImages, this.state.historyImages, reduce,
            () => {}
        )
    }

    finishEdit(){
        let reduce = this.props.reduce
        let name = document.getElementById("InputBox").value
        createFrame(
            name, this.state.contentImages, this.state.historyImages, reduce,
            () => {
                document.getElementById("InputBox").value = ""
                this.props.history.push("/框条/导入俯视图")
            }
        )
    }

    onNumberChange(e){
        this.setState({
            width: e
        })
        this.props.setWidth(e)
    }

    render() {
        return (
            <BasePad
                children={
                    <div className="contentContainer">
                        <div className="contentLeftContainer">
                            <div className="widthInput">
                                <div className="lineInput">
                                    &nbsp;框条宽度（厘米）☛
                                </div>
                                <NumericInput
                                    id={"NumericInput"}
                                    min={1} step={1}
                                    onChange={(e)=>this.onNumberChange(e)}
                                    value={this.state.width}/>
                            </div>
                            <div className="contentEditorContainer">
                                <Editor
                                    placeholder={"请填写框条的简介"}
                                    initData={this.state.content}
                                    setContent={this.props.setContent}/>
                            </div>
                        </div>
                        <div className="contentRightContainer">
                            <ImagesChooser
                                initData={this.state.contentImages}
                                placeHolder={"拖拽或点击以导入介绍图片"}
                                pushImages={(images)=>{this.setState({contentImages: images})}}/>
                            <ImagesChooser
                                initData={this.state.historyImages}
                                placeHolder={"拖拽或点击以导入历史图片"}
                                pushImages={(images)=>{this.setState({historyImages: images})}}/>
                        </div>
                    </div>
                }
                buttons={
                    (()=>{
                        if(this.props.status === "create"){
                            return [
                                {type: "left",     effect: ()=>{this.props.history.push("/框条/选择右边")}},
                                {type: "rightX",   effect: ()=>{}},
                                {type: "empty",    effect: ()=>{}},
                                {type: "cancel",   effect: ()=>{this.props.history.push("/框条/导入俯视图")}},
                                {type: "ok",       effect: ()=>{this.finishEdit()}}
                            ]
                        }else {
                            let prev;
                            if (this.state.prevImg === undefined){
                                prev = {type: "empty",    effect: ()=>{}}
                            }else {
                                prev = {type: "prev",     img: this.state.prevImg.preview}
                            }
                            return [
                                {type: "delete",   effect: ()=>{this.deleteFrame()}},
                                {type: "empty",    effect: ()=>{}},
                                prev,
                                {type: "cancel",   effect: ()=>{this.props.history.push("/框条")}},
                                {type: "ok",       effect: ()=>{this.update()}}
                            ]
                        }
                    })()
                }
            />
        );
    }
}

function mapStateToProps(state) {
    return {
        reduce: state
    };
}

function mapDispatchToProps(dispatch) {
    return {
        setWidth: (width)=>{
            dispatch({
                type: "setWidth",
                payload: {width: width}
            })
        },
        setContent: (content)=>{
            dispatch({
                type: "setContent",
                payload: {content: content}
            })
        },
        clearContentImages: ()=>{
            dispatch({
                type: "clearContentImages",
                payload: {contentImages: []}
            })
        },
        clearHistoryImages: ()=>{
            dispatch({
                type: "clearHistoryImages",
                payload: {historyImages: []}
            })
        },
        pushImage: (type, image)=>{
            dispatch({
                type: "pushImage",
                payload: {
                    type: type,
                    image: image
                }
            })
        },
    };
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(withRouter(ContentPad));