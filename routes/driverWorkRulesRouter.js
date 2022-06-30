const express = require("express");
const DriverWorkRulesController = require("../controllers/DriverWorkRulesController.js");
const driverWorkRulesRouter = express.Router();
 
driverWorkRulesRouter.post("/", DriverWorkRulesController.rules);
 
module.exports = driverWorkRulesRouter;