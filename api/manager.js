const express = require("express");
const { db } = require("./models/db");

const app = express();
const PORT = 3000;

const carRouter = require("./routes/carRoutes");
const customerRouter = require("./routes/customerRoutes");
const sellRouter = require("./routes/sellRoutes");

app.use(express.json());

app.use("/api/v1/cars", carRouter);
app.use("/api/v1/customers", customerRouter);
app.use("/api/v1/sells", sellRouter);

db.sync().then(async () => {
  app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
});
