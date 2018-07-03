import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import GetChirps from './main';
import EditChirp from './editchirp';
import SingleChirp from './singlechirp'

class Navigation extends Component {

    render() {
        return (
            <Router>
                <Fragment>
                    <Switch>
                        <Route exact path="/" component={GetChirps} />
                        <Route path="/chirp/:id/edit" component={EditChirp} />
                        <Route path="/chirp/:id/" component={SingleChirp} />
                    </Switch>
                </Fragment>
            </Router>
        )
    }
}

export default Navigation;