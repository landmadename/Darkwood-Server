import React, {Component} from "react";
import {DeleteThumbIcon} from "./Icons";
import { Spring, animated } from 'react-spring'
import "./css/ImageChooser.scss"

class Thumb extends Component {
    constructor(props) {
        super(props);
        this.state={
            showCover: false
        }
    }

    deleteImage(e){
        let files = Object.assign([], this.props.files)
        for (let i = 0; i < files.length; i++) {
            if (files[i].name === this.props.name){
                files.splice(i, 1)
                break;
            }
        }
        this.props.setFiles(files);
        this.props.pushImages(files);
        e.stopPropagation();
    }

    render() {
        return (
            <div
                className="thumb"
                onMouseEnter={()=>this.setState({showCover: true })}
                onMouseLeave={()=>this.setState({showCover: false})}
                key={Math.random()}>
                <div
                    style={{backgroundImage: `url(${this.props.preview})`}}
                    className="thumbImage"/>
                <Spring opacity={this.state.showCover ? 1 : 0}>
                    {styles => {
                        styles.pointerEvents = this.state.showCover ? "auto" : "none"
                        return (
                            <animated.div
                                className="thumbCover"
                                onClick={(e)=>this.deleteImage(e)}
                                style={styles}>
                                <DeleteThumbIcon/>
                            </animated.div>
                        )
                    }}
                </Spring>
            </div>
        );
    }
}

export default Thumb;