exports.auth = (res, req, next)=>{
    if(typeof res.headers.auth != 'undefined'){
        //TODO Заменить 1111 на запрос из БД!
        if(res.headers.auth === 1111..toString()){
            next();
        }else{
            req.status(401).send(JSON.stringify({status:"error", code:-1, data:"Unauthorized",text:"Ошибка в хедере auth"})); 
        };
    }else{
        req.status(401).send(JSON.stringify({status:"error", code:-1, data:"Unauthorized",text:"Нет хедера auth"})); 
    };
}