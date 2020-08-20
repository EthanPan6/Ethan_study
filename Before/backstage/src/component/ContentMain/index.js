import React from 'react'
import { withRouter, Switch, Redirect } from 'react-router-dom'
import PrivateRoute from '../PrivateRoute'

import Home from '../../routes/Home'
import Complaint from '../../routes/7788/Complaint'
import Problem from '../../routes/7788/Problem'
import Itemupload from '../../routes/7788/Itemupload'
import Stuvip from '../../routes/7788/Stuvip'
import Weekly from '../../routes/7788/Weekly'
// import Weekly from '../../routes/7788/'
import MoneyDetail from '../../routes/7788/MoneyDetail'
import Exam from '../../routes/7788/Exam'
import Evaluate from '../../routes/7788/Evaluate'
import Inquiry from '../../routes/7788/Inquiry'
import Leave from '../../routes/7788/Leave'
import Discipline from '../../routes/7788/Discipline'

class ContentMain extends React.Component {
    render() {
        return (
            <div style={{ padding: 16, position: 'relative' }}>
                <Switch>
                    <PrivateRoute exact path='/home' component={Home} />
                    <PrivateRoute exact path='/home/stuBE/complaint' component={Complaint} />
                    <PrivateRoute exact path='/home/stuBE/problem' component={Problem} />
                    <PrivateRoute exact path='/home/stuBE/itemupload' component={Itemupload} />
                    <PrivateRoute exact path='/home/stuBE/stuvip' component={Stuvip} />
                    <PrivateRoute exact path='/home/stuBE/weekly' component={Weekly} />
                    <PrivateRoute exact path='/home/stuBE/index' component={Home} />
                    <PrivateRoute exact path='/home/stuBE/moneyDetail' component={MoneyDetail} />
                    <PrivateRoute exact path='/home/stuBE/exam' component={Exam} />
                    <PrivateRoute exact path='/home/stuBE/evaluate' component={Evaluate} />
                    <PrivateRoute exact path='/home/stuBE/inquiry' component={Inquiry} />
                    <PrivateRoute exact path='/home/daily/leave' component={Leave} />
                    <PrivateRoute exact path='/home/daily/discipline' component={Discipline} />



                    <Redirect exact from='/' to='/home/stuBE/index' />
                </Switch>

            </div>
        )
    }
}

export default withRouter(ContentMain)