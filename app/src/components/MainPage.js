import React, {Component} from 'react';
import Footer from './Footer';
import LandingPage from './LandingPage'
import About from './About'
import MainInfo from './MainInfo';
import Mission from './Mission'
import Tutoring from './Tutoring';


class MainPage extends Component{
constructor(props){
super(props) 
}
  render() {
    return(
		<div className = "MainPage">
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

export default MainPage;