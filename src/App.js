// Standard React Landing Design
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import "./App.css";

// Import Components
import Footer from "./components/end-caps/Footer";

// Import Pages
import Home from "./pages/Home";

// Import Folio Pages
import Design from "./pages/Design";
import Develop from "./pages/Develop";

// Import 404 Page
import Gateway from "./pages/Gateway";

function App() {
	return (
		<ChakraProvider>
			<div className="App">
				<Router>
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/design" element={<Design />} />
						<Route path="/develop" element={<Develop />} />
						<Route path="*" element={<Gateway />} />
					</Routes>
					<Footer />
				</Router>
			</div>
		</ChakraProvider>
	);
}

export default App;
