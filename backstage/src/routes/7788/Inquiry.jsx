import React from 'react'
import CustomBreadcrumb from '../../component/CustomBreadcrumb'
{/*<> <CustomBreadcrumb arr={['学员后台', '学员违纪']} /> </>*/ }
export default class Inquiry extends React.Component {
    render() {
        return (
        <> <CustomBreadcrumb arr={['学员后台', '教学测评']} /> 
            <div className="inquiry">
                <div className="content">
                    <table>
                        <thead>
                            <tr>
                                <th >开始时间</th>
                                <th >结束时间</th>
                                <th >测评名称</th>
                                <th >讲师</th>
                                <th >操作</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td colSpan="5" >
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div></>
        )

    }
}