import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Route,
    Switch
} from 'react-router-dom';

import ROUTERS from './router';

import MainLayout from '../layout/main';
import NotFound from '../pages/NotFound';

import './styles/index.css';

class App extends Component {
    render() {
        return (
            <Router>
                <MainLayout>
                    <Switch>
                        {
                            ROUTERS.map((route, index) => (
                                <Route
                                    key={index}
                                    exact={route.exact}
                                    path={route.path}
                                    component={route.component}
                                />
                            ))
                        }
                        <Route component={ NotFound }/>
                    </Switch>
                </MainLayout>
            </Router>
        );
    }
}

export default App;
