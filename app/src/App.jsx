import React, {Component} from 'react';
import './App.css';
import LandingPage from './components/LandingPage';
import About from './components/About'



class App extends Component{
	render() {
		return(
		<div>
			<LandingPage />	
		</div>
		);
	}
}

export default App;