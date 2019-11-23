import React from 'react'
import { Icon, Dropdown, Menu, Modal, Avatar } from 'antd'
import { Link, withRouter } from 'react-router-dom'
import { isAuthenticated, logout } from '../../utils/isLoging'
import store from '../../store'

class HeaderBar extends React.Component {
  toggle = () => {
    this.props.onToggle()
  }
  toLogout = () => {
    // this.props.appStore.toggleLogin(false)
    this.props.history.push(this.props.location.pathname)
    logout()
    store.dispatch({ type: 'LogIn', token: '' })
  }

  render() {
    const { collapsed, location } = this.props

    const notLogin = (
      <div>
        <Link to={{ pathname: '/login', state: { from: location } }}
          style={{ color: 'rgba(0, 0, 0, 0.65)' }}>登录</Link>
        {/* <img src={require('../../assets/img/defaultUser.jpg')} alt=""/> */}
        <Avatar style={{ backgroundColor: '#87d068' }} icon="user" />
      </div>
    )
    const menu = (
      <Menu className='menu'>
        <Menu.ItemGroup title='用户中心' className='menu-group'>
          <Menu.Item>你好 - {isAuthenticated()}</Menu.Item>
          <Menu.Item>个人信息</Menu.Item>
          <Menu.Item><span onClick={this.toLogout}>退出登录</span></Menu.Item>
        </Menu.ItemGroup>
      </Menu>
    )
    const login = (
      <Dropdown overlay={menu}>
        <Avatar style={{ backgroundColor: '#87d068' }} icon="user" />
      </Dropdown>
    )
    return (
      <div id='headerbar'>
        <Icon
          type={collapsed ? 'menu-unfold' : 'menu-fold'}
          className='trigger'
          onClick={this.toggle} />
        <div style={{ lineHeight: '64px', float: 'right' }}>
          <ul className='header-ul'>
            <li style={{ listStyle: 'none' }}>
              {store.getState().isLogin ? login : notLogin}
            </li>
          </ul>
        </div>

      </div>
    )
  }
}

export default withRouter(HeaderBar)