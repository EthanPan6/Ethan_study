import React from 'react';
import PrivateRoute from './component/PrivateRoute'
import { Switch, Route, } from "react-router-dom";
import Login from './routes/Login/Login'
import Index from './routes/Index'
import './App.css';


export default class App extends React.Component {
  render() {
    return (
      // <div>123</div>
      <Switch>
        <Route path='/login' component={Login} />
        <PrivateRoute path='/' component={Index} />
      </Switch>
    )
  }
}


