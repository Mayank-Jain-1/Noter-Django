import "./App.css";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import Map from "./Components/Map";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";

function App() {
	return (
    <div className="bg-primary h-full w-full ">
		<Navbar />
		<Router>
			<Routes>
				<Route path="/" Component={Home}></Route>
				<Route path="/map" Component={Map}>

        </Route>
			</Routes>
		</Router>
		<br />
		<br />
		<br />
		<br />
		<br />
		<br />
		<br />
		<br />
		<br />
		<br />
		<br />
		<br />
		<br />
		<br />
		<br />
		<br />
    </div>
	);
}

export default App;
