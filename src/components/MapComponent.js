import React, { useRef, useEffect, useState } from "react";

import mapboxgl from "!mapbox-gl";

mapboxgl.accessToken =
	"pk.eyJ1Ijoic3lsdmFpbmdhbHRpZXIiLCJhIjoiY2tsZ3JoZ3kyMWV3OTJ3cDdrcjM0azh0eiJ9.zH81EkDqnNnXFigXe1f7PQ";

export default function App() {
	const mapContainer = useRef(null);
	const map = useRef(null);
	const [lng, setLng] = useState(2.3488);
	const [lat, setLat] = useState(48.8566);
	const [zoom, setZoom] = useState(12);
}
