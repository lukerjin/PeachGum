import React, { Component } from "react";
import menu from "./img/peach_col.svg";
import downArrow from "./img/downarrow.svg";
import "./CSS/MobileNavButton.css";

class MobileNavButton extends Component {

	render() {

  		var buttonVisibility = "";
  		if(this.props.visibility) {
			buttonVisibility = "arrowRotate";
  		}

		return(
			<div className="mobileMenu" onClick={this.props.expandSlideNav} >
			  <img className="menuIcon" src={menu} alt="Menu" />
			  <img id="downArrow" className={buttonVisibility} src={downArrow} alt="Menu" />
			</div>
		);
	}
}

export default MobileNavButton;