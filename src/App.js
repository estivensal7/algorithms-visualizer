import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";

//importing Components/Pages
import Navigation from "./Components/Navigation";
import Landing from "./Pages/Landing";
import Pathfinder from "./Pages/Pathfinder";
import Sorting from "./Pages/Sorting";

function App() {
	return (
		<Router>
			<div className="App">
				<Navigation />
				<Switch>
					<Route exact path="/" component={Landing} />
					<Route
						exact
						path="/pathfinder-algorithms"
						component={Pathfinder}
					/>
					<Route
						exact
						path="/sorting-algorithms"
						component={Sorting}
					/>
				</Switch>
			</div>
		</Router>
	);
}

export default App;
