import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { Router, Switch } from 'react-router';
import {createBrowserHistory} from 'history';

import Header from './Components/Header';
import HomeHeader from './Components/HomeHeader';
import Footer from './Components/Footer';

// Pages
import Home from './Pages/Home';
import Portfolios from './Pages/Portfolios';
import SinglePortfolio from './Pages/SinglePortfolio';
import p404 from './Pages/p404';

import './vendors/bootstrap/bootstrap.min.css';
import './assets/scss/style.css';
import './App.css';

const history = createBrowserHistory()

class App extends Component {
    constructor(props){
        super(props);

        this.state = {
            api: '//profile.nasiruddin.com/wp-json/',
            user: 1,
        }
    }

    render() {
        return (
            <Router history={history}>
                <div id="page" className="page-wrapper">

                    {/* Header Switch */}
                    <Switch>
                        <Route path={'/'} exact strict component={HomeHeader}></Route>
                        <Route component={Header}></Route>
                    </Switch>

                    {/* Page Switch */}
                    <Switch>
                        <Route path={'/'} exact strict component={() => <Home api={this.state.api} user={this.state.user} />} />
                        <Route path={'/works'} exact strict component={() => <Portfolios api={this.state.api} />} />
                        {/*<Route path={'/:page'} exact strict component={() => <SinglePortfolio api={this.state.api} />} />*/}
                        <Route path={'/work/:slug'} exact strict component={() => <SinglePortfolio api={this.state.api} id={'sddf'} />} />
                        <Route component={p404}/>
                    </Switch>

                    {/* Footer Section */}
                    <Footer api={this.state.api} user={this.state.user}/>
                </div>
            </Router>
        );
    }
}

export default App;