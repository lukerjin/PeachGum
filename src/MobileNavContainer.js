import React, { Component } from "react";
import MobileNavButton from "./MobileNavButton";
import MobileNavSlideMenu from "./MobileNavSlideMenu";


class MobileNavContainer extends Component {
	constructor(props) {
		super(props);
		this.expandSlideNav = this.expandSlideNav.bind(this);
		this.state = {visibility: false};
	}

	expandSlideNav() {
		this.setState(state=> ({
			visibility: !state.visibility
		}));

	}

	render() {
		return(
			<div className="mobileNav">
				<MobileNavButton visibility={this.state.visibility} expandSlideNav= {this.expandSlideNav} />
				<MobileNavSlideMenu visibility={this.state.visibility} expandSlideNav= {this.expandSlideNav} />
			</div>
		);
	}
}

export default MobileNavContainer;