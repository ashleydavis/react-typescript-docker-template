import * as React from 'react';
import { HashRouter, Route, Switch, Redirect, Link } from 'react-router-dom';
import { HomeUI } from './home/home';
import { Page1UI } from './page1/page1';
import { Page2UI } from './page2/page2';

export interface IAppProps {
}

export interface IAppState {
}

export class AppUI extends React.Component<IAppProps, IAppState> {

    render() {
        return (
            <HashRouter>
                <Switch>
                    <Route exact path="/">
                        <HomeUI />
                    </Route>
                    <Route path="/page1">
                        <Page1UI />
                    </Route>
                    <Route path="/page2">
                        <Page2UI />
                    </Route>
                </Switch>
            </HashRouter>
        );
    }
}