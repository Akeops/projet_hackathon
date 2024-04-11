async function getDataToilet() {
	const data = await fetch("http://localhost:3001/api/v1/toilets");
	return data.json();
}

console.log(getDataToilet());

async function DirectoryToilet() {
	return (
		<div>
			{getDataToilet().forEach((element) => {})}
		</div>
	);
}

export default DirectoryToilet;
