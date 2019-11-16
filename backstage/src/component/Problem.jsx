import React from 'react'
import { Input, Button } from 'antd';

const { TextArea } = Input;
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
            <div className='complaint'>
                <label>学员姓名:</label>
                <Input placeholder="Basic usage" style={{ width: 120 }} />
                {/* <div style={{ textAlign: 'center', color: '#f00', fontSize: 18, marginBottom: 18 }}>投诉内容</div>
                <TextArea style={{ width: 660, height: 360 }} placeholder="本投诉是匿名投诉，不会暴露您的信息" allowClear onChange={this.getInputValue} value={this.state.textAreaValue} /> */}
                <div className='btn-Cp'>
                    <Button type="primary" size='large' icon='check'>添加</Button>
                    <Button size='large' icon='undo'>返回</Button>
                </div>
            </div>
        )

    }
}