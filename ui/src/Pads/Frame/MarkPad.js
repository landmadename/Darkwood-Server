import React, {Component} from 'react';
import BasePad from "../BasePad";
import Magnifier from "react-magnifier";
import { connect } from 'react-redux';
import "../css/MarkPad.scss"
import {withRouter} from "react-router-dom";
import {warpPerspective} from "../../utils/requests";
import {getImgSize} from "../../utils/imgTools";
import {checkPoints, deleteOnePoint, getMousePos, tryToAppendNewPoint} from "../../utils/markTools";

class MarkPad extends Component {
    constructor(props) {
        super(props);
        this.state = {
            width:  0,
            height: 0,
            zoomRatio: 2.5
        }
    }

    async componentWillMount() {
        this.setState(await getImgSize(this.props.chosenImg))
    }

    mark(event){
        let pos = getMousePos(event)
        let newMarkPoints = tryToAppendNewPoint(this.props.markPoints, pos)
        this.props.setMarkPoints(newMarkPoints)
    }

    cancelPoint(e){
        let newMarkPoints = deleteOnePoint(this.props.markPoints, e.target.dataset.index)
        this.props.setMarkPoints(newMarkPoints)
    }

    postMarkedImage(){
        if (checkPoints(this.props.markPoints)){
            warpPerspective(
                this,
                this.props.markPoints,
                this.props.chosenImg,
                (data) => {
                    this.props.setCroppedImg(data.body)
                    this.props.history.push("/框条/选择底部")
                })
        }
    }

    render() {
        return (
            <BasePad
                children={
                    <div className="markPlace" style={{width: this.state.width}}>
                        {this.props.chosenImg &&
                            <Magnifier
                                src={this.props.chosenImg}
                                width={this.state.width}
                                height={this.state.height}
                                zoomFactor={this.state.zoomRatio}
                                mgMouseOffsetY={-100}
                                onClick={(e)=>{this.mark(e)}}/>}
                        {this.props.markPoints.map((point, n)=>{
                            return <div key={n}
                                        data-index={n}
                                        onClick={(e)=>this.cancelPoint(e)}
                                        className="point"
                                        style={{transform: `translate(${point[0]-8}px, ${point[1]-8}px)`}}/>
                        })}
                    </div>
                }
                buttons={[
                    {type: "left",      effect: ()=>{this.props.history.push("/框条/导入俯视图")}},
                    {type: "right",     effect: ()=>{this.props.history.push("/框条/选择底部")}},
                    {type: "empty",     effect: ()=>{}},
                    {type: "cancel",    effect: ()=>{this.props.history.push("/框条/导入俯视图")}},
                    {type: "ok",        effect: ()=>{this.postMarkedImage()}}
                ]}
            />
        );
    }
}

function mapStateToProps(state) {
    return {
        chosenImg: state.chosenImg,
        markPoints: state.markPoints
    };
}

function mapDispatchToProps(dispatch) {
     return {
         setCroppedImg: (data)=>{
             dispatch({
                 type: "setCroppedImg",
                 payload: {croppedImg: data}
             })
         },
         setMarkPoints: (markPoints)=>{
             dispatch({
                 type: "setMarkPoints",
                 payload: {markPoints: markPoints}
             })
         }
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(withRouter(MarkPad));