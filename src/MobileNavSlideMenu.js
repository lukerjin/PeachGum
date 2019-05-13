import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "./CSS/SlideMenu.css";

class MobileNavSlideMenu extends Component {
	render() {
		var slideMenuVisibility = "";
		if (this.props.visibility) {
			slideMenuVisibility = "show";
			{/* prevent scrolling from Icon side*/}
			document.body.style.position = "fixed";
			document.body.style.overflow = "hidden";
		}
		else {
			document.body.style.position = "";
		    document.body.style.overflow = "";
		}

		return(
			<div id="slideMenu" className={slideMenuVisibility} onClick={this.props.expandSlideNav}>
				<ul>
					<li><NavLink exact to="/"><div>Home</div></NavLink></li>
					<hr></hr>
					<li><NavLink to="/contact"><div>Contact</div></NavLink></li>
				</ul>
			</div>
		);
	}
}

export default MobileNavSlideMenu;