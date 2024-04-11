import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBarConnecte";
import MapComponent from "./components/MapComponent";
import DirectoryToiletPage from "./pages/DirectoryToilet.tsx";

function App() {
	return (
		<div className="App">
			<Router>
				<NavBar /> {/* NavBar est contenu dans le Router */}
				<main>
					<Routes>
						<Route
							path="/annuaire"
							element={<DirectoryToiletPage />}
						/>
						<Route path="/" element={<MapComponent />} />
					</Routes>
				</main>
			</Router>
			{/* <ToiletCard /> */}

		</div>
	);
}

export default App;
