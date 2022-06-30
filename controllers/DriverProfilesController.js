exports.list = function (request, response){
    response.send("Список водительских профилей");
};
exports.bindingsPut = function (request, response){
    response.send("Привязка водителей с авто");
};
exports.bindingsDel = function (request, response){
    response.send("Отвязывание водителей от авто");
};
exports.transactions = function (request, response){
    response.send("Создание водительской транзакции");
};
exports.transactionsList = function (request, response){
    response.send("Список водительских транзакций");
};