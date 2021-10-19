const express = require('express');
//var cors = require('cors'); //added 
const db = require('../db');
const authorize = require('../middleware/auth-middleware.js');
const router = express.Router();
//app.use(cors()); //added
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





router.get('/getwallpaper', async (req, res, next) => {

    try {

        res.statusCode = 200;
        let result = await db.getwallpaper();
        res.json(result);

    }
    catch (e) {
        console.log("some error");
        console.log(e);
        res.sendStatus(500);


    }


});


// tryingg.........................................................

router.get('/getnews', async (req, res, next) => {

    try {

        res.statusCode = 200;
        let result = await db.getnews();
        res.json(result);

    }
    catch (e) {
        console.log("some error");
        console.log(e);
        res.sendStatus(500);


    }


});




router.get('/getgrass', async (req, res, next) => {

    try {

        res.statusCode = 200;
        let result = await db.getgrass();
        res.json(result);
        console.log("trying,,,,,,,,,,,,,,,,,,,")
    }
    catch (e) {
        console.log("some error");
        console.log(e);
        res.sendStatus(500);


    }


});



router.get('/getorder', async (req, res, next) => {

    try {

        res.statusCode = 200;
        let result = await db.getorder();
        res.json(result);
        console.log("trying,,,,,,,,,,,,,,,,,,,")
    }
    catch (e) {
        console.log("some error");
        console.log(e);
        res.sendStatus(500);


    }


});



router.get('/getcanvas', async (req, res, next) => {

    try {

        res.statusCode = 200;
        let result = await db.getcanvas();
        res.json(result);

    }
    catch (e) {
        console.log("some error");
        console.log(e);
        res.sendStatus(500);


    }


});




router.get('/getmural', async (req, res, next) => {

    try {

        res.statusCode = 200;
        let result = await db.getmural();
        res.json(result);

    }
    catch (e) {
        console.log("some error");
        console.log(e);
        res.sendStatus(500);


    }


});



router.get('/wallfoam', async (req, res, next) => {

    try {

        res.statusCode = 200;
        let result = await db.wallfoam();
        res.json(result);

    }
    catch (e) {
        console.log("some error");
        console.log(e);
        res.sendStatus(500);


    }


});




router.get('/getother', async (req, res, next) => {

    try {

        res.statusCode = 200;
        let result = await db.getother();
        res.json(result);

    }
    catch (e) {
        console.log("some error");
        console.log(e);
        res.sendStatus(500);


    }


});





router.get('/insertItem', async (req, res, next) => {
   
    try {

        res.statusCode = 200;

        let result = await db.insertitem(decodeURI(req.query.P_id),decodeURI(req.query.type), decodeURI(req.query.name), decodeURI(req.query.descr), decodeURI(req.query.price), decodeURI(req.query.items), decodeURI(req.query.others), decodeURI(req.query.made),  decodeURI(req.query.images));
        res.json(e.statusCode);
        console.log("successfully uploaded ")

    }
    catch (e) {

        console.log("some error");
        if (e.code == "Duplicate entry") {
            res.statusCode = 500;

            res.json({ 'error': e.statuscode });
        } else {
            res.json({ 'error': e.code })
            console.log("successfully uploaded ")
        }
        res.sendStatus(500);


    }

});



router.get('/insertOrder', async (req, res, next) => {
   
    try {

        res.statusCode = 200;

        let result = await db.insertOrder(decodeURI(req.query.order_id),decodeURI(req.query.P_id), decodeURI(req.query.type), decodeURI(req.query.name), decodeURI(req.query.contact), decodeURI(req.query.date));
        res.json(e.statusCode);
        console.log("successfully uploaded ")

    }
    catch (e) {

        console.log("some error");
        if (e.code == "Duplicate entry") {
            res.statusCode = 500;

            res.json({ 'error': e.statuscode });
        } else {
            res.json({ 'error': e.code })
            console.log("successfully uploaded ")
        }
        res.sendStatus(500);


    }

});




router.get('/deletecanvas', async (req, res, next) => {
 
    try {

        res.statusCode = 200;

        let result = await db.deletecanvas(decodeURI(req.query.P_id));
        res.json(e.statusCode);
        console.log("successfully uploaded ")

    }
    catch (e) {

        console.log("some error");
        if (e.code == "Duplicate entry") {
            res.statusCode = 500;

            res.json({ 'error': e.statuscode });
        } else {
            res.json({ 'error': e.code })
            console.log("successfully uploaded ")
        }
        res.sendStatus(500);


    }

});





