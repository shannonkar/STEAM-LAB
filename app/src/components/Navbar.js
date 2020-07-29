import React, { Component } from "react";
import {Link, animateScroll as scroll} from "react-scroll";

class Navbar extends Component{
	scrollToTop = () => {
    scroll.scrollToTop(); };
	state = {};
	render(){
		return(
			<div className = "navbar">
			<div className = "navbar-content">
				<img 
					className = "nav-logo"
					onClick={this.scrollToTop}
				/>
				<ul className="navbar-items">
					<li className="navbar-item" >
					<Link
						activeClass = "active"
						to="header"
						spy={true}
						offset={0}
						duration = {500}
						>
				 	Home
					</Link>
					</li>

					<li className="navbar-item">
					<Link
						activeClass = "active"
						to="main"
						spy={true}
						offset={0}
						duration = {500}
					>
						Key Areas
					</Link>
					</li>

					<li className="navbar-item">
					<Link
						activeClass = "active"
						to="courses"
						spy={true}
						offset={0}
						duration = {500}
					>
						Courses
					</Link>
					</li>

					<li className="navbar-item">
					<Link
						activeClass = "active"
						to="big-text"
						spy={true}
						offset={0}
						duration = {500}
					>
						Mission
					</Link>
					</li>
				</ul>
			</div>
	  		</div>
		);
	}
}
export default Navbar;