import React from 'react';
import ReactDOM from 'react-dom';
import './scss/main.scss';
import App from './App';
import {createStore} from 'redux';
import allReducer from './reducers'
import {Provider} from 'react-redux';

export const state = {
    turn: 'X',
    winner: '',
    draw: '',
    squares: Array(9).fill(''),
    defaultState : ''
}


export const store = createStore(allReducer, state)


ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, document.getElementById('root'));

