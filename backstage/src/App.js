import React from 'react';
import './App.css';

import {
  // BrowserRouter as Router,
  HashRouter as Router,
  Switch,
  Route,
  Link, Redirect
} from "react-router-dom";

// import Index from './component/Index'
import Login from './component/Login'
import Layout from './Layout'
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
        <div className="app">
          {(() => {
            if (this.state.isLogin) {
              return <>
                <Switch>
                  <Route path="/home">
                    <Layout />
                    {/* <Index /> */}
                  </Route>
                </Switch>
                <Redirect to="/home" />
              </>
            } else {
              return <>
                <Switch>
                  <Route path="/login">
                    <Login />
                  </Route>
                </Switch>
                <Redirect to="/login" />
              </>
            }
          })()}
        </div>
      </Router>
    )
  }


}


