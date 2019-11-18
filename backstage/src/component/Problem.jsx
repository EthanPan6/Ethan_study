import React from 'react'
import { Input, Button } from 'antd';


export default class Problem extends React.Component {
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
            <div className='problem'>
                <div className="content">

                    <label>学员姓名:</label>
                    <Input placeholder="Basic usage" style={{ width: 120 }} readOnly value="fskdnfkj" /><br />
                    <label>问题描述:</label>
                    <textarea style={{ width: 520, height: 90 }} placeholder="本投诉是匿名投诉，不会暴露您的信息" onChange={this.getInputValue} value={this.state.textAreaValue}></textarea>
                </div>
                <div className='btn-Cp'>
                    <Button type="primary" size='large' icon='check'>提问</Button>
                    <Button size='large' icon='undo'>返回</Button>
                </div>
            </div>
        )

    }
}