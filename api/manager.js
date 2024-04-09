const express = require("express");
const { db } = require("./models/db");

const app = express();
const PORT = 3000;

const userRouter = require("./routes/userRoute");


app.use(express.json());

app.use("/api/v1/users", userRouter);

db.sync().then(async () => {
	app.listen(PORT, () => {
		console.log();
	});
});
