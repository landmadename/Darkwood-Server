import React, {Component} from 'react';
import BasePad from "../BasePad";
import "../css/BaseInnerFramePad.scss"
import {withRouter} from "react-router-dom";
import {ChromePicker} from "react-color";
import {createInnerFramePrev} from "../../utils/imgTools";
import {
    createInnerFrame,
    deleteA,
    getA,
    loadPicture,
    updateInnerFrame
} from "../../utils/requests";

class InnerFramePad extends Component {
    constructor(props) {
        super(props);
        this.state = {
            prevImg: null,
            color: '#fff',
            title: ""
        }
    }

    async componentDidMount() {
        if(this.props.status === "edit") {
            const id = this.props.match.params.id
            let innerFrameData = await getA("inner_frame", id)
            document.getElementById("InputBox").value = innerFrameData.title
            await this.setState({
                title: innerFrameData.title,
                color: innerFrameData.color,
                prevImg: await loadPicture(innerFrameData.prevImg)
            })
        }
    }

    delete(){
        let id = this.props.match.params.id
        deleteA("inner_frame", id, (data) => {
            this.props.history.push("/内框")
        })
    }

    finishEdit(){
        let name = document.getElementById("InputBox").value
        createInnerFrame(name, this.state.prevImg, this.state.color, (data)=>{
            document.getElementById("InputBox").value = ""
            this.setState({
                prevImg: null,
                img: null
            })
        })
    }

    update(){
        let id = this.props.match.params.id
        let name = document.getElementById("InputBox").value
        updateInnerFrame(id, name, this.state.prevImg, this.state.color, ()=>{
            this.setState({
                title: document.getElementById("InputBox").value
            })
        })
    }

    handleColorChange = (color) => {
        this.setState({ color: color.hex })
    }

    handleColorChangeComplete = (color) => {
        createInnerFramePrev(color.hex, (img)=>{this.setState({
            prevImg: img
        })})
    }

    render() {
        return (
            <BasePad
                children={
                    <div className="innerFramePadOuterBox">
                        <ChromePicker
                            color={ this.state.color }
                            onChangeComplete={(color)=>{this.handleColorChangeComplete(color)}}
                            onChange={(color)=>{this.handleColorChange(color)}}/>
                    </div>
                }
                buttons={
                    (()=>{
                        if(this.props.history.location.pathname === "/内框/添加"){
                            return [
                                {type: "left",      effect: ()=>{this.props.history.push("/内框")}},
                                {type: "empty",     effect: ()=>{}},
                                {type: "empty",     effect: ()=>{}},
                                {type: "cancel",    effect: ()=>{this.props.history.push("/内框")}},
                                {type: "ok",        effect: ()=>{this.finishEdit()}}
                            ]
                        }else {
                            return [
                                {type: "left",      effect: ()=>{this.props.history.push("/内框")}},
                                {type: "empty",     effect: ()=>{}},
                                {type: "delete",    effect: ()=>{this.delete()}},
                                {type: "cancel",    effect: ()=>{this.props.history.push("/内框")}},
                                {type: "ok",        effect: ()=>{this.update()}}                            ]
                        }
                    })()}
            />
        );
    }
}

export default withRouter(InnerFramePad);