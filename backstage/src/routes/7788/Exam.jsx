import React from 'react'
import CustomBreadcrumb from '../../component/CustomBreadcrumb'
{/*<> <CustomBreadcrumb arr={['学员后台', '学员违纪']} /> </>*/ }
export default class Exam extends React.Component {
    render() {
        return (
            <> <CustomBreadcrumb arr={['学员后台', '考试']} />
                <div>学员考试</div> </>
        )

    }
}