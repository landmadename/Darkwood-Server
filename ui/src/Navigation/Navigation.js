import React, {Component} from 'react';
import "./css/Navigation.scss"
import NavigationButton from "./NavigationButton";

class Navigation extends Component {
    render() {
        return (
            <div className="navigationContainer">
                <div className="upperPart">
                        {["首页","框条","内框","卡纸","场景"].map((type)=>{
                            return <NavigationButton key={type} type={type}/>
                        })}
                </div>
                <div className="lowerPart">
                    <NavigationButton type="账户"/>
                </div>
            </div>
        );
    }
}

export default Navigation;