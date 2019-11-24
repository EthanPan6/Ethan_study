import React from 'react';
import { Input, Button, Icon, Divider, Modal } from 'antd';
import { authenticateSuccess } from '../../utils/isLoging'
import store from '../../store'
export default class Login extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            user: '',
            psw: '',
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

    }
    L() {
        console.log(this)
        if (this.state.user === store.getState().username &&
            this.state.psw === store.getState().psw) {
            store.dispatch({ type: 'LogIn', token: store.getState().username })
            authenticateSuccess(store.getState().username)
            this.props.history.replace('/');
        } else {
            let _this = this
            Modal.info({
                title: '提醒',
                content: (
                    <div>
                        <p>你的账户或者密码,请确认后重试</p>
                    </div>
                ),
                onOk() {
                    _this.setState({
                        user: '',
                        psw: ''
                    })
                }
            });
        }
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
                        autoComplete="off"
                        suffix={
                            <Icon type="user" style={{ color: 'rgba(0,0,0,.45)' }} />
                        }
                    />
                    <Input.Password placeholder="密码" onChange={this.getPsw.bind(this)} autoComplete="off" />
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


