import React from 'react';


function Header(){
	return(
		<div className = "headerMain">
		<nav id="nav">
			<a href= "#about">About</a>
			<a href ="#tracks">Tracks</a>
			<a href="#contact">Contact Us </a>
		</nav>
		<header id="header"> 
			<div className ="bg-image">
				<div className = "content-wrap">
					<h1 style="background-color:powderblue;"> STEAM LAB </h1>
				</div>
			</div>
		</header>
		</div>
		)
}

export default Header;

