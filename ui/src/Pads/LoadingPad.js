import React, {Component} from 'react';
import BasePad from "./BasePad";
import "./css/LoadingPad.scss"

class LoadingPad extends Component {
    render() {
        return (
            <BasePad
                children={
                    <div className="LoadingBox">
                        <div>加载中...</div>
                    </div>
                }
                buttons={[
                    {type: "leftX",     effect: ()=>{}},
                    {type: "rightX",    effect: ()=>{}},
                    {type: "empty",     effect: ()=>{}},
                    {type: "cancelX",   effect: ()=>{}},
                    {type: "okX",       effect: ()=>{}}
                ]}/>
        );
    }
}

export default LoadingPad;