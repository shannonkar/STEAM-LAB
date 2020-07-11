import React, {Component} from 'react'
import ContactUs from './components/ContactUs';
import Footer from './components/Footer';
import CourseInformation from './CourseInformation'
import TrackList from './components/TrackList'
import LandingPage from './components/LandingPage'
import Form from './components/Form';
import './App.css';


class App extends Component{
constructor(props){
super(props) 
}
render() {
return(
<div >
	<LandingPage />
	<TrackList CourseInformation = {CourseInformation} />
	<ContactUs />
	<Footer />
</div>
	);
   }
 }

export default App;