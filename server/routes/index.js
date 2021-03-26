const express = require('express');

const db = require('../db');
const authorize = require('../middleware/auth-middleware.js');
const router = express.Router();


router.get('/feedback', async(req,res,next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE'); // If needed
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type'); // If needed

    try{
        console.log("not error");
        res.statusCode = 200;
        let result = await db.all();
        res.json(result);

    }
    catch(e){
        console.log("some error");
        console.log(e);
   
        res.sendStatus(500);


    }


});

router.get('/allcategories', async(req,res,next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE'); // If needed
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type'); // If needed
    try{
        console.log("not error");
        res.statusCode = 200;
        let result = await db.allcategories();
        res.json(result);

    }
    catch(e){
        console.log("some error");
        console.log(e);
   
        res.sendStatus(500);


    }


});



router.get('/search', async(req,res,next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE'); // If needed
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type'); // If needed
    try{
        res.statusCode = 200;
        let result = await db.searchProduct(decodeURI(req.query.term),Number(req.query.limit));
        res.json(result);

    }
    catch(e){
        console.log("some error");
        console.log(e);
   
        res.sendStatus(500);


    }


});

// , authorize()
router.get('/category',async(req,res,next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET'); // If needed
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type'); 
    try{
        res.statusCode = 200;
        let result = await db.getCategory(req.query.category,Number(req.query.limit));
        res.json(result);

    }
    catch(e){
        console.log("some error");
        console.log(e);
   
        res.sendStatus(500);


    }


});

//For Vehicles

router.get('/brands', async(req,res,next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE'); // If needed
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type'); // If needed
    try{
        console.log("not error");
        res.statusCode = 200;
        let result = await db.allBrands();
        res.json(result);

    }
    catch(e){
        console.log("some error");
        console.log(e);
   
        res.sendStatus(500);


    }


});


   //For Staff Listing 
router.get('/staff', async(req,res,next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET'); // If needed
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type'); 
    try{
        
        res.statusCode = 200;
        let result = await db.getstaff();
        res.json(result);

    }
    catch(e){
        console.log("some error");
        console.log(e);
   
        res.sendStatus(500);


    }


});

//for getting medicine
router.get('/medicine', async(req,res,next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET'); // If needed
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type'); 
    try{
        
        res.statusCode = 200;
        let result = await db.getmedicine();
        res.json(result);

    }
    catch(e){
        console.log("some error");
        console.log(e);
   
        res.sendStatus(500);


    }


});


router.get('/emergency', async(req,res,next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET'); // If needed
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type'); 
    try{
        
        res.statusCode = 200;
        let result = await db.getemergency();
        res.json(result);

    }
    catch(e){
        console.log("some error");
        console.log(e);
        res.sendStatus(500);


    }


});




router.get('/abortion', async(req,res,next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET'); // If needed
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type'); 
    try{
        
        res.statusCode = 200;
        let result = await db.getabortion();
        res.json(result);

    }
    catch(e){
        console.log("some error");
        console.log(e);
        res.sendStatus(500);


    }


});




router.get('/volunteer', async(req,res,next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET'); // If needed
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type'); 
    try{
        
        res.statusCode = 200;
        let result = await db.getvolunteer();
        res.json(result);

    }
    catch(e){
        console.log("some error");
        console.log(e);
        res.sendStatus(500);


    }


});

router.get('/sexeducation', async(req,res,next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Accesss-Control-Allow-Methods', 'GET'); // If needed
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type'); 
    try{
        
        res.statusCode = 200;
        let result = await db.getsexeducation();
        res.json(result);

    }
    catch(e){
        console.log("some error");
        console.log(e);
        res.sendStatus(500);


    }


});

router.get('/help', async(req,res,next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Accesss-Control-Allow-Methods', 'GET'); // If needed
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type'); 
    try{
        
        res.statusCode = 200;
        let result = await db.gethelp();
        res.json(result);

    }
    catch(e){
        console.log("some error");
        console.log(e);
        res.sendStatus(500);


    }


});





 router.get('/bikes-details', async(req,res,next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE'); // If needed
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type'); // If needed
    try{
        console.log("not error");
        res.statusCode = 200;
        let result = await db.getVehiclesDetails(req.query.id);
        res.json(result);

    }
    catch(e){
        console.log("some error");
        console.log(e);
   
        res.sendStatus(500);


    }


});




