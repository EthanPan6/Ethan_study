import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {
    BrowserRouter as Router,
    // HashRouter as Router,
} from "react-router-dom";


function Root() {
    return (
        // <Provider store={store}>
        <Router>
            {/* <Provider {...store}> */}
            <App />
        </Router>
        // </Provider >
    )
}


ReactDOM.render(<Root />, document.getElementById('root'));


serviceWorker.unregister();