router.get('/deletewallpaper', async (req, res, next) => {
  
    try {

        res.statusCode = 200;

        let result = await db.deletewallpaper(decodeURI(req.query.P_id));
        res.json(e.statusCode);
        console.log("successfully uploaded ")

    }
    catch (e) {

        console.log("some error");
        if (e.code == "Duplicate entry") {
            res.statusCode = 500;

            res.json({ 'error': e.statuscode });
        } else {
            res.json({ 'error': e.code })
            console.log("successfully uploaded ")
        }
        res.sendStatus(500);


    }

});




router.get('/deletewallfoam', async (req, res, next) => {
 
    try {

        res.statusCode = 200;

        let result = await db.deletewallfoam(decodeURI(req.query.P_id));
        res.json(e.statusCode);
        console.log("successfully uploaded ")

    }
    catch (e) {

        console.log("some error");
        if (e.code == "Duplicate entry") {
            res.statusCode = 500;

            res.json({ 'error': e.statuscode });
        } else {
            res.json({ 'error': e.code })
            console.log("successfully uploaded ")
        }
        res.sendStatus(500);


    }

});




router.get('/deletegrass', async (req, res, next) => {

    try {

        res.statusCode = 200;

        let result = await db.deletegrass(decodeURI(req.query.P_id));
        res.json(e.statusCode);
        console.log("successfully uploaded ")

    }
    catch (e) {

        console.log("some error");
        if (e.code == "Duplicate entry") {
            res.statusCode = 500;

            res.json({ 'error': e.statuscode });
        } else {
            res.json({ 'error': e.code })
            console.log("successfully uploaded ")
        }
        res.sendStatus(500);


    }

});




router.get('/deletemular', async (req, res, next) => {
  
    try {

        res.statusCode = 200;

        let result = await db.deletemular(decodeURI(req.query.P_id));
        res.json(e.statusCode);
        console.log("successfully uploaded ")

    }
    catch (e) {

        console.log("some error");
        if (e.code == "Duplicate entry") {
            res.statusCode = 500;

            res.json({ 'error': e.statuscode });
        } else {
            res.json({ 'error': e.code })
            console.log("successfully uploaded ")
        }
        res.sendStatus(500);


    }

});




router.get('/deleteother', async (req, res, next) => {
  
    try {

        res.statusCode = 200;

        let result = await db.deleteother(decodeURI(req.query.P_id));
        res.json(e.statusCode);
        console.log("successfully uploaded ")

    }
    catch (e) {

        console.log("some error");
        if (e.code == "Duplicate entry") {
            res.statusCode = 500;

            res.json({ 'error': e.statuscode });
        } else {
            res.json({ 'error': e.code })
            console.log("successfully uploaded ")
        }
        res.sendStatus(500);


    }

});




router.get('/insertstaff', async (req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET'); // If needed
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    try {
    

        let result = await db.insertstaff(decodeURI(req.query.name), decodeURI(req.query.staff_type), decodeURI(req.query.location), decodeURI(req.query.fee), decodeURI(req.query.reg_no), decodeURI(req.query.photo));

    
        res.sendStatus(200);
        console.log("successfully uploaded ")

    }
    catch (e) {

        console.log("some error");
        if (e.code == "Duplicate entry") {
            res.statusCode = 500;

            res.json({ 'error': e.statuscode });
        } else {
            res.json({ 'error': e.code })
            console.log("successfully uploaded ")
        }
        res.sendStatus(500);


    }

});


router.get('/deleteorder', async (req, res, next) => {
 
    try {

        res.statusCode = 200;

        let result = await db.deleteorder(decodeURI(req.query.order_id));
        res.json(e.statusCode);
        console.log("successfully uploaded ")

    }
    catch (e) {

        console.log("some error");
        if (e.code == "Duplicate entry") {
            res.statusCode = 500;

            res.json({ 'error': e.statuscode });
        } else {
            res.json({ 'error': e.code })
            console.log("successfully uploaded ")
        }
        res.sendStatus(500);


    }

});



module.exports = router;