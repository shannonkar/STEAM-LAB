import React from 'react'
import {AppBar, Tabs, Tab} from '@material-ui/core'

function LandingPage(){
	return(
		<div>
			<AppBar position="static"  style={{ backgroundColor: '#1E90FF', boxShadow: 'none'}}>
		        <Tabs>
		          <Tab label="About" />
		          <Tab label="Courses" />
		          <Tab label="Testimonials" />
		          <Tab label="Contact" />
		        </Tabs>
	      </AppBar>

		<header id="header"> 
			<div className ="bg-image">
		     <h1> STEAM LAB </h1>
		     <p>STEAM-LAB is a Science and Technology centered initatieve that aims to increase the 
		          level of technology skills among kids in kenya.</p>
		      <a href = "#" className="button">Read More </a>
		     </div>			 
		</header>

		</div>
		)
}

export default LandingPage;