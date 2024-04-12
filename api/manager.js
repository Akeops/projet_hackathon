const { db } = require("./models/db");
const toiletRouter = require("./routes/toiletRoute");
const userRouter = require("./routes/userRoute");
const cors = require("cors");

const express = require("express");

const app = express();
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept",
  );
  next();
});
const PORT = 3001;

app.use(express.json());

app.use("/api/v1/users", userRouter);
app.use("/api/v1/toilets", toiletRouter);

// const { readFile } = require("node:fs/promises");

// let data;

// async function insertData() {
//   let tempData = await readFile("./sanisettesparis.json", {
//     encoding: "utf8",
//   });
//   data = JSON.parse(tempData);
//   return data;
// }

// const toiletService = require("./services/toiletService");
// const userService = require("./services/userService");

// db.sync({force: true}).then(async () => {
db.sync().then(async () => {
  // insertData().then((data) => {
  //   data.forEach((element) => {
  //     toiletService.createToilet({
  //       type: element.type,
  //       adress: element.adresse,
  //       borough: element.arrondissement,
  //       hours: element.horaire,
  //       disableAcs: element.acces_pmr,
  //       babyAccess: element.relais_bebe,
  //       geoPointLon: element.geo_point_2d.lon,
  //       geoPointLat: element.geo_point_2d.lat,
  //     });
  //   });
  // });
  // userService.createUser({
  // 	nickname: "John",
  // 	email: "email@mail.com",
  // 	password: "root",
  // });
  app.listen(PORT, () => {
    console.log(
      `Serveur running, triple moooooonstre on http://localhost:${PORT}`,
    );
  });
});
