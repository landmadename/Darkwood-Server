import React, {Component} from 'react';
import "./css/HelloBanner.scss"

class HelloBanner extends Component {
    render() {
        return (
            <div className="bannerOuterBox">
                <div className="bannerInnerBox">
                    {"👋 你好，" + this.props.username}
                </div>
            </div>
        );
    }
}

export default HelloBanner;