import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import './font/iconfont.css'
import RouterConfig from './router/routerConfig'
import {Provider} from 'react-redux'
import Store from './store/store'
ReactDOM.render(<Provider store={Store}><RouterConfig /></Provider>, document.getElementById('root'));

