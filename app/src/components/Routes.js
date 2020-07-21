import React from 'react';
import { Switch, Route } from 'react-router-dom';
import LandingPage from './LandingPage';
import About from './About';
import Mission from './Mission';
import SignUp from './SignUp';

const Routes = () => (
	<Switch>
		<Route exact path = "/" component = {LandingPage}/>
		<Route  path = "/About" component = {About}/>
		<Route  path = "/Mission" component = {Mission}/>
		<Route path = "/SignUp" component = {SignUp}/>
	</Switch>
)
export default Routes;