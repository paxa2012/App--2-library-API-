import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router } from "react-router-dom";
import { createStore, applyMiddleware } from 'redux';
import { allReducers } from './reducers/index';
import thunk  from 'redux-thunk';

const persistedState = localStorage.getItem('reduxState') ? JSON.parse(localStorage.getItem('reduxState')) : {} ;

const store = createStore(
    allReducers,
    persistedState,
    applyMiddleware(thunk)
);
//const store = createStore(allReducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
store.subscribe(() => {
    console.log('subscribe', store.getState());
    localStorage.setItem('reduxState', JSON.stringify(store.getState()))
})


ReactDOM.render(
    <Router>
        <App store={store} />
    </Router>,
    document.getElementById('root'));
serviceWorker.unregister();
