import React from 'react';
import { Input, Button, Icon, Divider } from 'antd';

export default class Login extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            user: '',
            psw: ''

        }
    }
    getUser(e) {
        this.setState({
            user: e.target.value
        })
    }
    getPsw(e) {
        this.setState({
            psw: e.target.value

        })
        console.log(this.state.psw)
    }
    L(){
        
    }
    render() {
        return (
            <div className='login'>

                <div className="loginbox">
                    <h2>学员后台系统</h2>
                    <Input
                        placeholder="账号"
                        onChange={this.getUser.bind(this)}
                        value={this.state.user}
                        suffix={
                            <Icon type="user" style={{ color: 'rgba(0,0,0,.45)' }} />
                        }
                    />
                    <Input.Password placeholder="密码" onChange={this.getPsw.bind(this)} />
                    <Button type="primary" icon="key" onClick={this.L.bind(this)} >
                        登录
                    </Button>
                    <Divider>
                        <a href="###" style={{ color: 'red' }}>切换新版学员系统，抢先体验</a>
                    </Divider>
                </div>
                <div className="summary">
                    <h3>学习总结入口</h3>
                </div>

            </div>
        )


    }


}


