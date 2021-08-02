const express = require('express');
const apiRouter =require('./routes');
const app = express();
const rateLimit = require("express-rate-limit");
const helmet = require("helmet");
const cors = require('cors')
//CORS policy
app.use(cors());
app.use(function (req, res, next) {
res.header("Access-Control-Allow-Origin", "*");
res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
next();
});

// to use env values
require('dotenv').config()

const apiLimiter = rateLimit({
    windowMs: 15 * 60 * 1000, 
    max: 1000
  });

app.use(apiLimiter);

app.use(express.json());

app.use(helmet());

app.use('/api/',apiRouter);

app.listen(process.env.PORT||'3000',()=>{

    console.log(`Server is runnning on port: ${process.env.PORT || "3000"}`)
    

});