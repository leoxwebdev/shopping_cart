import React, { Component } from 'react'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'

import MainLayout from './components/layouts/main-layout'
import HomePage from './components/home/home-page'

export default(
    <Router history={browserHistory}>
        <Route component={MainLayout}>
            <Route path="/">
              <IndexRoute component={HomePage} />
              <Route path=":id" component={HomePage}/>
            </Route>
          </Route>
    </Router>
)
