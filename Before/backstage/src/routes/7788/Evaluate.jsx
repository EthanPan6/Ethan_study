import React from 'react'
import { Icon, Divider } from 'antd';
import CustomBreadcrumb from '../../component/CustomBreadcrumb'
{/*<> <CustomBreadcrumb arr={['学员后台', '学员违纪']} /> </>*/ }
export default class Evaluate extends React.Component {
    render() {
        return (
            <> <CustomBreadcrumb arr={['学员后台', '学员评价']} />
                <div className="evaluate">
                    <div className="alert">
                        <Icon type="check" />
                        您的满意是对我们最好的评价，您的批评是给我们最大的改进动力，欢迎同学对千锋提出宝贵的批评和建议。
                </div>
                    <div className="content">
                        <Divider />
                        <table>
                            <thead>
                                <tr>
                                    <th >测评开始时间</th>
                                    <th >测评结束时间</th>
                                    <th >评价对象</th>
                                    <th >讲师</th>
                                    <th >班主任</th>
                                    <th >就业老师</th>
                                    <th >操作</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td > </td>
                                    <td > </td>
                                    <td > </td>
                                    <td > </td>
                                    <td > </td>
                                    <td > </td>
                                    <td > </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div> </>
        )

    }
}