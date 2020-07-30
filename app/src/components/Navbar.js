import React, { Component } from "react";
import logo from "../logo.png";
import {Link, animateScroll as scroll} from "react-scroll";


class Navbar extends Component{
	scrollToTop = () => {
       scroll.scrollToTop(); 
	};
	render(){
		return(
			<div className = "navbar" id="navbar">
			<div className = "navbar-content">
				<img 
					src={logo}
					className = "navbar-logo"
					alt="Logo"
					onClick={this.scrollToTop}
				/>
				<ul className="navbar-items">
					<li className="navbar-item" >
					<Link
						activeClass = "active"
						to="banner-text"
						spy={true}
						navWidth={600}
						offset={-70}
						duration = {500}
						>
				 	ABOUT
					</Link>
					</li>

					<li className="navbar-item">
					<Link
						activeClass = "active"
						to="main"
						spy={true}
						navWidth={600}
						offset={-70}
						duration = {500}
					>
						KEY AREAS
					</Link>
					</li>

					<li className="navbar-item">
					<Link
						activeClass = "active"
						to="learning"
						spy={true}
						navWidth={600}
						offset={-70}
						duration = {500}
					>
						TUTORING
					</Link>
					</li>

					<li className="navbar-item">
					<Link
						activeClass = "active"
						to="bigtext"
						spy={true}
						navWidth={600}
						offset={-70}
						duration = {500}
					>
						COMMUNITY
					</Link>
					</li>
				</ul>
			</div>
	  		</div>
		);
	}
}
export default Navbar;