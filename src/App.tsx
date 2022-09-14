import React, { Component } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Details from "./pages/Details";
import "./global.css";

class App extends Component {
	render() {
		return (
			<>
				<Header />
				<main>
					<section>
						<Routes>
							<Route path={"/"} element={<Home />} />
							<Route path={"/details"} element={<Details />} />
						</Routes>
					</section>
				</main>
			</>
		);
	}
}

export default App;
