const express = require("express");
const CarsController = require("../controllers/CarsController.js");
const carsRouter = express.Router();

carsRouter.post("/list" ,CarsController.list);
 
module.exports = carsRouter;