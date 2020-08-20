import React from 'react'
import { Input, Button } from 'antd';
import CustomBreadcrumb from '../../component/CustomBreadcrumb'

export default class Weekly extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            textAreaValue: ''
        }
    }
    getInputValue = event => {
        this.setState({
            textAreaValue: event.target.value,
        })
    };
    render() {
        return (
            <> <CustomBreadcrumb arr={['学员后台', '学员周报']} />
                <div className='weekly'>
                    <div className="content">

                        <label>学员姓名:</label>
                        <Input placeholder="Basic usage" style={{ width: 120 }} readOnly value="张三" /><br />
                        <label>周报标题:</label>
                        <Input placeholder="请填写周报标题" style={{ width: 120 }} value="" /><br />
                        <label>周报内容:</label>
                        <textarea style={{ width: 520, height: 90 }} placeholder="请输入周报理由" onChange={this.getInputValue} value={this.state.textAreaValue}></textarea>
                    </div>
                    <div className='btn-Cp'>
                        <Button type="primary" size='large' icon='check'>添加</Button>
                        <Button size='large' icon='undo'>返回</Button>
                    </div>
                </div> </>
        )

    }
}