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
import Routes from './components/Routes';
import { Link } from  'react-router-dom';

import './App.css'; 


class App extends Component{
constructor(props){
super(props) 
}
render() {
return(
<div >
	<LandingPage />
	<MainInfo />
	<Mission />
	<SignUp />
	<Footer />


	
	
</div>
	);
   }
 }

export default App;