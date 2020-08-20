import React from 'react'
import CustomBreadcrumb from '../../component/CustomBreadcrumb'
{/*<> <CustomBreadcrumb arr={['学员后台', '学员违纪']} /> </>*/ }
export default class MoneyDetail extends React.Component {
    render() {
        return (
            <> <CustomBreadcrumb arr={['学员后台', '缴费明细']} />
                <div className="moneyDetail">
                    <h2>交费详情</h2>
                    <div className="content">
                        <table>
                            <thead>
                                <tr>
                                    <th>标题</th>
                                    <th>金额</th>
                                    <th>收据/订单号</th>
                                    <th>收据编号</th>
                                    <th>入账地点</th>
                                    <th>类型</th>
                                    <th>操作人</th>
                                    <th>状态</th>
                                    <th>添加时间</th>
                                </tr>
                            </thead>
                            <tbody>

                                <tr>
                                    <td>潘金虎 学费</td>
                                    <td>￥20790</td>
                                    <td></td>
                                    <td></td>
                                    <td>广州</td>
                                    <td></td>
                                    <td>黄健肖</td>
                                    <td>审核成功</td>
                                    <td>2019-07-24 15:28:36</td>
                                </tr>
                                <tr>
                                    <td>潘金虎 占座费</td>
                                    <td>￥200</td>
                                    <td></td>
                                    <td></td>
                                    <td>北京</td>
                                    <td>支付宝</td>
                                    <td>陈名依</td>
                                    <td>审核成功</td>
                                    <td>2019-03-09 12:11:04</td>
                                </tr>
                                <tr>
                                    <td colSpan="10" style={{ background: 'rgb(237, 255, 246)', textAlign: 'left' }}>
                                        学费总额：¥ 20990 (交费 - 退费)
                            </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <h2>退费详情</h2>
                    <div className="content">
                        <table>
                            <thead>
                                <tr>
                                    <th >标题</th>
                                    <th >金额</th>
                                    <th >收据/订单号</th>
                                    <th >收据编号</th>
                                    <th >退费地点</th>
                                    <th >操作人</th>
                                    <th >添加时间</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td colSpan="7" >

                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                </div> </>
        )

    }
}