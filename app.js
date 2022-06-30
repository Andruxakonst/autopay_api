const express = require("express");
const app = express();
const bodyParser = require('body-parser');

const authController = require("./controllers/AuthController.js");

const carsRouter = require("./routes/carsRouter.js");
const driverProfilesRouter = require("./routes/driverProfilesRouter.js");
const driverWorkRulesRouter = require("./routes/driverWorkRulesRouter.js");
const ordersRouter = require("./routes/ordersRouter.js");
const transactionsRouter = require("./routes/transactionsRouter.js");
const { response, request } = require("express");

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use("/cars",authController.auth, carsRouter);
app.use("/driver-profiles",authController.auth, driverProfilesRouter);
app.use("/driver-work-rules",authController.auth, driverWorkRulesRouter);
app.use("/orders",authController.auth, ordersRouter);
app.use("/transactions",authController.auth, transactionsRouter);

// обработка ошибки 404
app.use(function (req, res, next) {
    res.status(404).send("Not Found")
});
 
app.listen(3000);