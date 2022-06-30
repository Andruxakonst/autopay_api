exports.list = function (request, response){
    response.send("Список парковых транзакций");
};
exports.categories = function (request, response){
    response.send("Список транзакций по заказу");
};