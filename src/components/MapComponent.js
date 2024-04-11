import React, { useRef, useEffect, useState } from "react";
import mapboxgl from "!mapbox-gl"; // eslint-disable-line import/no-webpack-loader-syntax

import "../styles/map.css";
mapboxgl.accessToken =
	"pk.eyJ1Ijoic3lsdmFpbmdhbHRpZXIiLCJhIjoiY2tsZ3JoZ3kyMWV3OTJ3cDdrcjM0azh0eiJ9.zH81EkDqnNnXFigXe1f7PQ";

export default function App() {
	const mapContainer = useRef(null);
	const map = useRef(null);
	const [lng, setLng] = useState(2.3488);
	const [lat, setLat] = useState(48.8566);
	const [zoom, setZoom] = useState(12);

	useEffect(() => {
		if (map.current) return;
		map.current = new mapboxgl.Map({
			container: mapContainer.current,
			style: "mapbox://styles/mapbox/streets-v12",
			center: [lng, lat],
			zoom: zoom,
		});

		map.current.on("move", () => {
			setLng(map.current.getCenter().lng.toFixed(4));
			setLat(map.current.getCenter().lat.toFixed(4));
			setZoom(map.current.getZoom().toFixed(2));
		});
	});

	return (
		<div>
			<div ref={mapContainer} className="map-container" />
		</div>
	);
}