router.get('/customWidgets', async(req,res,next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE'); // If needed
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type'); // If needed
    try{
        console.log("not error");
        console.log("custom");
        res.statusCode = 200;
        let result = await db.customWidget();
        res.json(result);

    }
    catch(e){
        console.log("some error");
        console.log(e);
   
        res.sendStatus(500);


    }


});

   // select wish list
   router.get('/userProduct', async(req,res,next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET'); // If needed
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type'); 
    try{
        res.statusCode = 200;
        let result = await db.userProduct(decodeURI(req.query.user_id),decodeURI(req.query.product_id));
        res.json(result);

    }
    catch(e){
        console.log("some error");
        console.log(e);
   
        res.sendStatus(500);


    }

});
 
 router.get('/featured-products', async(req,res,next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET'); // If needed
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type'); 
    try{

        res.statusCode = 200;
        let result = await db.featuredProducts();
        res.json(result);

    }
    catch(e){
        console.log("some error");
        console.log(e);
        res.sendStatus(500);
    }

});


router.get('/insertFeedback', async(req,res,next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET'); // If needed
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type'); 
    try{
        
        res.statusCode = 200;
        
        let result = await db.insertfeedback(decodeURI(req.query.user_id),decodeURI(req.query.contact),decodeURI(req.query.name),decodeURI(req.query.feedback));
        res.json(e.statusCode);
        console.log("successfully uploaded ")

    }
    catch(e){
       
        console.log("some error");
        if(e.code == "Duplicate entry"){
            res.statusCode = 500;
            
            res.json({'error':e.statuscode});
        }else{
            res.json({'error':e.code})
            console.log("successfully uploaded ")
        }
        res.sendStatus(500);
       

    }

});

router.post('/login',async(req, res) =>{
    console.log("login");
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE'); 
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type'); 
    try{
        
        res.statusCode = 200;
        
        let result = await db.login(req.body.email,req.body.password);
        res.json(result);
        console.log("successfully uploaded ")

    }
    catch(e){
       
        console.log("some error");
        if(e.code == "Duplicate entry"){
            res.statusCode = 500;
            
            res.json({'error':e.statuscode});
        }else{
            res.json({'error':e.code})
            console.log("successfully uploaded ")
        }
        res.sendStatus(500);
       

    }
  
  
  });
// registration
router.get('/registration', async(req,res,next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET'); // If needed
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type'); 
    try{
        
        res.statusCode = 200;
        
        let result = await db.registration(decodeURI(req.query.uid),decodeURI(req.query.name),decodeURI(req.query.contact),decodeURI(req.query.username),decodeURI(req.query.password));
        res.json(e.statusCode);
        console.log("successfully uploaded ")
        
    }
    catch(e){
       
        console.log("some error");
        if(e.code == "Duplicate entry"){
            res.statusCode = 500;
            
            res.json({'error':e.statuscode});
        }else{
            res.json({'error':e.code})
            console.log("successfully uploaded ")
        }
        res.sendStatus(500);
       

    }

});


//login 
// router.get('/login', async(req,res,next) => {
//     res.setHeader('Access-Control-Allow-Origin', '*');
//     res.setHeader('Access-Control-Allow-Methods', 'GET'); // If needed
//     res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type'); 
//     try{
        
//         res.statusCode = 200;
        
//         let result = await db.login(decodeURI(req.query.username),decodeURI(req.query.password));
//         res.json(result);
//         console.log("successfully found")
        
//     }
//     catch(e){
       
//         console.log("some error");
//         if(e.code == "Duplicate entry"){
//             res.statusCode = 500;
            
//             res.json({'error':e.statuscode});
//         }else{
//             res.json({'error':e.code})
//             console.log("Done")
//         }
//         res.sendStatus(500);
       

//     }

// });


//insert user id product id wishlist
// router.get('/insertwishlist', async(req,res,next) => {
//     res.setHeader('Access-Control-Allow-Origin', '*');
//     res.setHeader('Access-Control-Allow-Methods', 'GET'); // If needed
//     res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type'); 
//     try{
        
//         res.statusCode = 200;
        
//         let result = await db.insertwishlist(decodeURI(req.query.user_id),decodeURI(req.query.product_id));
//         res.json(e.statusCode);
//         console.log("successfully uploaded ")

//     }
//     catch(e){
       
//         console.log("some error");
//         if(e.code == "Duplicate entry"){
//             res.statusCode = 500;
            
//             res.json({'error':e.statuscode});
//         }else{
//             res.json({'error':e.code})
//             console.log("successfully uploaded ")
//         }
//         res.sendStatus(500);
       

//     }

// });
module.exports = router;