import React, {Component} from 'react';
import Footer from './components/Footer';
import LandingPage from './components/LandingPage'
import About from './components/About'
import MainInfo from './components/MainInfo';
import Mission from './components/Mission';
import Navbar from './components/Navbar';
import './App.css'; 
import Tutoring from './components/Tutoring';


class App extends Component{
constructor(props){
super(props) 
}
  render() {
    return(
		<div className = "App">
			<Navbar />
			<LandingPage/>
      <About />
      <MainInfo />
      <Tutoring />
      <Mission />
    	<Footer/>
		</div>
	);
   }
 }

export default App;