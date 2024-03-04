import "./App.css";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import Map from "./Components/Map";

function App() {
	return (
		<Router>
			<Routes>
				<Route path="/"></Route>
				<Route path="/map" Component={Map}>

        </Route>
			</Routes>
		</Router>
	);
}

export default App;
