import React, {Component} from 'react'
import ContactUs from './components/ContactUs';
import Footer from './components/Footer';
import CourseInformation from './CourseInformation'
import TrackList from './components/TrackList'
import LandingPage from './components/LandingPage'
import About from './components/About'
import MainInfo from './components/MainInfo';
import SignUp from './components/SignUp';
import Mission from './components/Mission';
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
    	<Router>
		<div >
			<Layout fixedHeader>
        		<Header className = "header-color" title={<span><span style={{ color: '#eaeaea' }}>STEAM-LAB</span><strong></strong></span>}>
		            <Navigation>
		                <Link  to="/About#main" scroll={el => el.scrollIntoView({ behavior: 'instant', block: 'end' })}>About Us</Link>
		                <Link to="/Courses">Courses</Link>
		                <Link to = "/ContactUs">Contact Us</Link>
		            </Navigation>
        		</Header>
        		<Drawer style ={{color: "#e" }} title="Title">
		            <Navigation>
		                 <Link to="/About">About Us</Link>
		                <Link to="/Courses">Courses</Link>
		                <Link to = "/ContactUs">Contact US</Link>
		            </Navigation>
       			 </Drawer>

		        <Content>
		        	<div>
		        		<Route exact path = "/" component = {LandingPage}/>
		        		<Route  path = "/Courses" component = {Courses}/>
		        		
		        	</div>
		        </Content>
   			 </Layout>
			

		</div>
	</Router>
	);
   }
 }

export default App;