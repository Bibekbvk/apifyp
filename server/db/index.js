const mysql = require('mysql');

const pool = mysql.createPool({

    connectionLimit:10000,
    // user: 'garageinc',
    // password: '#Garage123',
    // database:'garageinc',
    // host:'151.106.26.182',
    // port: '3306'

    user: 'root',
    password: '',
    database:'drmobile',
    host:'localhost',
    port: '3306'


});

let drmobile={};

drmobile.all = () => {

    return new Promise((resolve,reject) => {

        pool.query(`SELECT * from feedback LIMIT 10`,(err,results) => {
            
            if(err){
                return reject(err);
            }
            else{
                return resolve(results);
            }

        });


    });


};



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


drmobile.getCategory = (category,limit) => {

    return new Promise((resolve,reject) => {
        pool.query(`SELECT * FROM products WHERE category LIKE ? LIMIT ?,10` ,[category,limit],(err,results) => {
            
            if(err){
                return reject(err);
            }
            else{
                return resolve(results);
            }

        });


    });


};




drmobile.allBrands= () => {

    return new Promise((resolve,reject) => {

        pool.query('SELECT `name` as "brand_name",`image_url`,`priority_id` FROM `brand_list`',(err,results) => {
            
            if(err){
                return reject(err);
            }
            else{
                return resolve(results);
            }

        });


    });


};


//get staffs
drmobile.getstaff = () => {

    return new Promise((resolve,reject) => {
          
        pool.query(`SELECT * FROM staff`,(err,results) => {

            
            if(err){
                return reject(err);
            }
            else{
                return resolve(results);
            }

        });


    });


};

//get medicine
drmobile.getmedicine = () => {

    return new Promise((resolve,reject) => {
          
        pool.query(`SELECT * FROM medicine`,(err,results) => {

            
            if(err){
                return reject(err);
            }
            else{
                return resolve(results);
            }

        });


    });


};

drmobile.getemergency = () => {

    return new Promise((resolve,reject) => {
          
        pool.query(`SELECT * FROM emergencycontact`,(err,results) => {

            
            if(err){
                return reject(err);
            }
            else{
                return resolve(results);
            }

        });


    });


};


drmobile.getabortion = () => {

    return new Promise((resolve,reject) => {
          
        pool.query(`SELECT * FROM abortion`,(err,results) => {

            
            if(err){
                return reject(err);
            }
            else{
                return resolve(results);
            }

        });


    });


};



drmobile.getvolunteer = () => {

    return new Promise((resolve,reject) => {
          
        pool.query(`SELECT * FROM volunteer`,(err,results) => {

            
            if(err){
                return reject(err);
            }
            else{
                return resolve(results);
            }

        });


    });


};



drmobile.getsexeducation = () => {

    return new Promise((resolve,reject) => {
          
        pool.query(`SELECT * FROM sexeducation`,(err,results) => {

            
            if(err){
                return reject(err);
            }
            else{
                return resolve(results);
            }

        });


    });


};


drmobile.gethelp = () => {

    return new Promise((resolve,reject) => {
          
        pool.query(`SELECT * FROM help`,(err,results) => {

            
            if(err){
                return reject(err);
            }
            else{
                return resolve(results);
            }

        });


    });


};







drmobile.getVehiclesDetails = (id) => {

    return new Promise((resolve,reject) => {

        pool.query(`SELECT * FROM vehicles WHERE id LIKE ?` ,[id],(err,results) => {

            
            if(err){
                return reject(err);
            }
            else{
                return resolve(results);
            }

        });


    });


};

drmobile.validateToken = (token) => {

    return new Promise((resolve,reject) => {

        pool.query(`SELECT count(user) as count FROM tokens WHERE token LIKE ?` ,[token],(err,results) => {

            
            if(err){
                return reject(err);
            }
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


drmobile.featuredProducts = () => {

    return new Promise((resolve,reject) => {

        pool.query(`SELECT * FROM products where featured_product = '1'`,(err,results) => {
            
            if(err){
                return reject(err);
            }
            else{
                return resolve(results);
            }

        });


    });


};





// insert feedback
drmobile.insertfeedback = (user_id,contact,name,feedback) => {

    return new Promise((resolve,reject) => {

        pool.query(`insert into feedback(UID, contact, Name, feedback) values(?, ?, ?, ?)`,[user_id, contact, name, feedback],(err,results) => {
            
          
           

            if(err){
               
                return reject(err);}
         
            else{
                return resolve(results);
            }

        });


    });


};

//inserting user details
drmobile.registration = (uid,name,contact,username,password) => {

    return new Promise((resolve,reject) => {

        pool.query(`insert into users(UID, name, contact, username, password) values(?, ?, ?, ?, ?)`,[uid, name, contact, username, password],(err,results) => {
            
          
           

            if(err){
               
                return reject(err);}
         
            else{
                return resolve(results);
            }

        });


    });


};

// Get username password
drmobile.login = (email,password) => {

    return new Promise((resolve,reject) => {
       
        pool.query("SELECT * FROM user WHERE (email, password) = (?, ?)", [email, password], function(err, row) {
            console.log(row.length);
            if(row.length!=0) {
              console.log("User Logged In");
              resolve(row);
              } else {
              res.status(404);
              console.error("Failure");
                reject(err);
            }
          });

    });


};











// insert user id and product id wish list 


// drmobile.insertwishlist = (user_id,product_id) => {

//     return new Promise((resolve,reject) => {

//         pool.query(`insert into wishlist(uuid, product_id) values(?, ?)`,[user_id, product_id],(err,results) => {
            
          
           

//             if(err){
               
//                 return reject(err);}
         
//             else{
//                 return resolve(results);
//             }

//         });


//     });


// };



// select user id and product id wish list 


drmobile.userProduct = (user_id) => {

    return new Promise((resolve,reject) => {

        pool.query(`SELECT * FROM wishlist where uuid LIKE '%' ? '%'`,[user_id],(err,results) => {
            
            if(err){
                return reject(err);
            }
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