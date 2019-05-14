import React, { Component } from "react";
import defaultImage from "../img/imgDefault.png";
import "../CSS/ExploreHealthy.css";
import explore1 from "../img/explore1.jpg";
import explore2 from "../img/explore2.jpg";
import explore3 from "../img/explore3.jpg";

function DisplayUnit ({href,src, alt, desc}) {

	return (
		<div className="boxContainer">
			<a href={href}>
				<div className="boxStyle">
					<img className="imgStyle" src={src} alt={alt} />
					<div className="descStyle">{desc}</div>
				</div>
			</a>
		</div>
	);
}

class ExploreHealthy extends Component {
	render() {
		return(
			<div className="exploreContainer">
				<h2>Explore Healthy</h2>
				<div className="exploreBox">
					<DisplayUnit href="https://www.google.com.au" src={explore1} alt="Peach Gum Image" desc="Peach Gum" />
					<DisplayUnit href="https://www.google.com.au" src={explore2} alt="Honey Locust Image" desc="Honey Locust" />
					<DisplayUnit href="https://www.google.com.au" src={explore3} alt="Sonw Swallow Image" desc="Sonw Swallow" />
				</div>
			</div>
		);
	}
}

export default ExploreHealthy;