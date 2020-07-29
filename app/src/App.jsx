import React, {Component} from 'react'
import CareerDev from './components/CareerDev';
import Footer from './components/Footer';
import CourseInformation from './CourseInformation'
import TrackList from './components/TrackList'
import LandingPage from './components/LandingPage'
import About from './components/About'
import MainInfo from './components/MainInfo';
import SignUp from './components/SignUp';
import Mission from './components/Mission';
import Navbar from './components/Navbar';
import {Layout, Navigation, Header, Drawer,Content} from 'react-mdl';
import Routes from './components/Routes';
import { HashLink as Link } from 'react-router-hash-link';
import './App.css'; 
import Courses from './components/Courses';
import { NavHashLink as NavLink } from 'react-router-hash-link';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';


class App extends Component{
constructor(props){
super(props) 
}
  render() {
    return(
		<div>
			<Navbar />
			<LandingPage/>
      <Mission />
    	<MainInfo />
      
    	<Courses />
    	<Footer/>
		</div>
	);
   }
 }

export default App;