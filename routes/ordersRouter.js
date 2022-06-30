const express = require("express");
const OrdersController = require("../controllers/OrdersController.js");
const ordersRouter = express.Router();
 
ordersRouter.post("/list", OrdersController.list);
ordersRouter.post("/track", OrdersController.track);
ordersRouter.post("/transactions/list", OrdersController.transactionsList);
 
module.exports = ordersRouter;