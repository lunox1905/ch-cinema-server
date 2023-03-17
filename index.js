const express = require('express')
const app = express()
const cors = require('cors')
const path = require('path')
const route = require('./routers')
const bodyParser = require('body-parser')
require('dotenv').config()

const db = require('./config/db')
db.connect()

app.use (bodyParser.json ({limit: '10mb', extended: true}))
app.use (bodyParser.urlencoded ({limit: '10mb', extended: true}))
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({
    extended: true
}));

app.use(express.json())

const corsOptions ={
    origin:'http://localhost:3000', 
    credentials:true,            //access-control-allow-credentials:true
    optionSuccessStatus:200
}
app.use(cors(corsOptions))
route(app);
app.listen(process.env.PORT, () => console.log(`localhost:${process.env.PORT}`))