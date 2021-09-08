import React, {Component} from 'react';
import "./css/App.scss"
import Navigation from "./Navigation/Navigation";
import HomePad from "./Pads/HomePad";
import {Route, Switch, BrowserRouter as Router} from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Search from "./Heads/Search";
import BrowserPad from "./Pads/BrowserPad";
import MarkPad from "./Pads/Frame/MarkPad";
import ChoosePad from "./Pads/Frame/ChoosePad";
import ScenePad from "./Pads/Scene/ScenePad";
import InnerFramePad from "./Pads/InnerFrame/InnerFramePad";
import FrameRenderPad from "./Pads/Frame/FrameRenderPad";
import ContentPad from "./Pads/Frame/ContentPad";
import CardPad from "./Pads/Card/CardPad";
import NameInput from "./Heads/NameInput";
import LoginPage from "./LoginPage";
import HelloBanner from "./Heads/HelloBanner";
import AccountPad from "./Pads/AccountPad";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: null
        }
    }

    render() {
        return (
            <Router>
                <div className="root">
                    <ToastContainer position="top-right" autoClose={3000} hideProgressBar={false} newestOnTop={false} theme={"colored"} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover/>
                    <Switch>
                        {
                            !this.state.username &&
                            <Route exact path="/**">
                                <LoginPage setUsername={(username)=>{this.setState({username: username})}}/>
                            </Route>
                        }
                        <Route exact path="/*">
                            <div className="navigationArea">
                                <Navigation/>
                            </div>
                            <div className="operateArea">
                                <div className="inputArea">
                                    <Switch>
                                        <Route path="/:type/搜索/:id"   children={<Search />} />
                                        <Route exact={false} path="/首页" children={<HelloBanner username={this.state.username} />} />
                                        <Route exact={false} path="/账户" children={<HelloBanner username={this.state.username} />} />
                                        <Route exact={false} path="/框条/*" children={<NameInput />} />
                                        <Route exact={false} path="/内框/*" children={<NameInput />} />
                                        <Route exact={false} path="/卡纸/*" children={<NameInput />} />
                                        <Route exact={false} path="/场景/*" children={<NameInput />} />
                                        <Route path="/:type"   children={<Search />} />
                                    </Switch>
                                </div>
                                <div className="padArea">
                                    <Route exact={true}  path="/首页"          children={<HomePad />} />

                                    <Route exact={false} path="/框条/搜索/:wd"  children={<BrowserPad type={"frames"} />} />
                                    <Route exact={false} path="/框条/编辑/:id"  children={<ContentPad status={"edit"} />} />
                                    <Route exact={true}  path="/框条/填写内容"   children={<ContentPad status={"create"} />} />
                                    <Route exact={true}  path="/框条/选择右边"   children={<FrameRenderPad type={"right"} />} />
                                    <Route exact={true}  path="/框条/选择底部"   children={<FrameRenderPad type={"bottom"} />} />
                                    <Route exact={true}  path="/框条/标记图片"   children={<MarkPad />} />
                                    <Route exact={true}  path="/框条/导入俯视图"  children={<ChoosePad />} />
                                    <Route exact={true}  path="/框条"           children={<BrowserPad type={"frames"} />} />

                                    <Route exact={false} path="/内框/搜索/:wd"  children={<BrowserPad type={"innerFrames"} />} />
                                    <Route exact={false} path="/内框/编辑/:id"  children={<InnerFramePad status={"edit"}   />} />
                                    <Route exact={true}  path="/内框/添加"      children={<InnerFramePad status={"create"} />} />
                                    <Route exact={true}  path="/内框"          children={<BrowserPad type={"innerFrames"} />} />

                                    <Route exact={false} path="/卡纸/搜索/:wd"  children={<BrowserPad type={"cards"} />} />
                                    <Route exact={false} path="/卡纸/编辑/:id"  children={<CardPad status={"edit"}   />} />
                                    <Route exact={true}  path="/卡纸/添加"      children={<CardPad status={"create"} />} />
                                    <Route exact={true}  path="/卡纸"          children={<BrowserPad type={"cards"} />} />

                                    <Route exact={false} path="/场景/搜索/:wd"  children={<BrowserPad type={"scenes"} />} />
                                    <Route exact={false} path="/场景/编辑/:id"  children={<ScenePad status={"edit"}   />} />
                                    <Route exact={true}  path="/场景/添加"      children={<ScenePad status={"create"} />} />
                                    <Route exact={true}  path="/场景"          children={<BrowserPad type={"scenes"} />} />

                                    <Route exact={true}  path="/账户"          children={<AccountPad />} />
                                </div>
                            </div>
                        </Route>
                    </Switch>
                </div>
            </Router>
        );
    }
}

export default App;