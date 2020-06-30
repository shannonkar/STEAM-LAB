import React, {Component} from 'react';
import './App.css';
import Header from './components/Header';
import About from './components/About'
import ContactUs from './components/ContactUs'


class App extends Component{
	render() {
		return(
		<div>
			<Header />
			<About />
			<ContactUs />
		</div>
		);
	}
}

export default App;