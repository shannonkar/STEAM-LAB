import React from 'react'
import {AppBar, Tabs, Tab} from '@material-ui/core'

const spaceholder = {
  backgroundColor: "#000000",
  fontSize: "20px",
  color: "white",
  padding: "10px",
  left: "0",
  bottom: "0",
  height: "50px",
  width: "100%"
};


function LandingPage(){
	return(
		<div>
			<AppBar position="static"  style={{ backgroundColor: '#101010', boxShadow: 'none'}}>
		        <Tabs>
		          <Tab label="About" />
		          <Tab label="Mission" />
		          <Tab label="Sign Up" />
		        </Tabs>
	      	</AppBar>

			<header id="header"> 
				<div className ="bg-image">
				<div className = "banner-text"> 
              <h1>STEAM LAB KENYA</h1>
              <hr/>
              <p>STEAM-LAB is a Science and Technology centered initatieve that aims to increase the 
		          	level of technology skills among kids in kenya.</p>
            </div>	
		     </div>			 
			</header>
			<div style={spaceholder} ></div>    
		</div>
	)
}

export default LandingPage;