import React, {Component} from 'react';
import BasePad from "../BasePad";
import { Range } from 'rc-slider';
import 'rc-slider/assets/index.css';
import "../css/FrameRenderPad.scss";
import {withRouter} from "react-router-dom";
import {connect} from "react-redux";
import {generateIncreasingRandomRange} from "../../utils/mathTools";
import {loadPatterns} from "../../utils/imgTools";

class FrameRenderPad extends Component {
    constructor(props) {
        super(props);
        this.state = {
            frames: [],
            rangeValue: [0, 100]
        }
    }

    async componentDidMount() {
        await this.renderFrames()
    }

    async renderFrames(){
        let frames = []
        for (let i = 0; i < 6; i++) {
            frames.push(await this.renderFrame())
        }
        await this.setState({
            frames: frames
        })
    }

    async renderFrame(){
        let range = generateIncreasingRandomRange(this.state.rangeValue)
        return await loadPatterns(
            this.props.croppedImg[this.props.type],
            range,
        )
    }

    afterSliderChange(range){
        if (range[1] - range[0] < 10){
            this.setState({
                rangeValue: [45, 55]
            })
        }else {
            this.setState({
                rangeValue: range
            })
        }
        this.renderFrames()
    }

    setFrame(frame){
        this.props.setFrame(this.props.type, frame["toSave"])
        switch (this.props.type) {
            case "bottom":
                this.props.history.push("/框条/选择右边")
                break;
            case "right":
                this.props.history.push("/框条/填写内容")
                break;
            default:
                break;
        }
    }

    getPrompt(){
        switch (this.props.type) {
            case "bottom":
                return "底部"
            case "right":
                return "右边"
            default:
                break;
        }
    }

    goToLeftPad(){
        switch (this.props.type) {
            case "bottom":
                this.props.history.push("/框条/标记图片")
                break;
            case "right":
                this.props.history.push("/框条/选择底部")
                break;
            default:
                break;
        }
    }

    goToRightPad(){
        switch (this.props.type) {
            case "bottom":
                this.props.history.push("/框条/选择右边")
                break;
            case "right":
                this.props.history.push("/框条/填写内容")
                break;
            default:
                break;
        }
    }

    render() {
        let croppedImg = this.props.croppedImg[this.props.type]
        return (
            <BasePad
                children={
                    <div className="frameContainer">
                        <div className="promptBox">
                            {this.getPrompt()}
                        </div>
                        <div className="displayFrameContainer">
                            <div className="frameImgContainer">
                                <img alt={"prev"} src={croppedImg} height={135}/>
                                <Range
                                    defaultValue={this.state.rangeValue}
                                    min={0} max={100}
                                    allowCross={false}
                                    onAfterChange={(range)=>{this.afterSliderChange(range)}} />
                            </div>
                        </div>
                        <div className="frameButtonsContainer">
                            {this.state.frames.map((frame)=>
                                <div
                                    key={Math.random()}
                                    className="renderedFrameButton"
                                    onClick={()=>this.setFrame(frame)}>
                                    <img alt={"renderImage"} className="renderImage" src={frame["toShow"]}/>
                                </div>)}
                        </div>
                    </div>
                }
                buttons={[
                    {type: "left",      effect: ()=>{this.goToLeftPad()}},
                    {type: "right",     effect: ()=>{this.goToRightPad()}},
                    {type: "prev",      img: this.props.croppedImg.prev},
                    {type: "cancel",    effect: ()=>{this.props.history.push("/框条/导入俯视图")}},
                    {type: "dice",      effect: ()=>{this.renderFrames()}}
                ]}
            />
        );
    }
}

function mapStateToProps(state) {
    return {
        croppedImg: state.croppedImg
    };
}

function mapDispatchToProps(dispatch) {
    return {
        setFrame: (type, frame)=>{
            let data = {}
            data[type] = frame
            dispatch({
                type: "setFrame",
                payload: data
            })
        },
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(withRouter(FrameRenderPad));