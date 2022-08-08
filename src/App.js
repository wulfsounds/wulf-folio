// Standard React Landing Design
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import "./App.css";

// Import Components
import Header from "./components/end-caps/Header";
import Footer from "./components/end-caps/Footer";

// Import Pages
import Home from "./pages/Home"

// Import Folio Pages
import DNDY from "./pages/folio/design/DNDY";
import EmpTrk from "./pages/folio/develop/EmpTrk";

// Import 404 Page
import Gateway from "./pages/Gateway"

function App() {
	return (
		<ChakraProvider>
			<div className="App">
				<Router>
					<Header />
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/design" element={<DNDY />} />
						<Route path="/develop" element={<EmpTrk />} />
            <Route path='*' element={<Gateway />} />
					</Routes>
          <Footer />
				</Router>
			</div>
		</ChakraProvider>
	);
}

export default App;
