import React from 'react'
import { Input, Button } from 'antd';
export default class Stuvip extends React.Component {
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
            <div className="stuvip">
                <h2>您还不是VIP学员，填写下面表单可以申请VIP学员！</h2>

                <div className="content">
                    <label>学员姓名:</label>
                    <Input placeholder="Basic usage" style={{ width: 120 }} readOnly value="fskdnfkj" /><br />
                    <label>申请理由:</label>
                    <textarea style={{ width: 520, height: 90 }} placeholder="请输入申请理由" onChange={this.getInputValue} value={this.state.textAreaValue}></textarea>
                </div>
                <div className="btn-Cp">
                    <Button type="primary" size='large' icon='check'>申请</Button>
                    <Button size='large' icon='undo'>返回</Button>
                </div>
            </div>
        )

    }
}