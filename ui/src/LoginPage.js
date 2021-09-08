import React, {Component} from 'react';
import './css/LoginPage.scss'
import {login} from "./utils/requests";
import {withRouter} from "react-router-dom";

class LoginPage extends Component {
    submit(e){
        let username = e.target.form[0].value
        let password = e.target.form[1].value
        login(username, password, (res)=>{
            this.props.setUsername(username)
            this.props.history.push("/首页")
        })
        e.preventDefault()
    }
    render() {
        return (
            <div className="loginContainer">
                <form className="loginPad" method="post">
                    <div className="loginTitle">玄木 · 后台</div>
                    <div className="loginInput">
                        <div className="inputInnerBox">
                            <input
                                name={"username"}
                                className={"lineInput"}
                                placeholder={"填写用户名"}/>
                        </div>
                    </div>
                    <div className="loginInput">
                        <div className="inputInnerBox">
                            <input
                                name={"password"}
                                type={"password"}
                                className={"lineInput"}
                                placeholder={"填写密码"}/>
                        </div>
                    </div>
                    <input className="loginButton" type="submit" onClick={(e)=>{this.submit(e)}} value="登录"/>
                </form>
            </div>
        );
    }
}

export default withRouter(LoginPage);