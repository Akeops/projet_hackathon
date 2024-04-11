import React, { useEffect, useRef, useState } from "react";
import "mapbox-gl/dist/mapbox-gl.css";
import mapboxgl from "mapbox-gl";
import "../styles/map.css"; // Assurez-vous que ce chemin est correct.

mapboxgl.accessToken =
	"pk.eyJ1Ijoic3lsdmFpbmdhbHRpZXIiLCJhIjoiY2tsZ3JoZ3kyMWV3OTJ3cDdrcjM0azh0eiJ9.zH81EkDqnNnXFigXe1f7PQ";

const App = () => {
	const mapContainerRef = useRef(null);
	const lng = 2.3488;
	const lat = 48.8566;
	const zoom = 12;
	const [toiletData, setToiletData] = useState([]);

	// Fonction pour récupérer les données des toilettes depuis une API.
	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await fetch(
					"http://localhost:3001/api/v1/toilets"
				);
				if (!response.ok) throw new Error("Erreur de réseau");
				const data = await response.json();
				setToiletData(data);
			} catch (error) {
				console.error(
					"Erreur de récupération des données des toilettes:",
					error
				);
			}
		};

		fetchData();
	}, []);

	// Initialisation de la carte Mapbox et ajout des marqueurs une fois les données chargées.
	useEffect(() => {
		if (!mapContainerRef.current) return; // Assurez-vous que le conteneur existe.
		// Création de l'instance de la carte.
		const map = new mapboxgl.Map({
			container: mapContainerRef.current,
			style: "mapbox://styles/mapbox/streets-v11",
			center: [lng, lat],
			zoom: zoom,
		});

		// Fonction pour ajouter des marqueurs à la carte.
		const addMarkers = () => {
			toiletData.forEach((toilet) => {
				new mapboxgl.Marker()
					.setLngLat([toilet.geoPointLon, toilet.geoPointLat])
					.addTo(map);
			});
		};

		map.on("load", addMarkers); // Ajoute des marqueurs une fois la carte chargée.

		// return () => map.remove(); // Nettoyage lors du démontage du composant.
	}, [toiletData]); // Réexécute cet effet si `toiletData` change.

	return <div ref={mapContainerRef} className="map-container"></div>;
};

export default App;
