import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

// class Root extends React.Component {
//     constructor(props) {
//         super(props)
//         this.state = {
//             isLogin: true
//         }

//     }
//     render() {
//         return (
//             <HashRouter>
//                 {(() => {
//                     if (this.state.isLogin) {
//                         return <>
//                             <Switch>
//                                 <Route exact path="/" component={App} />
//                             </Switch>
//                             <Redirect to="/home/index" />
//                         </>
//                     } else {
//                         return <>
//                             <Switch>
//                                 <Route path="/login" component={Login} />
//                             </Switch>
//                             <Redirect to="/login" />
//                         </>
//                     }
//                 })()}
//             </HashRouter>
//         )
//     }
// }



ReactDOM.render(<App />, document.getElementById('root'));


serviceWorker.unregister();
