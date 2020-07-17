import React, {Component} from 'react'
import ContactUs from './components/ContactUs';
import Footer from './components/Footer';
import CourseInformation from './CourseInformation'
import TrackList from './components/TrackList'
import LandingPage from './components/LandingPage'
import About from './components/About'
import MainInfo from './components/MainInfo';
import BigText from './components/BigText';
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
	<BigText />
	<Footer />
</div>
	);
   }
 }

export default App;