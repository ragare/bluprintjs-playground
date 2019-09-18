import { Router, Route, Switch, Link, NavLink } from 'react-router-dom'
import React from 'react'
import createHistory from 'history/createBrowserHistory'

import PlayNotFound from './PlayNotFound'
import PlayMenu from './PlayMenu'
import PlayTable from './PlayTable'
import PlayNavbar from './PlayNavbar'

export const history = createHistory()

const PlayAppRouter = () => (
    <Router history={history}>
        <Switch>
            <Route path="/menu" component={PlayMenu} exact={true} />
            <Route path="/table" component={PlayTable} />
            <Route path="/nav" component={PlayNavbar} exact={true} />
            <Route component={PlayNotFound} />
        </Switch>
    </Router>
)

export default PlayAppRouter