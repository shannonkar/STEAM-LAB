import React from 'react'
import {AppBar, Tabs, Tab} from '@material-ui/core'
import Footer from './Footer';
import MainInfo from './MainInfo';
import Mission from './Mission';

const spaceholder = {
  backgroundColor: "#000000",
  fontSize: "20px",
  color: "white",
  paddingTop: "100px",
  left: "0",
  bottom: "0",
  height: "50px",
  width: "100%"
};


function LandingPage(){
	return(
    <div>
		<div>
			<header id="header"> 
				<div className ="bg-image">
				<div className = "banner-text"> 
              <h1>STEAM LAB KENYA</h1>
              <hr/>
              <p>STEAM-LAB is a Science, Technology, Engineering, Arts and Math centered initative whose mission is to increase the that aims to 
              increase the level of technology understanding, manipulation and development among kids in kenya. We foster innovation, growth and the capacity 
              to grow and be more.</p>
            </div>	
		     </div>			 
			</header>
			<div style={spaceholder} ></div>    
		</div>

   <div>
    <MainInfo />
    <Mission />
    <Footer/>
  </div>
  </div>
	)
}

export default LandingPage;