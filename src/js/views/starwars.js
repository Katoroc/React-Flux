import React, { useState, useEffect } from "react";
import { Card } from "./card";
//create your first component
export function Starwars() {
	const [people, setPeople] = useState([]);
	useEffect(() => {
		fetch("https://swapi.co/api/people/")
			.then(resp => resp.json())
			.then(data => {
				setPeople(data.results);

				console.log(data);
			});
	});
	return (
		<>
			<div className="d-flex justify-content-center">
				{people.map((item, index) => {
					return <Card key={index.name} />;
				})}
			</div>
		</>
	);
}
