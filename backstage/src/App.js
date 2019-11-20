import React from 'react';
import {
  Switch,
  Route,
} from "react-router-dom";
import './App.css';



// import Index from './component/Index'
import Login from './component/Login'
import Layout from './Layout'
import PrivateRoute from './component/PrivateRoute'
export default class App extends React.Component {


  render() {
    return (
      <Switch>
        <Route path='/login' component={Login} />
        <PrivateRoute path='/' component={Layout} />
      </Switch>
    )
  }


}


