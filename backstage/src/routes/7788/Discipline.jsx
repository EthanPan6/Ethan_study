import React from 'react'
import CustomBreadcrumb from '../../component/CustomBreadcrumb'
export default class Discipline extends React.Component {
    render() {
        return (
            <>
                <CustomBreadcrumb arr={['学员考勤', '学员违纪']} />
                <div className="discipline">
                    <div className="content">
                        <table>
                            <thead>
                                <tr>
                                    <th >姓名</th>
                                    <th >类型</th>
                                    <th >扣除（分数）</th>
                                    <th >剩余分数</th>
                                    <th >理由</th>
                                    <th >操作人</th>
                                    <th >操作时间</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td colSpan="7" >
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div></div></>
        )

    }
}