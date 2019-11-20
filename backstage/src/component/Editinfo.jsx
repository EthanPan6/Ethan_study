import React from 'react'
import { Input, Cascader, Select } from 'antd';

const { Option } = Select;
export default class Editinfo extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            userInfo: {
                name: '123',
                sex: '男',
                tel: 13200000000,
                qq: 10001,
                id: 0,
                Uprovince: '',
                university: '',
                major: '',
            },
            university: [
                {
                    value: '江西',
                    label: '江西',
                    children: [
                        {
                            value: '江西科技师范大学',
                            label: '江西科技师范大学'
                        },
                        {
                            value: '南昌大学',
                            label: '南昌大学'
                        }
                    ]
                },
                {
                    value: '广西',
                    label: '广西',
                    children: [
                        {
                            value: '广西民族师范学院',
                            label: '广西民族师范学院'
                        },
                        {
                            value: '桂林电子科技大学',
                            label: '桂林电子科技大学'
                        }
                    ]
                }
            ]
        }
    }
    handleChange() {
        console.log(111)
    }
    onChange() {
        console.log(222);
    }
    render() {
        return (
            <div className='editinfo'>
                <div className="title">
                    <h2>编辑个人资料</h2>
                    <p>以下资料请确保真实有效，请勿删除或随意填写。</p>
                </div>
                <div className="edit">

                    <label >学员姓名：</label>  <Input readOnly value={this.state.userInfo.name} />
                    <label >性别：</label>
                    <Select value={this.state.userInfo.sex} style={{ width: 120 }} >
                        <Option value="男">男</Option>
                        <Option value="女">女</Option>
                    </Select>
                    <label >手机号码：</label>
                    <Input placeholder="请输入手机号码" value={this.state.userInfo.tel} />
                    <label >QQ：</label>
                    <Input placeholder="QQ号码" value={this.state.userInfo.qq} />
                    <label >身份证号码：</label>
                    <Input placeholder="身份证号" value={this.state.userInfo.id} />

                    <Cascader options={this.state.university} onChange={this.onChange} placeholder="Please select" />
                    {/* <label >学校省份：</label>  
                    <Input placeholder="省份" value={this.state.userInfo.Uprovince} />
                    <label >大学名称：</label>  
                    <Input placeholder="大学名称" value={this.state.userInfo.university} /> */}


                    <label >学院专业：</label>
                    <Input placeholder="专业" value={this.state.userInfo.major} />

                    <label >在校状态：</label>
                    <Input placeholder="Basic usage" value={this.state.userInfo.name} />

                    <label >学历：</label>
                    <Input placeholder="Basic usage" value={this.state.userInfo.name} />

                    <label >专业类型：</label>  <Input placeholder="Basic usage" value={this.state.userInfo.name} />

                    <label >开发经验： </label>  <Input placeholder="Basic usage" value={this.state.userInfo.name} />

                    <label >使用电脑：</label>  <Input placeholder="Basic usage" value={this.state.userInfo.name} />

                    {/* <Cascader options={options} onChange={onChange} placeholder="Please select" /> */}
                    {/* <label >学员所在省份：</label>  <Input placeholder="Basic usage" value={this.state.userInfo.name} />
                    <label >所在城市： </label>  <Input placeholder="Basic usage" value={this.state.userInfo.name} />
                    <label > 所在区县：  </label>  <Input placeholder="Basic usage" value={this.state.userInfo.name} /> */}
                </div>

            </div>
        )

    }
}