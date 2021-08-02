const express = require('express');
const apiRouter =require('./routes');
//recently added
var cors = require('cors')
const app = express();
const rateLimit = require("express-rate-limit");
const helmet = require("helmet");
// to use env values
require('dotenv').config()


// Refer :  https://www.npmjs.com/package/express-rate-limit
const apiLimiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 1000
  });
app.use(apiLimiter);

app.use(express.json());
//recently added
app.use(cors());
app.use(helmet());

app.use('/api/',apiRouter);


app.listen(process.env.PORT||'3000',()=>{
  

    console.log(`Server is runnning on port: ${process.env.PORT || "3000"}`)
    

});