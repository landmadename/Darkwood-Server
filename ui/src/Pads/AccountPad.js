import React, {Component} from 'react';
import "./css/AccountPad.scss"
import BasePad from "./BasePad";
import ImagesChooser from "../components/ImagesChooser";
import {ImageChooser} from "../components/ImageChooser";
import {getUserInfo, loadPicture, loadPictures, updateUserInfo} from "../utils/requests";
import {withRouter} from "react-router-dom";

class AccountPad extends Component {
    constructor(props) {
        super(props);
        this.state = {
            workImages: [],
            cover: null,
            banner: null
        }
    }

    async componentDidMount() {
        let userData = await getUserInfo()
        userData.cover = await loadPicture(userData.cover)
        userData.banner = await loadPicture(userData.banner)
        userData.workImages = await loadPictures(userData.workImages)
        document.getElementById("shopName").value = userData.shopName
        document.getElementById("shopAddress").value = userData.shopAddress
        document.getElementById("phoneNumber").value = userData.phoneNumber
        document.getElementById("openingHours").value = userData.openingHours
        document.getElementById("intro").value = userData.intro
        console.log(userData)
        await this.setState(userData)
    }

    update(){
        updateUserInfo(
            document.getElementById("shopName").value,
            document.getElementById("shopAddress").value,
            document.getElementById("phoneNumber").value,
            document.getElementById("openingHours").value,
            document.getElementById("intro").value,
            this.state.cover,
            this.state.banner,
            this.state.workImages
        )
    }

    render() {
        return (
            <BasePad
                children={
                    <div className="accountContainer">
                        <div className="accountLeftContainer">
                            <div className="inputInnerBox accountInputBox">
                                <input id={"shopName"}      className="lineInput" placeholder={"店铺名称"}/>
                            </div>
                            <div className="inputInnerBox accountInputBox">
                                <input id={"shopAddress"}   className="lineInput" placeholder={"店铺地址"}/>
                            </div>
                            <div className="inputInnerBox accountInputBox">
                                <input id={"phoneNumber"}   className="lineInput" placeholder={"联系电话"}/>
                            </div>
                            <div className="inputInnerBox accountInputBox">
                                <input id={"openingHours"}  className="lineInput" placeholder={"营业时间"}/>
                            </div>
                            <div className="inputInnerBox accountTextArea">
                                <textarea id={"intro"}      className="lineInput" placeholder={"请简要的介绍一下店铺"}/>
                            </div>
                        </div>
                        <div className="accountRightContainer">
                            <ImageChooser
                                img={this.state.cover}
                                className="smallImageChooserContainer"
                                placeHolder={"拖拽或点击以导入店铺封面"}
                                pushImg={(img)=>this.setState({cover: img})}/>
                            <ImageChooser
                                img={this.state.banner}
                                className="smallImageChooserContainer"
                                placeHolder={"拖拽或点击以导入长条横幅"}
                                pushImg={(img)=>this.setState({banner: img})}/>
                            <ImagesChooser
                                initData={this.state.workImages}
                                placeHolder={"拖拽或点击以导入成品图片"}
                                pushImages={(images)=>{this.setState({workImages: images})}}/>
                        </div>
                    </div>
                }
                buttons={
                    [
                        {type: "empty",    effect: ()=>{}},
                        {type: "empty",    effect: ()=>{}},
                        {type: "empty",    effect: ()=>{}},
                        {type: "empty",    effect: ()=>{}},
                        {type: "ok",       effect: ()=>{this.update()}}
                    ]
                }
            />
        );
    }
}

export default withRouter(AccountPad);