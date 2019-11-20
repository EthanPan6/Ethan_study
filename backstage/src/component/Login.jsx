import React from 'react';
import { Input, Button, Icon, Divider } from 'antd';




export default class Login extends React.Component {

    render() {
        return (
            <div className='login'>
                
                    <div className="loginbox">
                        <h2>学员后台系统</h2>
                        <Divider />
                        <Input
                            placeholder="身份证号码/学号"
                            suffix={
                                <Icon type="user" style={{ color: 'rgba(0,0,0,.45)' }} />
                            }
                        />
                        <Input.Password placeholder="密码" />
                        <Button type="primary" shape="round" icon="lock" >
                            Download
                        </Button>
                        <Divider><a href="###" style={{ color: 'red' }}>切换新版学员系统，抢先体验</a></Divider>
                    </div>
                    <div className="summary">
                        <h3>学习总结入口</h3>
                    </div>
            
            </div>
        )


    }


}


