const express = require("express");
const TransactionsController = require("../controllers/TransactionsController.js");
const transactionsRouter = express.Router();
 
transactionsRouter.post("/list", TransactionsController.list);
transactionsRouter.post("/categories/list", TransactionsController.categories);
 
module.exports = transactionsRouter;