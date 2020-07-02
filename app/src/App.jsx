import React, {Component} from 'react';
import './App.css';
import LandingPage from './components/LandingPage';
import About from './components/About';
import ContactUs from './components/ContactUs';
import Footer from './components/Footer';


class App extends Component{
	render() {
		return(
		<div>
			<LandingPage />
			<ContactUs />
			<Footer />
		</div>
		);
	}
}

export default App;