import { Router, Route, Switch, Link, NavLink } from 'react-router-dom'
import React, { Suspense } from 'react'
import { createBrowserHistory } from 'history'

import PlayNotFound from './PlayNotFound'
import PlayMenu from './PlayMenu'
import PlayTable from './PlayTable'
import PlayNavbar from './PlayNavbar'
import PlayNavbar2 from './PlayNavbar2'
import PlayForm from './PlayForm'
import PlayDate from './PlayDate'
import PlaySelect from './PlaySelect'
import PlayMultiSelect from './PlayMultiSelect'
import PlaySuggest from './PlaySuggest'
import PlayLanguages from './PlayLanguages'

export const history = createBrowserHistory()

const PlayAppRouter = () => (
    <Suspense fallback="Loading....">
        <Router history={history}>
            <Switch>
                <Route path="/" component={PlayNavbar} exact={true} />
                <Route path="/menu" component={PlayMenu} exact={true} />
                <Route path="/table" component={PlayTable} />
                <Route path="/nav" component={PlayNavbar} exact={true} />
                <Route path="/form" component={PlayForm} exact={true} />
                <Route path="/date" component={PlayDate} exact={true} />
                <Route path="/select" component={PlaySelect} exact={true} />
                <Route path="/multiselect" component={PlayMultiSelect} exact={true} />
                <Route path="/suggest" component={PlaySuggest} exact={true} />
                <Route path="/languages" component={PlayLanguages} exact={true} />
                <Route path="/nav2" component={PlayNavbar2} exact={true} />
                <Route component={PlayNotFound} />
            </Switch>
        </Router>
    </Suspense>

)

export default PlayAppRouter