import React, {Component} from 'react';
import {SearchIcon} from "../components/Icons";
import "./css/BaseInput.scss"
import {withRouter} from "react-router-dom";

class Search extends Component {
    onKeyPress(e){
        if(e.code === "Enter"){
            this.search()
        }
    }

    search(){
        let data = document.getElementById("InputBox").value
        if(data !== ""){
            this.props.history.push(`/${this.props.match.params.type}/搜索/${data}`)
        }
        document.getElementById("InputBox").value = ""
    }

    render() {
        return (
            <div className="inputOuterBox">
                <div className="inputInnerBox searchBox">
                    <input
                        id="InputBox"
                        className="lineInput"
                        placeholder="搜索"
                        onKeyPress={(e)=>{this.onKeyPress(e)}}/>
                    <div className="searchButton" onClick={()=>{this.search()}}>
                        <SearchIcon />
                    </div>
                </div>
            </div>
        );
    }
}

export default withRouter(Search);