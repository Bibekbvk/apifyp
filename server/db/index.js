const mysql = require('mysql');

const pool = mysql.createPool({

    connectionLimit:30000,
 
    database:'iO6srMvsnE',
    user:'iO6srMvsnE',
    password:'wxUkcyHSFn',
    host:'remotemysql.com',
    port:'3306',
    //multipleStatements: true

    // user:'sql6428784',
    // password:'rSJNJswqY1',
    // database:'sql6428784',
    // host:'sql6.freemysqlhosting.net',
    // port:'3306'


});

//pool.release(error => error ? reject(error) : resolve());

// pool.connect(function(err) {
//     if (err) throw err;
//     console.log("Database Connected!");
//   });

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