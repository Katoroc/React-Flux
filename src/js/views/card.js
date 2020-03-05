import React, { useState, useEffect } from "react";
import Proptypes from "prop-types";

export function Card(props) {
	return (
		<div className="m-2" style={{ width: "300px" }}>
			<img
				className="card-img-top"
				src="https://vignette.wikia.nocookie.net/disney/images/2/21/Star_Wars_logo.png/revision/latest?cb=20170909202326"
				alt="Starwars Card"
			/>
			<div className="card-body">
				<h5 className="card-title d-flex justify-content-center" style={{ color: "yellow" }}>
					Character
				</h5>
				<p className="card-text" style={{ color: "yellow" }}>
					<div>{props.name}</div>
					<div>{props.birth_year}</div>
					<div>{props.gender}</div>
				</p>
				<a href="#" className="btn btn-warning d-flex justify-content-center">
					Go to profile
				</a>
			</div>
		</div>
	);
}
Card.propTypes = {
	name: Proptypes.string,
	birth_year: Proptypes.string,
	gender: Proptypes.string
};
