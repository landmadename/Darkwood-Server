import React, {Component} from 'react';
import "./css/BaseInput.scss"
import {StarIcon} from "../components/Icons";

class NameInput extends Component {
    render() {
        return (
            <div className="inputOuterBox">
                <div className="inputInnerBox searchBox">
                    <input
                        id={"InputBox"}
                        className={"lineInput"}
                        placeholder={"填写名称"}/>
                    <div className={"inputIcon"}>
                        <StarIcon />
                    </div>
                </div>
            </div>
        );
    }
}

export default NameInput;