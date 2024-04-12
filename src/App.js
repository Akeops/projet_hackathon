import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBarConnecte";
import MapComponent from "./components/MapComponent";
import DirectoryToiletPage from "./pages/DirectoryToilet.tsx";

import HelpPage from "./pages/Help.tsx";
import LegalMention from "./pages/LegalMention.tsx";
import Contact from "./pages/Contact.tsx";
import RegistrationForm from "./pages/RegistrationForm.tsx";
import ConnectionForm from "./pages/Connection.tsx";

import "./App.css";


function App() {
	return (
		<div className="App">
			<Router>
				<NavBar />
				<main className="childMain">
					<Routes>
						<Route
							path="/annuaire"
							element={<DirectoryToiletPage />}
						/>
						<Route
							path="/aide"
							element={<HelpPage />}
						/>
						<Route
							path="/mentionLegale"
							element={<LegalMention />}
						/>
						<Route
							path="/contact"
							element={<Contact />}
						/>
						<Route
							path="/inscription"
							element={<RegistrationForm />}
						/>
						<Route
							path="/connection"
							element={<ConnectionForm />}
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
