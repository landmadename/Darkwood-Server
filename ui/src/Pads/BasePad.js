import React, {Component} from 'react';
import './css/BasePad.scss'
import {
    LeftIcon,
    LeftXIcon,
    RightIcon,
    RightXIcon,
    DiceIcon,
    CancelIcon,
    OkIcon,
    OkXIcon,
    CancelXIcon,
    AddIcon,
    DeleteIcon
} from "../components/Icons";
import PageBox from "../components/PageBox";

class BasePad extends Component {
    constructor(props) {
        super(props);
        this.state = {
            buttons: []
        }
    }

    componentDidMount() {
        this.createButtons()
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if(prevProps !== this.props){
            this.createButtons()
        }
    }

    createButtons(){
        let buttons = []
        this.props.buttons.forEach((item)=>{
            let {type, effect, img, currentPage, pageCount} = item
            switch (type){
                case "left":
                    buttons.push(this.createIconButton("roundButton", <LeftIcon/>, effect))
                    break;
                case "leftX":
                    buttons.push(this.createIconButton("roundButton", <LeftXIcon/>, effect))
                    break;
                case "right":
                    buttons.push(this.createIconButton("roundButton", <RightIcon/>, effect))
                    break;
                case "rightX":
                    buttons.push(this.createIconButton("roundButton", <RightXIcon/>, effect))
                    break;
                case "dice":
                    buttons.push(this.createIconButton("squareButton", <DiceIcon/>, effect))
                    break;
                case "cancel":
                    buttons.push(this.createIconButton("squareButton", <CancelIcon/>, effect))
                    break;
                case "cancelX":
                    buttons.push(this.createIconButton("squareButton", <CancelXIcon/>, effect))
                    break;
                case "ok":
                    buttons.push(this.createIconButton("squareButton", <OkIcon/>, effect))
                    break;
                case "okX":
                    buttons.push(this.createIconButton("squareButton", <OkXIcon/>, effect))
                    break;
                case "empty":
                    buttons.push(<div key={Math.random()} className="empty"/>)
                    break;
                case "prev":
                    if (img){
                        buttons.push(<img key={Math.random()} alt={"prev img"} className="prev" src={img}/>)
                    }else {
                        buttons.push(<div key={Math.random()} className="empty"/>)
                    }
                    break;
                case "add":
                    buttons.push(this.createIconButton("squareButton", <AddIcon/>, effect))
                    break;
                case "page":
                    buttons.push(<PageBox key={Math.random()} currentPage={currentPage} pageCount={pageCount}/>)
                    break;
                case "delete":
                    buttons.push(this.createIconButton("squareButton", <DeleteIcon/>, effect))
                    break;
                default:
                    break;
            }
        })
        this.setState({
            buttons: buttons
        })
    }


    createIconButton(buttonType, icon, effect){
        return (
            <div key={Math.random()} className={buttonType} onClick={effect}>
                {icon}
            </div>
        )
    }
    render() {
        return (
            <div className="basePadOuterBox">
                <div className="basePadLeftBox">
                    {this.props.children}
                    {/*<Spring opacity={this.props.showAlert ? 1 : 0}>*/}
                    {/*    {styles => {*/}
                    {/*        styles.pointerEvents = this.props.showAlert ? "auto" : "none"*/}
                    {/*        return <animated.div className="alert" style={styles}>{this.props.showAlert}</animated.div>*/}
                    {/*    }}*/}
                    {/*</Spring>*/}
                </div>
                <div className="basePadPanel">
                    {this.state.buttons}
                </div>
            </div>
        );
    }
}

export default BasePad;