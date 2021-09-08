import React, {Component} from 'react';
import BasePad from "../BasePad";
import "../css/BaseCardPad.scss"
import {withRouter} from "react-router-dom";
import {ImageChooser} from "../../components/ImageChooser";
import {createScene, deleteA, getA, loadPicture, updateScene} from "../../utils/requests";
import {createCardPrev} from "../../utils/imgTools";

class ScenePad extends Component {
    constructor(props) {
        super(props);
        this.state = {
            img: null,
            prevImg: null,
            title: ""
        }
    }

    async componentDidMount() {
        if(this.props.status === "edit") {
            const id = this.props.match.params.id
            let sceneData = await getA("scene", id)
            document.getElementById("InputBox").value = sceneData.title
                await this.setState({
                title: sceneData.title,
                img: await loadPicture(sceneData.img),
                prevImg: await loadPicture(sceneData.prevImg),
            })
        }
    }

    delete(){
        let id = this.props.match.params.id
        deleteA("scene", id, (data) => {
            this.props.history.push("/场景")
        })
    }

    finishEdit(){
        let name = document.getElementById("InputBox").value
        createScene(name, this.state.prevImg, this.state.img, (data)=>{
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
        updateScene(id, name, this.state.prevImg, this.state.img, ()=>{
            this.setState({
                title: document.getElementById("InputBox").value
            })
        })
    }

    render() {
        return (
            <BasePad
                children={
                    <ImageChooser
                        img={this.state.img}
                        className="fullImageChooserContainer"
                        placeHolder={"拖拽或点击以导入场景图片"}
                        pushImg={(img)=>this.setState({img: img})}
                        processor={createCardPrev}
                        pushProcessedImg={(img)=>this.setState({prevImg: img})}/>
                }
                buttons={
                    (()=>{
                        if(this.props.status === "create"){
                            return [
                                {type: "left",      effect: ()=>{this.props.history.push("/场景")}},
                                {type: "empty",     effect: ()=>{}},
                                {type: "empty",     effect: ()=>{}},
                                {type: "cancel",    effect: ()=>{this.props.history.push("/场景")}},
                                {type: "ok",        effect: ()=>{this.finishEdit()}}
                            ]
                        }else {
                            return [
                                {type: "left",      effect: ()=>{this.props.history.push("/场景")}},
                                {type: "empty",     effect: ()=>{}},
                                {type: "delete",    effect: ()=>{this.delete()}},
                                {type: "cancel",    effect: ()=>{this.props.history.push("/场景")}},
                                {type: "ok",        effect: ()=>{this.update()}}                            ]
                        }
                    })()}
            />
        );
    }
}

export default withRouter(ScenePad);