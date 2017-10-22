import React from 'react';
import { Switch, Route } from 'react-router-dom'
import AboutUs from './AboutUs';
import Devices from './Devices';
import Header from "./Header"
import Home from "./Home"
require('../../scss/style.scss');

const App = () => (
    <div className="app-container">
        <Header/>
        <Switch>
            <Route exact path='/' component={Home}/>
            <Route path='/about-us' component={AboutUs}/>
            <Route path='/devices' component={Devices}/>
        </Switch>
    </div>
);

export default App;