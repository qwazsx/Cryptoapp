import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';

import App from './App'
import store from './app/store'
import 'antd/dist/antd.css';

ReactDOM.render(
    <Router>
        {/* bütün app yai program komple redux stati'i içerisinde olabilsin diye Provider tagiyle wrapledik */}
        <Provider store={store}>
            <App />
        </Provider>
    </Router>
 ,document.getElementById('root'));