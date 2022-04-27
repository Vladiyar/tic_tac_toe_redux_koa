import React from 'react';
import ReactDOM from 'react-dom';
import './scss/main.scss';
import App from './App';
import {createStore} from 'redux';
import allReducer from './reducers'
import {Provider} from 'react-redux';

const defaultState = {state : ''}

const store = createStore(allReducer, defaultState)


ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, document.getElementById('root'));

