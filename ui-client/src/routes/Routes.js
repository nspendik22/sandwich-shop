import React, { Component } from "react";
import { Router, Switch, Route } from "react-router-dom";

import Order from "../components/Order";
import Menu from "../components/Menu";
import history from '../history';

export default class Routes extends Component {
    render() {
        return (
            <Router history={history}>
                <Switch>
                    <Route path="/" exact component={Menu} />
                    <Route path="/order/:id" component={Order} />
                </Switch>
            </Router>
        )
    }
}