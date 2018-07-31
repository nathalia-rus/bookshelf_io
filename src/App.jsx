import React, { Component } from 'react';

import './App.css'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import MainPage from './components/MainPage'
import Fantastic from './components/Fantastic'
import Welcome from './components/Welcome'
import History from './components/History'
import Poetry from './components/Poetry'


class App extends Component {
    render() {
        return ( <Router >
            <div >
            <Route exact path = "/"
            component = { MainPage }/> 
            <Route exact path = "/Fantastic"
            component = { Fantastic }/> 
            <Route exact path = "/History" component = { History }/> 
            <Route exact path = "/Poetry"component = { Poetry }/>

            </div> 
            </Router> 
        );
    }
}

export default App;