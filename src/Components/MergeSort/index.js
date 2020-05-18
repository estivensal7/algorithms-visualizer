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

import mergeAlgorithm from "../../Algorithms/Sorting/merge";

const tempArray = [3, 1, 10, 21, 14, 16, 18, 18, 19, 50, 43, 28, 23, 54, 48];

console.log(mergeAlgorithm(tempArray));

const MergeSort = (props) => {
	return <div>Merge</div>;
};

export default MergeSort;
