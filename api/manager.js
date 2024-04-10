const { db } = require("./models/db");
const toiletRouter = require("./routes/toiletRoute");
const userRouter = require("./routes/userRoute");

const express = require("express");

const app = express();
const PORT = 3000;

app.use(express.json());
app.use("/api/v1/users", userRouter);
app.use("/api/v1/toilets", toiletRouter);

db.sync().then(async () => {
	app.listen(PORT, () => {
		console.log(`Server running triple monstre`);
	});
});
