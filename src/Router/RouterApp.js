import React, {Component, Fragment} from 'react';
import HomePage from "../Pages/HomePage";
import {Route, Switch} from "react-router-dom";
import InsurancePage from "../Pages/InsurancePage";
import ZomEthPage from "../Pages/zomethPage";

class RouterApp extends Component {
    render() {
        return (
            <Fragment>
                <Switch>
                    <Route exact path="/" component={HomePage}/>
                    <Route exact path="/insurance" component={InsurancePage}/>
                    <Route exact path="/zometh" component={ZomEthPage}/>
                </Switch>

            </Fragment>
        );
    }
}

export default RouterApp;