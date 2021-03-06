import React from 'react'
import { Input, Button, DatePicker, Select } from 'antd';
import moment from 'moment';
import 'moment/locale/zh-cn';
import CustomBreadcrumb from '../../component/CustomBreadcrumb'
moment.locale('zh-cn');
const { Option } = Select;
export default class Leave extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            textAreaValue: '',
            startData: {
                year: '',
                month: '',
                date: '',
                hour: '',
                min: ''
            },
            endData: {
                year: '',
                month: '',
                date: '',
                hour: '',
                min: ''
            }
        }
    }
    getNow() {
        let timeObj = new Date()
        let year = timeObj.getFullYear();
        let month = timeObj.getMonth() + 1;
        let day = timeObj.getDate();
        return `${year}-${month}-${day}`
    }
    getInputValue = event => {
        this.setState({
            textAreaValue: event.target.value,
        })
    };
    setStartData = ev => {
        this.setState({
        })
        //https://momentjs.com/
    }
    setEndData = ev => {
        this.setState({

        })
    }
    render() {

        return (
            <> <CustomBreadcrumb arr={['学员考勤', '请假']} />
                <div className="leave">
                    <div className="content">
                        <table>
                            <tbody>
                                <tr><td>学员姓名:</td><td><Input placeholder="Basic usage" readOnly value="张三" /></td></tr>
                                <tr><td>请假理由:</td><td> <textarea style={{ width: 520, height: 90 }}
                                    placeholder="请输入请假理由" onChange={this.getInputValue}
                                    value={this.state.textAreaValue}>
                                </textarea></td></tr>
                                <tr><td>请假时间：</td><td>
                                    <div className="setTime" >
                                        <DatePicker defaultValue={moment(this.getNow(), 'YYYY-MM-DD')} allowClear='false' />
                                        <Select defaultValue="8" onChange={this.setStartData}>
                                            <Option value="8"> 8 </Option>
                                            <Option value="9"> 9 </Option>
                                            <Option value="10">10</Option>
                                            <Option value="11">11</Option>
                                            <Option value="12">12</Option>
                                            <Option value="13">13</Option>
                                            <Option value="14">14</Option>
                                            <Option value="15">15</Option>
                                            <Option value="16">16</Option>
                                            <Option value="17">17</Option>
                                            <Option value="18">18</Option>
                                            <Option value="19">19</Option>
                                            <Option value="20">20</Option>
                                            <Option value="21">21</Option>
                                            <Option value="22">22</Option>
                                        </Select>
                                        <Select defaultValue="00" onChange={this.setStartData}>
                                            <Option value="00">00</Option>
                                            <Option value="30">30</Option>
                                        </Select>
                                        --
                    <DatePicker defaultValue={moment(this.getNow(), 'YYYY-MM-DD')} allowClear='false' />
                                        <Select defaultValue="13" onChange={this.setStartData}>
                                            <Option value="8"> 8 </Option>
                                            <Option value="9"> 9 </Option>
                                            <Option value="10">10</Option>
                                            <Option value="11">11</Option>
                                            <Option value="12">12</Option>
                                            <Option value="13">13</Option>
                                            <Option value="14">14</Option>
                                            <Option value="15">15</Option>
                                            <Option value="16">16</Option>
                                            <Option value="17">17</Option>
                                            <Option value="18">18</Option>
                                            <Option value="19">19</Option>
                                            <Option value="20">20</Option>
                                            <Option value="21">21</Option>
                                            <Option value="22">22</Option>
                                        </Select>
                                        <Select defaultValue="00" onChange={this.setStartData}>
                                            <Option value="00">00</Option>
                                            <Option value="30">30</Option>
                                        </Select>
                                    </div>
                                </td></tr></tbody>
                        </table>



                    </div>
                    <div className='btn-Cp'>
                        <Button type="primary" size='large' icon='check'>提问</Button>
                        <Button size='large' icon='undo'>返回</Button>
                    </div>
                </div></>
        )

    }
}