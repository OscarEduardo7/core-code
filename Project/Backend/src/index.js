const express = require("express");
const cors = require("cors");
const RequestHandler = require("./handlers/todo");
const { initializeDB } = require('./lib/db');

const app = express();

app.use(cors({
    origin: '*'
}));
app.use(express.json());
app.use(express.urlencoded({ extended: false}));

//Routes
app.use(RequestHandler);

app.listen(4000,()=>{
    console.log("**** Server listen on port 4000 ****");
    initializeDB().then( () => console.log("DB Ready."));
})

