import React, {Component} from "react";
import "./css/PageBox.scss"

class PageBox extends Component {
    render() {
        return (
            <div className="pageBox">
                <div>{this.props.currentPage}</div>
                <div>
                    <div className="pageBoxDivideLine"/>
                    {this.props.pageCount}
                </div>
            </div>
        );
    }
}
export default PageBox;