const mysql = require('mysql');

const pool = mysql.createPool({

    connectionLimit:10000,
 

    user: 'bhattara_bvk',
    password: 'special4u@A',
    database:'bhattara_mstrader',
    host:'localhost',
    port: '3306'


});

let drmobile={};




drmobile.allcategories = () => {

    return new Promise((resolve,reject) => {

        pool.query(`SELECT DISTINCT category as category_name from products`,(err,results) => {
            
            if(err){
                return reject(err);
            }
            else{
                return resolve(results);
            }

        });


    });


};

//staff selected
drmobile.searchProduct = (term,limit) => {

    return new Promise((resolve,reject) => {
        pool.query(`SELECT * FROM products WHERE tags LIKE '%' ? '%' OR name LIKE '%' ? '%' LIMIT ?,10`,[term,term,limit],(err,results) => {
            
            if(err){
                return reject(err);
            }
            else{
                return resolve(results);
            }

        });


    });


};





















drmobile.getwallpaper = () => {

    return new Promise((resolve,reject) => {

        pool.query(`SELECT * FROM wallpaper`,(err,results) => {
            
            if(err){
                return reject(err);
            }
            else{
                return resolve(results);
            }

        });


    });


};


drmobile.getgrass = () => {

    return new Promise((resolve,reject) => {

        pool.query(`SELECT * FROM grass`,(err,results) => {
            
            if(err){
                return reject(err);
            }
            else{
                return resolve(results);
            }

        });


    });


};



drmobile.getcanvas = () => {

    return new Promise((resolve,reject) => {

        pool.query(`SELECT * FROM canvas`,(err,results) => {
            
            if(err){
                return reject(err);
            }
            else{
                return resolve(results);
            }

        });


    });


};



drmobile.getmural = () => {

    return new Promise((resolve,reject) => {

        pool.query(`SELECT * FROM mural`,(err,results) => {
            
            if(err){
                return reject(err);
            }
            else{
                return resolve(results);
            }

        });


    });


};



drmobile.wallfoam = () => {

    return new Promise((resolve,reject) => {

        pool.query(`SELECT * FROM wallfoam`,(err,results) => {
            
            if(err){
                return reject(err);
            }
            else{
                return resolve(results);
            }

        });


    });


};



drmobile.getother = () => {

    return new Promise((resolve,reject) => {

        pool.query(`SELECT * FROM others`,(err,results) => {
            
            if(err){
                return reject(err);
            }
            else{
                return resolve(results);
            }

        });


    });


};



drmobile.insertOrder = (order_id, P_id,type,name,contact,date) => {

    return new Promise((resolve,reject) => {

        pool.query(`insert into orders(order_id, P_id, type, name, contact, date) values(?, ?, ?, ?, ?, ?)`,[order_id, P_id, type, name, contact, date],(err,results) => {
            
          
           

            if(err){
               
                return reject(err);}
         
            else{
                return resolve(results);
            }

        });


    });


};





drmobile.deletecanvas = (P_id) => {

    return new Promise((resolve,reject) => {

        pool.query(`Delete from canvas where P_id Like '%' ? '%'`,[P_id],(err,results) => {
            
          
           

            if(err){
               
                return reject(err);}
         
            else{
                return resolve(results);
            }

        });


    });


};




drmobile.deletewallpaper = (P_id) => {

    return new Promise((resolve,reject) => {

        pool.query(`Delete from wallpaper where P_id Like '%' ? '%'`,[P_id],(err,results) => {
            
          
           

            if(err){
               
                return reject(err);}
         
            else{
                return resolve(results);
            }

        });


    });


};





drmobile.deletewallfoam = (P_id) => {

    return new Promise((resolve,reject) => {

        pool.query(`Delete from foam where P_id Like '%' ? '%'`,[P_id],(err,results) => {
            
          
           

            if(err){
               
                return reject(err);}
         
            else{
                return resolve(results);
            }

        });


    });


};




drmobile.deletegrass = (P_id) => {

    return new Promise((resolve,reject) => {

        pool.query(`Delete from grass where P_id Like '%' ? '%'`,[P_id],(err,results) => {
            
          
           

            if(err){
               
                return reject(err);}
         
            else{
                return resolve(results);
            }

        });


    });


};



drmobile.deletemular = (P_id) => {

    return new Promise((resolve,reject) => {

        pool.query(`Delete from mular where P_id Like '%' ? '%'`,[P_id],(err,results) => {
            
          
           

            if(err){
               
                return reject(err);}
         
            else{
                return resolve(results);
            }

        });


    });


};



drmobile.deleteother = (P_id) => {

    return new Promise((resolve,reject) => {

        pool.query(`Delete from others where P_id Like '%' ? '%'`,[P_id],(err,results) => {
            
          
           

            if(err){
               
                return reject(err);}
         
            else{
                return resolve(results);
            }

        });


    });


};






drmobile.customWidget = () => {

    return new Promise((resolve,reject) => {

        pool.query(`SELECT * FROM widgets`,(err,results) => {

            
            if(err){
                return reject(err);
            }
            else{
                return resolve(results);
            }

        });


    });


};






module.exports = drmobile;