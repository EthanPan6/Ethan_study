import React from 'react'
import { Input, Button, DatePicker, Select } from 'antd';
import moment from 'moment';
import 'moment/locale/zh-cn';
moment.locale('zh-cn');
const { MonthPicker, RangePicker, WeekPicker } = DatePicker;
const { Option } = Select;
export default class Leave extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            textAreaValue: '',
            startData: {
                year: '2019',
                month: '11',
                date: '18',
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
            <div className="leave">
                <div className="content">




                    <label>学员姓名:</label>
                    <Input placeholder="Basic usage" style={{ width: 120 }} readOnly value="fskdnfkj" /><br />
                    <label>请假理由:</label>
                    <textarea style={{ width: 520, height: 90 }} placeholder="请输入请假理由" onChange={this.getInputValue} value={this.state.textAreaValue}></textarea><br />
                    <label >请假时间:</label>

                    {/* <DatePicker onChange={this.setStartData} defaultValue={moment('2015-01-01', 'YYYY-MM-DD')} /> */}
                    <DatePicker defaultValue={moment('2015-01-01', 'YYYY-MM-DD')} allowClear='false' />
                    <Select defaultValue="lucy" style={{ width: 120 }} onChange={this.setStartData}>
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
                    <Select>
                        <Option value="00">00</Option>
                        <Option value="30">30</Option>
                    </Select>
                    --
                    <DatePicker defaultValue={moment('2015-01-01', 'YYYY-MM-DD')} allowClear='false' />

                    <Select>
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
                    <Select>
                        <Option value="00">00</Option>
                        <Option value="30">30</Option>
                    </Select>
                </div>
                <div className='btn-Cp'>
                    <Button type="primary" size='large' icon='check'>提问</Button>
                    <Button size='large' icon='undo'>返回</Button>
                </div>
            </div>
        )

    }
}