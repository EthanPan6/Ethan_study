import React from 'react';
import './App.css';
import { Layout, Menu, Breadcrumb, Icon, Dropdown } from 'antd';
import Logo from './assets/logo.png'
import {
  // BrowserRouter as Router,
  HashRouter as Router,
  Switch,
  Route,
  Link, Redirect
} from "react-router-dom";

import Complaint from './component/Complaint'
import Problem from './component/Problem'
import Itemupload from './component/Itemupload'
import Stuvip from './component/Stuvip'
import Weekly from './component/Weekly'
import Index from './component/Index'
import MoneyDetail from './component/MoneyDetail'
import Exam from './component/Exam'
import Evaluate from './component/Evaluate'
import Inquiry from './component/Inquiry'
import Leave from './component/Leave'
import Discipline from './component/Discipline'
import Editinfo from './component/Editinfo'
import Test from './component/test'
import Login from './component/Login'

const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;

const Asider = () => {
  return (
    <Menu defaultSelectedKeys={['1']} mode="inline">
      <SubMenu
        key="sub1"
        title={
          <span>
            <Icon type="user" />
            <span>学员后台</span>
          </span>
        }
      >
        <Menu.Item key="3">
          <Link to="/home/complaint">
            <Icon type="exclamation-circle" />
            <span>匿名投诉</span>
          </Link>
        </Menu.Item>
        <Menu.Item key="4">
          <Link to="/home/problem">
            <Icon type="question-circle" />
            <span>技术问题</span>
          </Link>
        </Menu.Item>
        <Menu.Item key="5">
          <Link to="/home/itemupload">
            <Icon type="file-add" />
            <span>项目上传</span>
          </Link>
        </Menu.Item>
        <Menu.Item key="6" >
          <Link to="/home/stuvip">
            <Icon type="crown" />
            <span>VIP</span>
          </Link>
        </Menu.Item>
        <Menu.Item key="7">
          <Link to="/home/weekly">
            <Icon type="profile" />
            <span>学员周报</span>
          </Link>
        </Menu.Item>
        <Menu.Item key="8">
          <Link to="/home/index">
            <Icon type="info" />
            <span>我的资料</span>
          </Link>

        </Menu.Item>
        <Menu.Item key="9">
          <Link to="/home/moneyDetail">
            <Icon type="pay-circle" />
            <span>缴费明细</span>
          </Link>

        </Menu.Item>
        <Menu.Item key="a">
          <Link to="/home/exam">
            <Icon type="edit" />
            <span>参加考试</span>
          </Link>

        </Menu.Item>
        <Menu.Item key="b">
          <Link to="/home/evaluate">
            <Icon type="heart" />
            <span>学员评价</span>
          </Link>
        </Menu.Item>
        <Menu.Item key="c">
          <Link to="/home/inquiry">
            <Icon type="star" />
            <span>教学测评</span>
          </Link>
        </Menu.Item>
      </SubMenu>
      <SubMenu
        key="sub2"
        title={
          <span>
            <Icon type="team" />
            <span>学员考勤</span>
          </span>
        }
      >
        <Menu.Item key="d">
          <Link to="/home/leave">
            <Icon type="carry-out" />
            <span>学员请假</span>
          </Link>
        </Menu.Item>
        <Menu.Item key="e">
          <Link to="/home/discipline">
            <Icon type="alert" />
            <span>学员违纪</span>
          </Link>

        </Menu.Item>
      </SubMenu>
      <Menu.Item key="9">
        <Link to="/test">
          <Icon type="tool" />
          <span>Test</span>
        </Link>
      </Menu.Item>
    </Menu>

  )
}

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      collapsed: false,
      isLogin: true
    }
  }
  render() {
    return (
      <Router>
        {(() => {
          if (this.state.isLogin) {
            return <Layout>
              <Header style={{ position: 'fixed', zIndex: 1, width: '100%', backgroundColor: 'rgb(66,139,202)' }}>
                <div className="logo" >
                  <img src={Logo} alt="" />
                </div>
                <div className="dropdown" >
                  <Dropdown style={{ color: '#fff' }}
                    overlay={<Menu>
                      <Menu.Item key="0">
                        <Link to="/login"><Icon type="poweroff" />退出</Link>
                      </Menu.Item>
                    </Menu>} trigger={['click']}>
                    <a className="ant-dropdown-link" href="###">
                      用户名 <Icon type="down" />
                    </a>
                  </Dropdown>
                </div>
              </Header>
              <Content style={{ marginTop: 64 }}>
                <Breadcrumb style={{ margin: '16px  ' }}>
                  <Breadcrumb.Item>Home</Breadcrumb.Item>
                  <Breadcrumb.Item>List</Breadcrumb.Item>
                  <Breadcrumb.Item>App</Breadcrumb.Item>
                </Breadcrumb>
                <Layout style={{ background: '#fff' }}>
                  <Sider collapsible collapsed={this.state.collapsed} onCollapse={this.onCollapse} style={{ background: '#fff' }}>
                    <Asider />
                  </Sider>
                  <Content style={{ minHeight: 280 }}>
                    <Switch>
                      <Route path="/" component={Index} exact />
                      <Route exact path="/home/complaint" component={Complaint} />
                      <Route exact path="/home/problem"><Problem /></Route>
                      <Route exact path="/home/itemupload"><Itemupload /></Route>
                      <Route exact path="/home/stuvip"><Stuvip /></Route>
                      <Route exact path="/home/weekly"><Weekly /></Route>
                      <Route exact path="/home/index"><Index /></Route>
                      <Route exact path="/home/moneyDetail"><MoneyDetail /></Route>
                      <Route exact path="/home/exam"><Exam /></Route>
                      <Route exact path="/home/evaluate"><Evaluate /></Route>
                      <Route exact path="/home/inquiry"><Inquiry /></Route>
                      <Route exact path="/home/leave"><Leave /></Route>
                      <Route exact path="/home/discipline"><Discipline /></Route>
                      <Route exact path="/home/editinfo"><Editinfo /></Route>
                      <Route exact path="/home/test"><Test /></Route>
                    </Switch>
                  </Content>
                </Layout>
              </Content>
            </Layout>
          } else {
            return <>
              <Switch>
                <Login />
              </Switch>
              <Redirect to="/login" />
            </>
          }
        })()}


      </Router>
    )

  }


}


