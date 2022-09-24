import express from "express";
import bodyParser from "body-parser";
import viewEngine from './config/viewEngine'
import initWebRoutes from './route/web'
import connectDb from './config/connectDB'
require('dotenv').config()

let app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended: true
}))

viewEngine(app);
initWebRoutes(app);
connectDb();

let port = process.env.PORT || 8001;
app.listen(port, ()=>{
    console.log('Backend Nodejs is runing on ther port '+port)
})

