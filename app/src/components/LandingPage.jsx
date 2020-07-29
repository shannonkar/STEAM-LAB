import React from 'react'
import {AppBar, Tabs, Tab} from '@material-ui/core'
import Footer from './Footer';
import MainInfo from './MainInfo';
import Mission from './Mission';



function LandingPage(){
	return(
		<div>
			<header id="header"> 
				<div className ="bg-image">
					<div className = "banner-text"> 
              			<h1>STEAM LAB KENYA</h1>
            		</div>	
		     	</div>			 
			</header>  
  		</div>
	)
}

export default LandingPage;