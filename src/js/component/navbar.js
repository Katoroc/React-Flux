import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from "reactstrap";
export const Navbar = () => {
	const [dropdownOpen, setDropdownOpen] = useState(false);

	const toggle = () => setDropdownOpen(prevState => !prevState);

	return (
		<nav className="navbar navbar-light bg-light mb-3">
			<Link to="/">
				<span className="navbar-brand mb-0 h1">Return Home</span>
			</Link>
			<div className="d-flex justify-content-center">
				<Dropdown isOpen={dropdownOpen} toggle={toggle}>
					<DropdownToggle color="warning" caret>
						More
					</DropdownToggle>
					<DropdownMenu>
						<DropdownItem divider />
						<DropdownItem href="/demo"> Check the Context in action</DropdownItem>
						<DropdownItem href="/nextpage"> Next Page</DropdownItem>
						<DropdownItem href="/starwars"> Starwars</DropdownItem>
					</DropdownMenu>
				</Dropdown>
			</div>
		</nav>
	);
};
