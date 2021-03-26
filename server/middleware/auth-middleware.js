const db = require('../db');

module.exports =() => {

    return async(req,res,next) => {
        console.log("Auth middleware")
    
        const raw_token = req.headers['authorization'];
  
           
        if(!raw_token){
           
            return res.status(401).send("Access Denied");
        } 
        else{
            let token =  raw_token.split(" ")[1]; 
            console.log(token);
            let result = await db.validateToken(token);
            if(result[0].count>0){
            next();
            }
            else{
                return res.status(401).send("Access Denied(Invalid Key)");
            }
        }

    };

};