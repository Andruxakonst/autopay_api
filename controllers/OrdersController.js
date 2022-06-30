const auth = require("../controllers/AuthController.js");
exports.list = function (request, response){
    response.send("Список заказов");
};
exports.track = function (request, response){
    response.send("Трэк по заказу");
};
exports.transactionsList = function (request, response){
    response.send("Список транзакций по заказу");
};