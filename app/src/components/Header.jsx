import React from 'react';


function Header(){
	return(
		<div>
		<nav id="nav-bar">
			<a href= "#about">About</a>
			<a href ="#tracks">Tracks</a>
			<a href="#contact">Contact Us </a>
		</nav>
		<header id="header" class="grid"> 
			<div className ="bg-image">
					<div className = "content-wrap">
					 <h1 id="title-name"> STEAM LAB </h1>
					</div>

			</div>
		</header>
		</div>
		)
}

export default Header;

