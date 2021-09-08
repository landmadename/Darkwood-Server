import React, {Component} from 'react';
import BasePad from "../BasePad";
import "../css/BaseCardPad.scss"
import {withRouter} from "react-router-dom";
import {createCard, deleteA, getA, loadPicture, updateCard} from "../../utils/requests";
import {ImageChooser} from "../../components/ImageChooser";
import {createCardPrev} from "../../utils/imgTools";

class CardPad extends Component {
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
            let cardData = await getA("card", id)
            document.getElementById("InputBox").value = cardData.title
            await this.setState({
                title: cardData.title,
                img: await loadPicture(cardData.img),
                prevImg: await loadPicture(cardData.prevImg),
            })
        }
    }

    delete(){
        let id = this.props.match.params.id
        deleteA("card", id, (data) => {
            this.props.history.push("/卡纸")
        })
    }

    finishEdit(){
        let name = document.getElementById("InputBox").value
        createCard(name, this.state.prevImg, this.state.img, (data)=>{
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
        updateCard(id, name, this.state.prevImg, this.state.img, ()=>{
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
                        placeHolder={"拖拽或点击以导入卡纸图片"}
                        pushImg={(img)=>this.setState({img: img})}
                        processor={createCardPrev}
                        pushProcessedImg={(img)=>this.setState({prevImg: img})}/>
                }
                buttons={
                    (()=>{
                        if(this.props.status === "create"){
                            return [
                                {type: "left",      effect: ()=>{this.props.history.push("/卡纸")}},
                                {type: "empty",     effect: ()=>{}},
                                {type: "empty",     effect: ()=>{}},
                                {type: "cancel",    effect: ()=>{this.props.history.push("/卡纸")}},
                                {type: "ok",        effect: ()=>{this.finishEdit()}}
                            ]
                        }else {
                            return [
                                {type: "left",      effect: ()=>{this.props.history.push("/卡纸")}},
                                {type: "empty",     effect: ()=>{}},
                                {type: "delete",    effect: ()=>{this.delete()}},
                                {type: "cancel",    effect: ()=>{this.props.history.push("/卡纸")}},
                                {type: "ok",        effect: ()=>{this.update()}}                            ]
                        }
                    })()}
            />
        );
    }
}

export default withRouter(CardPad);