import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {Provider} from 'react-redux'
import store from './store'
import Service from './services/service'
import './index.css';
import App from './App';

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
