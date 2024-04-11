import React, { useState, useEffect } from "react";
import ToiletCard from "./ToiletCard";
import "../styles/DirectoryItems.css";

function DirectoryToilet() {
	const [toiletData, setToiletData] = useState([]);
	const [searchQuery, setSearchQuery] = useState("");

	useEffect(() => {
		async function getDataToilet() {
			try {
				const response = await fetch(
					"http://localhost:3001/api/v1/toilets"
				);
				const data = await response.json();
				setToiletData(data);
			} catch (error) {
				console.error("Error fetching toilet data:", error);
			}
		}

		getDataToilet();
	}, []);

	const handleSearchChange = (event) => {
		setSearchQuery(event.target.value);
	};

	const filteredToilets = toiletData.filter((toilet) => {
		return (
			toilet.adress &&
			toilet.adress.toLowerCase().includes(searchQuery.toLowerCase())
		);
	});

	return (
		<div>
			<h1>Annuaire des toilettes</h1>
			<input
				type="text"
				placeholder="Rechercher par adresse"
				value={searchQuery}
				onChange={handleSearchChange}
				className="inputDirectory"
			/>
			<ul className="toiletCardContainer">
				{filteredToilets.map((toilet) => (
					<div className="toiletCard">
						<ToiletCard
							key={toilet.id}
							type={toilet.type}
							address={toilet.adress}
							borough={toilet.borough}
							hours={toilet.hours}
							disableAcs={toilet.disableAcs}
							babyAccess={toilet.babyAccess}
						/>
					</div>
				))}
			</ul>
		</div>
	);
}

export default DirectoryToilet;
