import { Router, Route, Switch, Link, NavLink } from 'react-router-dom'
import React from 'react'
import {createBrowserHistory} from 'history'

import PlayNotFound from './PlayNotFound'
import PlayMenu from './PlayMenu'
import PlayTable from './PlayTable'
import PlayNavbar from './PlayNavbar'
import PlayForm from './PlayForm'
import PlayDate from './PlayDate'

export const history = createBrowserHistory()

const PlayAppRouter = () => (
    <Router history={history}>
        <Switch>
            <Route path="/menu" component={PlayMenu} exact={true} />
            <Route path="/table" component={PlayTable} />
            <Route path="/nav" component={PlayNavbar} exact={true} />
            <Route path="/form" component={PlayForm} exact={true} />
            <Route path="/date" component={PlayDate} exact={true} />
            <Route component={PlayNotFound} />
        </Switch>
    </Router>
)

export default PlayAppRouter