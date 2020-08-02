import React from 'react';
import {Router, Switch, Route } from 'react-router-dom';
import LandingPage from './LandingPage';
import About from './About';
import Courses from './Courses';
import Header from './Header';
import MainPage from './MainPage';
import history from './../history';
const Routes = () => (
	<Router history = {history}>
	<Switch>
		<Route exact path = "/" component = {MainPage}/>
		<Route  path = "/Courses" component = {Courses}/>
	</Switch>
   </Router>
)
export default Routes;