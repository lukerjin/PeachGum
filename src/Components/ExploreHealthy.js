import React, { Component } from "react";
import defaultImage from "../img/imgDefault.png";

function DisplayUnit ({href,src, alt, desc}) {
	const boxStyle={
		margin:15,
		border: "1px solid #E0E0E0",
		display: "inline-block",
	    borderRadius: 3
	};

	const imgStyle={
		width: 400
	};

	const descStyle={
		fontSize: 20,
		padding: 30,
		color: "#333",
		fontWeight: 'bold'
	};
	
	return (
		<div style={boxStyle}>
			<a href={href}>
				<img style={imgStyle} src={src} alt={alt} />
			</a>
			<div style={descStyle}>{desc}</div>
			
		</div>
	);
}

class ExploreHealthy extends Component {
	render() {
		return(
			<div>
				<h2>Explore Healthy</h2>
				<div>
					<DisplayUnit href="https://www.google.com.au" src={defaultImage} alt="Peach Gum Image" desc="Peach Gum" />
					<DisplayUnit href="https://www.google.com.au" src={defaultImage} alt="Honey Locust Image" desc="Honey Locust" />
					<DisplayUnit href="https://www.google.com.au" src={defaultImage} alt="Sonw Swallow Image" desc="Sonw Swallow" />
				</div>
			</div>
		);
	}
}

export default ExploreHealthy;