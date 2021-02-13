import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { Home } from "./routes";

//routes
const routes = [
	{
		path: "/",
		component: Home,
	},
];

const App = () => {
	return (
		<Router>
			<Switch>
				{routes.map((route, i) => {
					return (
						<Route
							key={i}
							exact
							path={route.path}
							component={route.component}
						/>
					);
				})}
			</Switch>
		</Router>
	);
};

export default App;
