import React, {Component} from 'react';
import "./css/Navigation.scss"
import {AccountIcon, CardIcon, FrameIcon, HomeIcon, InnerFrameIcon, SceneIcon} from "../components/Icons";
import {Link, withRouter, matchPath} from "react-router-dom";

class NavigationButton extends Component {
    ifMatch(){
        let match = matchPath(this.props.location.pathname, {
            path: "/:page",
            exact: false,
            strict: false
        })
        if(match == null){
            return false
        }else{
            return match.params["page"] === this.props.type
        }

    }

    render() {
        const icon = (()=>{
            switch (this.props.type){
                case "首页":
                    return <HomeIcon/>
                case "框条":
                    return <FrameIcon/>
                case "内框":
                    return <InnerFrameIcon/>
                case "卡纸":
                    return <CardIcon/>
                case "场景":
                    return <SceneIcon/>
                case "账户":
                    return <AccountIcon/>
                default:
                    return
            }
        })()

        return (
                <Link to={`/${this.props.type}`} className={(this.ifMatch() ?"toggledNavigationButton ":"") +"navigationButton "}>
                    {icon}
                    <span>{this.props.type}</span>
                </Link>
        );
    }
}

export default withRouter(NavigationButton);