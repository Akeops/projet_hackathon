const { db } = require("./models/db");
const toiletRouter = require("./routes/toiletRoute");
const userRouter = require("./routes/userRoute");

const express = require("express");

const app = express();
const PORT = 3000;

// const toiletService = require("./services/toiletService");

app.use("/api/v1/users", userRouter);
app.use("/api/v1/toilets", toiletRouter);

db.sync().then(async () => {
	// toiletService.insertData().then((data) => {
	// 	data.forEach((element) => {
	// 		toiletService.createToilet({
	// 			type: element.type,
	// 			adress: element.adresse,
	// 			borough: element.arrondissement,
	// 			hours: element.horaire,
	// 			disableAcs: element.acces_pmr,
	// 			babyAccess: element.relais_bebe,
	// 			geoPointLon: element.geo_point_2d.lon,
	// 			geoPointLat: element.geo_point_2d.lat,
	// 		});
	// 	});
	// });
	app.listen(PORT, () => {
		console.log(`Server running triple monstre`);
	});
});
