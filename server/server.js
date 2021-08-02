const express = require('express');
const apiRouter =require('./routes');

var cors = require('cors')
const app = express();
const rateLimit = require("express-rate-limit");
const helmet = require("helmet");
// to use env values
require('dotenv').config()



const apiLimiter = rateLimit({
    windowMs: 15 * 60 * 1000, 
    max: 1000
  });

  
  app.use(cors({
    origin:'*'
  }));
  app.use(apiLimiter);

app.use(express.json());

app.use(helmet());
//using header
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  next();
});

app.use('/api/',apiRouter);


app.listen(process.env.PORT||'3000',()=>{
  

    console.log(`Server is runnning on port: ${process.env.PORT || "3000"}`)
    

});