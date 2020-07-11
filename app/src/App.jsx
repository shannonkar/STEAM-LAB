import React, {Component} from 'react';
import './App.css';
import LandingPage from './components/LandingPage';
import About from './components/About';
import ContactUs from './components/ContactUs';
import Footer from './components/Footer';
import CourseInformation from './CourseInformation'
import TrackList from './components/TrackList'

class App extends Component{
	constructor(props){
		super(props)
		
	}
	render() {
		return(
		<div className = "container">
			<LandingPage />
			<TrackList CourseInformation = {CourseInformation} />
			<ContactUs />
			<LandingPage />	
		</div>
		);
	}
}

export default App;