import "./App.css";
import NavBar from "./components/NavBarConnecte";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MapComponent from "./components/MapComponent";
import DirectoryToiletPage from "./pages/DirectoryToilet.tsx";

function App() {
	return (
		<div className="App">
			<header className="App-header">
				<NavBar />
			</header>
			<main>
				<Router>
					<Routes>
						<Route
							path="/annuaire"
							element={<DirectoryToiletPage />}
						/>

						<Route path="/" exact element={<MapComponent />} />
					</Routes>
				</Router>
			</main>
			{/* <ToiletCard /> */}
		</div>
	);
}

export default App;
