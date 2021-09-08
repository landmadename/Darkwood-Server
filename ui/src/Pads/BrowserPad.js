import React, {Component} from 'react';
import BasePad from "./BasePad";
import {DeleteSmallIcon} from "../components/Icons";
import "./css/BrowserPad.scss"
import {withRouter} from "react-router-dom";
import {deleteOne, updateBrowser, updateSearch} from "../utils/requests";

class BrowserItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            deleted: false
        }
        this.id = this.props.browserItem["id"]
        this.type = this.props.url.substring(0,3)
    }

    goToEditPage(e){
        this.props.goToPage(this.type+"/编辑/"+this.id)
    }

    delete(e){
        e.stopPropagation()
        deleteOne(this.type, this.id,
            (res)=> {
                this.setState({deleted: true})
            })
    }

    render() {
        let prefix = ""
        if (process.env.NODE_ENV === "development"){ prefix = "/api" }
        let {prevImg, title} = this.props.browserItem
        if(this.state.deleted){
            return <div/>
        }else {
            return <div
                        className="browserItemBox"
                        onClick={(e)=>this.goToEditPage(e)}>
                        <div className="browserItemImg">
                            <img src={prefix + "/images/"+prevImg} alt={"prev"}/>
                        </div>
                        <div className="browserItemText">{title}</div>
                        <div
                            className="browserItemDeleteButton"
                            onClick={(e)=>this.delete(e)}>
                            <DeleteSmallIcon/>
                        </div>
                    </div>
        }
    }
}

class BrowserPad extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentPage: 1,
            pageCount: 1,
            browserItems: []
        }

        if( props.match.params["wd"] === undefined ){
            this.update = (page)=>{
                updateBrowser(this, page, this.props.type)
            }
        } else {
            this.update = (page)=>{
                updateSearch(this, page, this.props.type, this.props.match.params.wd)
            }
        }
    }
    componentDidMount() {
        this.update(1)
    }

    add(){
        switch (this.props.type) {
            case "frames":
                this.props.history.push("/框条/导入俯视图")
                break
            case "cards":
                this.props.history.push("/卡纸/添加")
                break
            case "scenes":
                this.props.history.push("/场景/添加")
                break
            case "innerFrames":
                this.props.history.push("/内框/添加")
                break
            default:
                break
        }
    }

    render() {
        const leftButton = ()=>{
            if(this.state.currentPage !== 1){
                return {type: "left",      effect: ()=>{this.update(this.state.currentPage-1)}}
            }else {
                return {type: "leftX",      effect: ()=>{}}
            }
        }
        const rightButton = ()=>{
            if(this.state.currentPage !== this.state.pageCount){
                return {type: "right",      effect: ()=>{this.update(this.state.currentPage+1)}}
            }else {
                return {type: "leftX",      effect: ()=>{}}
            }
        }
        return (
            <BasePad
                children={
                    <div className="browserGrid">
                        {this.state.browserItems.map((browserItem)=>
                            <BrowserItem
                                key={browserItem.id}
                                type={this.props.type}
                                goToPage={this.props.history.push}
                                url={this.props.history.location.pathname}
                                browserItem={browserItem}/>
                        )}
                    </div>
                }
                buttons={[
                    leftButton(),
                    {type: "page",      effect: ()=>{}, currentPage:this.state.currentPage,  pageCount:this.state.pageCount},
                    rightButton(),
                    {type: "empty",     effect: ()=>{}},
                    {type: "add",       effect: ()=>{this.add()}}
                ]}
            />
        );
    }
}

export default withRouter(BrowserPad);