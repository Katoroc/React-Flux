import React, { useState } from "react";
import { Link } from "react-router-dom";
export function Nextpage() {
	const [list, setList] = useState([]);
	const [content, setContent] = useState();
	return (
		<div className="card d-flex mx-auto" style={{ width: "32rem" }}>
			<div className="card-body">
				<ul className="list-group list-group-flush">
					<li className="list-group-item">
						<button
							className="anything text-dark"
							onClick={() => {
								setList(list.concat(content));
								setContent("");
							}}>
							Add to Do
						</button>
						<input
							placeholder="Please add a task"
							value={content}
							onChange={e => setContent(e.target.value)}
							onKeyPress={e => {
								if (e.key === "Enter") {
									setList(list.concat(content));
									setContent("");
								}
							}}
						/>
						{list.map((item, index) => {
							return <div key={index}>{item}</div>;
						})}
					</li>
				</ul>
				<Link to="/">
					<button className="btn btn-primary">Back home</button>
				</Link>
			</div>
			<div>
				<Link to="/starwars">
					<button className="success">Starwars</button>
				</Link>
			</div>
		</div>
	);
}
