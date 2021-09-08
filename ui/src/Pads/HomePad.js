import React, {Component} from 'react';
import "./css/IndexPad.scss"
import {FramesIcon, OrdersIcon, ViewsIcon} from "../components/Icons";
import { AreaChart, Area, XAxis, YAxis, Legend, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
    {name: 1, 本月订单数量: 1144, 上月订单数量: 1132},
    {name: 2, 本月订单数量: 1427, 上月订单数量: 1849},
    {name: 3, 本月订单数量: 1669, 上月订单数量: 1238},
    {name: 4, 本月订单数量: 1583, 上月订单数量: 1363},
    {name: 5, 本月订单数量: 1855, 上月订单数量: 1442},
    {name: 6, 本月订单数量: 1537, 上月订单数量: 1189},
    {name: 7, 本月订单数量: 1293, 上月订单数量: 1521},
    {name: 8, 本月订单数量: 1730, 上月订单数量: 1768},
    {name: 9, 本月订单数量: 1509, 上月订单数量: 1720},
    {name: 10, 本月订单数量: 1375, 上月订单数量: 1403},
    {name: 11, 本月订单数量: 1188, 上月订单数量: 1887},
    {name: 12, 本月订单数量: 1315, 上月订单数量: 1044},
    {name: 13, 本月订单数量: 1187, 上月订单数量: 1542},
    {name: 14, 本月订单数量: 1367, 上月订单数量: 1091},
    {name: 15, 本月订单数量: 1628, 上月订单数量: 1446},
    {name: 16, 本月订单数量: 1095, 上月订单数量: 1406},
    {name: 17, 本月订单数量: 1726, 上月订单数量: 1137},
    {name: 18, 本月订单数量: 1036, 上月订单数量: 1017},
    {name: 19, 本月订单数量: 1157, 上月订单数量: 1294},
    {name: 20, 本月订单数量: 1044, 上月订单数量: 1138},
    {name: 21, 本月订单数量: 1629, 上月订单数量: 1794},
    {name: 22, 本月订单数量: 1087, 上月订单数量: 1991},
    {name: 23, 本月订单数量: 1786, 上月订单数量: 1798},
    {name: 24, 本月订单数量: 1408, 上月订单数量: 1009},
    {name: 25, 本月订单数量: 1204, 上月订单数量: 1254},
    {name: 26, 本月订单数量: 1340, 上月订单数量: 1230},
    {name: 27, 本月订单数量: 1517, 上月订单数量: 1314},
    {name: 28, 本月订单数量: 1440, 上月订单数量: 1250},
    {name: 29, 本月订单数量: 1414, 上月订单数量: 1795},
    {name: 30, 本月订单数量: 1147, 上月订单数量: 1718},
    {name: 31, 本月订单数量: 1076, 上月订单数量: 1075}]

class HomePad extends Component {
    render() {
        return (
            <div className="padContainer">
                <div className="fastViewContainer">
                    <div className="tile">
                        <div style={{backgroundColor: "#F8DFD7"}}>
                            <FramesIcon/>
                        </div>
                        <div>
                            <span>框条数量</span>
                            <span>1080</span>
                        </div>
                    </div>
                    <div className="tile">
                        <div style={{backgroundColor: "#EAEFF8"}}>
                            <ViewsIcon/>
                        </div>
                        <div>
                            <span>浏览数量</span>
                            <span>1080</span>
                        </div>
                    </div>
                    <div className="tile">
                        <div style={{backgroundColor: "#E8EED9"}}>
                            <OrdersIcon/>
                        </div>
                        <div>
                            <span>订单数量</span>
                            <span>1080</span>
                        </div>
                    </div>
                </div>
                <div className="chartBox">
                    <ResponsiveContainer width="100%" height="100%">
                        <AreaChart
                            width={600}
                            height={315}
                            data={data}
                            margin={{
                                top: 40,
                                right: 30,
                                left: 0,
                                bottom: 0,
                            }}
                        >
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="name" />
                            <YAxis />
                            <Tooltip />
                            <Legend wrapperStyle={{top:0, left:30, lineHeight: '40px' }} />
                            <Area type="monotone" dataKey="本月订单数量" stroke="#8884d8" fill="#8884d8" fillOpacity={0.3} />
                            <Area type="monotone" dataKey="上月订单数量" stroke="#82ca9d" fill="#82ca9d" fillOpacity={0.3} />
                        </AreaChart>
                    </ResponsiveContainer>
                </div>
            </div>
        );
    }
}

export default HomePad;