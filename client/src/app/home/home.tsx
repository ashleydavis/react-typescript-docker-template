import * as React from 'react';
import { Link } from 'react-router-dom';

export interface IHomeProps {
}

export interface IHomeState {
}

export class HomeUI extends React.Component<IHomeProps, IHomeState> {

    render() {
        return (
            <div>
                <p>Home page</p>
                <div><Link to="/page1">Go to page 1</Link></div>
                <div><Link to="/page2">Go to page 2</Link></div>
            </div>
        );
    }
}