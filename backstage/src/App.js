import React from 'react';

import './App.css';

import { Layout, Menu, Breadcrumb, Icon, Dropdown } from 'antd';
import Logo from './assets/logo.png'

import {
  HashRouter as Router,
  Switch,
  Route,
  Link
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
          <Link to="/complaint">
            <Icon type="exclamation-circle" />
            <span>匿名投诉</span>
          </Link>
        </Menu.Item>
        <Menu.Item key="4">
          <Link to="/problem">
            <Icon type="question-circle" />
            <span>技术问题</span>
          </Link>
        </Menu.Item>
        <Menu.Item key="5">
          <Link to="/itemupload">
            <Icon type="file-add" />
            <span>项目上传</span>
          </Link>
        </Menu.Item>
        <Menu.Item key="6" >
          <Link to="/stuvip">
            <Icon type="crown" />
            <span>VIP</span>
          </Link>
        </Menu.Item>
        <Menu.Item key="7">
          <Link to="/weekly">
            <Icon type="profile" />
            <span>学员周报</span>
          </Link>
        </Menu.Item>
        <Menu.Item key="8">
          <Link to="/index">
            <Icon type="info" />
            <span>我的资料</span>
          </Link>

        </Menu.Item>
        <Menu.Item key="9">
          <Link to="/moneyDetail">
            <Icon type="pay-circle" />
            <span>缴费明细</span>
          </Link>

        </Menu.Item>
        <Menu.Item key="a">
          <Link to="/exam">
            <Icon type="edit" />
            <span>参加考试</span>
          </Link>

        </Menu.Item>
        <Menu.Item key="b">
          <Link to="/evaluate">
            <Icon type="heart" />
            <span>学员评价</span>
          </Link>
        </Menu.Item>
        <Menu.Item key="c">
          <Link to="/inquiry">
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
          <Link to="/leave">
            <Icon type="carry-out" />
            <span>学员请假</span>
          </Link>
        </Menu.Item>
        <Menu.Item key="e">
          <Link to="/discipline">
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
  state = {
    collapsed: false,
  };

  onCollapse = collapsed => {
    console.log(collapsed);
    this.setState({ collapsed });
  };

  render() {
    return (
      <Router>
        <Layout>
          <Header style={{ position: 'fixed', zIndex: 1, width: '100%', backgroundColor: 'rgb(66,139,202)' }}>
            <div className="logo" >
              <img src={Logo} alt="" />
            </div>
            <div className="dropdown" >
              <Dropdown style={{ color: '#fff' }}
                overlay={<Menu>
                  <Menu.Item key="0">
                    <a href="###"><Icon type="poweroff" />退出</a>
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
                  <Route path="/complaint"><Complaint /></Route>
                  <Route path="/problem"><Problem /></Route>
                  <Route path="/itemupload"><Itemupload /></Route>
                  <Route path="/stuvip"><Stuvip /></Route>
                  <Route path="/weekly"><Weekly /></Route>
                  <Route path="/index"><Index /></Route>
                  <Route path="/moneyDetail"><MoneyDetail /></Route>
                  <Route path="/exam"><Exam /></Route>
                  <Route path="/evaluate"><Evaluate /></Route>
                  <Route path="/inquiry"><Inquiry /></Route>
                  <Route path="/leave"><Leave /></Route>
                  <Route path="/discipline"><Discipline /></Route>
                  <Route path="/editinfo"><Editinfo /></Route>
                  <Route path="/test"><Test /></Route>
                </Switch>

                {/* <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer> */}
              </Content>

            </Layout>

          </Content>

        </Layout >
      </Router>
    )

  }


}


