const express = require("express");
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


app.listen(3000, ()=>{
    console.log("Server listen in port 3000");
});

//API REST
app.get('/',function (req, res) {
    res.send("PING PONG API 🏓🏓");
});

app.post('/api/buba-gump',function (req, res) {
    console.log("--" + req.message);
    let body = req.body;
    
    let msg = body.message;
    if (msg == "pong"){
        res.send("ping");
    }else if (msg == "ping"){
        res.send("pong");
    }else{
        res.send("PING PONG API 🏓🏓");
    }
});

// Delayed Response API
app.get('/api/delay/:time?',function (req, res) {
    var time = req.params.time;
    if (time == undefined) time = 1000; 
    setTimeout(function() {
        res.send('Welcome! 🎉🎉🎉\n');
    }, time);
});

//Age prediction /api/age/samsepiol
app.get('/api/age/:name?',function (req, res) {
    var n = req.params.name;
    let e = Math.floor( Math.random() * (99 - 1 ) + 1);
    let d = e * 365; 

    let respuesta = {
        nombre: n,
        edad: e,
        días: d
    };

    if(n == undefined){
        res.send("Missing parameter 'name' was expected.");
    }else{
        res.send(respuesta);
    }
});