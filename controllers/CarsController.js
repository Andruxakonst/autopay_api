const DbController = require("./DbController.js");

exports.list = function (req, res){
  // console.log("x-www-form-urlencoded",request.body);      //x-www-form-urlencoded
  // console.log("Параметры маршрута",request.params);       //параметры маршрута
  // console.log("get параметры",request.query);             //get параметры
  // console.log("headers",request.headers.auth);
  if(Object.keys(req.body).length > 0){
    let reqData = req.body;
    if('fields' in reqData){
      let limit; 
      let offset = 0;
      if('limit' in reqData){limit = reqData.limit};
      if('offset' in reqData){offset = reqData.offset};

      if(Object.keys(reqData.fields).length > 0 && typeof reqData.fields == "object" && 'car' in reqData.fields&& Array.isArray(reqData.fields.car), reqData.fields.car.length >0){ 
        if(limit !=''){
          var limitStr = `LIMIT ${limit}`;
        }else{
          limitStr='';
        };
        if(offset >0){
          var offsetStr = `OFFSET ${offset}`;
        }else{
          offsetStr = '';
        };
        let str = `SELECT ${reqData.fields.car.join(', ')} FROM public.car ORDER BY id ASC ${limitStr} ${offsetStr}`;
        console.log(str);
        str = `select * from fn_add_order_mobile('{"points":[{"city":"Геленджик (Геленджик городской округ)","street":"Репина","house":"25","id_org":"","textpoint":"44.54906930797083,38.09736795723439","id_all":"","not_approved":false},{"city":"Геленджик","street":"Керченская","house":"4","id_org":"","textpoint":"44.5605945,38.079113","id_all":"","not_approved":false}],"operPressOk":true,"android_ver":"1.136","pkg_name":"uptaxi.svat","phone":"+79000000029","locale":"","who":"android","service":5,"uuid":"4ba6a8c1ab77a597","my_place":"44.5492448,38.0973684","phone2":"","comment":"","date_pre":"","options":[73,35],"entry":"","add_price":"0.0","bonus":0.0,"selected_payment_card_token":"","selected_payment_method_type":"","cashless":false,"pin_code":"","car_class_add_info":[],"routeTimes":[],"hybrid":false}')`;
        DbController.pool.query(str,[], (error, results) =>{
          if (error) {
            console.log('error', error);
            res.send('error data base');
          }else{
            console.log('results', results.rows);
            res.send(results.rows);
          };
        });
      }else{
        responseErr(-4, "", "Поле fields->car в теле запроса,отсутсвует, не является массивом или пусто.");
      };
    }else{
      responseErr(-3, "", "Отсутсвует поле fields в теле запроса.");
    };
  }else{
    responseErr(-2, "", "Отсутсвует тело завпроса, тело пустое или имеет неверный формат.");
  };

  function responseErr(id, data, text){
    res.status(400).send({status:'error', id, data, text});
  };
};
