import React, { useEffect, useRef, useState } from "react";
import "mapbox-gl/dist/mapbox-gl.css";
import mapboxgl from "mapbox-gl";
import "../styles/map.css";

mapboxgl.accessToken =
	"pk.eyJ1Ijoic3lsdmFpbmdhbHRpZXIiLCJhIjoiY2tsZ3JoZ3kyMWV3OTJ3cDdrcjM0azh0eiJ9.zH81EkDqnNnXFigXe1f7PQ";

const App = () => {
	const mapContainerRef = useRef(null);
	const lng = 2.3488;
	const lat = 48.8566;
	const zoom = 12;
	const [toiletData, setToiletData] = useState([]);

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

	useEffect(() => {
		if (!mapContainerRef.current) return;
		const map = new mapboxgl.Map({
			container: mapContainerRef.current,
			style: "mapbox://styles/mapbox/streets-v11",
			center: [lng, lat],
			zoom: zoom,
		});

		const addMarkers = () => {
			toiletData.forEach((toilet) => {
				const popup = new mapboxgl.Popup({ offset: 25 }).setText(
					`${toilet.adress}, ${toilet.borough}`
				);

				new mapboxgl.Marker()
					.setLngLat([toilet.geoPointLon, toilet.geoPointLat])
					.addTo(map)
					.setPopup(popup);
			});
		};

		map.on("load", addMarkers);
	}, [toiletData]);

	return <div ref={mapContainerRef} className="map-container"></div>;
};

export default App;
