import 'sanitize.css/sanitize.css';
import globalStyle from './global-style';

import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import { syncHistoryWithStore } from 'react-router-redux';
import createHistory from 'history/createBrowserHistory';

import configureStore from './store.config';

import Home from './screens/home';
import RecipeDetail from './screens/recipe-detail';

const store = configureStore();
const history = syncHistoryWithStore(createHistory(), store);

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter history={history}>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/recipe/:id" component={RecipeDetail}/>
            </Switch>
        </BrowserRouter>
    </Provider>,
    document.getElementById('app')
);
