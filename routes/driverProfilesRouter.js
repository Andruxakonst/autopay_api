const express = require("express");
const DriverProfilesController = require("../controllers/DriverProfilesController.js");
const driverProfilesRouter = express.Router();
 
driverProfilesRouter.post("/list", DriverProfilesController.list);
driverProfilesRouter.put("/car-bindings", DriverProfilesController.bindingsPut);
driverProfilesRouter.delete("/car-bindings", DriverProfilesController.bindingsDel);
driverProfilesRouter.post("/transactions/list", DriverProfilesController.transactionsList);
driverProfilesRouter.post("/transactions", DriverProfilesController.transactions);

 
module.exports = driverProfilesRouter;