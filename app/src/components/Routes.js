import React from 'react';
import { Switch, Route } from 'react-router-dom';
import LandingPage from './LandingPage';
import About from './About';
import Courses from './Courses';
import Header from './Header';
import MainInfo from './MainInfo';

const Routes = () => (
	<Switch>
		<Route exact path = "/" component = {LandingPage}/>
		<Route  path = "/About" component = {MainInfo}/>
		{/*<Route  path = "/Courses" component = {Courses}/>
		//<Route path = "/ContactUS" component = {ContactUS}/>*/}
	</Switch>
)
export default Routes;