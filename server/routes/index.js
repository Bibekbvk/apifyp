const express = require('express');
var cors = require('cors'); //added 
const db = require('../db');
const authorize = require('../middleware/auth-middleware.js');
const router = express.Router();
app.use(cors()); //added
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
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET'); // If needed
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
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




router.get('/getgrass', async (req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET'); // If needed
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    try {

        res.statusCode = 200;
        let result = await db.getgrass();
        res.json(result);

    }
    catch (e) {
        console.log("some error");
        console.log(e);
        res.sendStatus(500);


    }


});



router.get('/getcanvas', async (req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET'); // If needed
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
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
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET'); // If needed
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
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
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET'); // If needed
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
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
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET'); // If needed
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
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




router.get('/insertOrder', async (req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET'); // If needed
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    try {

        res.statusCode = 200;

        let result = await db.insertOrder(decodeURI(req.query.order_id),decodeURI(req.query.P_id), decodeURI(req.query.type), decodeURI(req.query.name), decodeURI(req.query.contact), decodeURI(req.query.time));
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
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET'); // If needed
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
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
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET'); // If needed
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
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
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET'); // If needed
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
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
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET'); // If needed
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
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
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET'); // If needed
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
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
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET'); // If needed
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
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


module.exports = router;