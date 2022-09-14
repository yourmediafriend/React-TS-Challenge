import React, { Component } from "react";
import { GlobalStyle } from "./styles/GlobalStyle";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Details from "./pages/Details";

const App = () => (
	<>
		<GlobalStyle />
		<BrowserRouter>
			<Header />
			<main>
				<section>
					<Routes>
						<Route path={"/"} element={<Home />} />
						<Route path={"/movie/:id"} element={<Details />} />
					</Routes>
				</section>
			</main>
		</BrowserRouter>
	</>
);

export default App;
