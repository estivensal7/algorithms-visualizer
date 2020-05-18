import React, { useState } from "react";
import {
	Collapse,
	Navbar,
	NavbarToggler,
	NavbarBrand,
	Nav,
	NavItem,
	NavLink,
} from "reactstrap";

//importing Components
import FilterNav from "../../Components/FilterNav";
import MergeSort from "../../Components/MergeSort";

const Sorting = (props) => {
	return (
		<div>
			<h1>Sorting Page</h1>
			<MergeSort />
			<FilterNav />
		</div>
	);
};

export default Sorting;
