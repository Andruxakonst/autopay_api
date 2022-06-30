const auth = require("../controllers/AuthController.js");
exports.rules = function (request, response){
    response.send("(GET) Список условий работы");
};