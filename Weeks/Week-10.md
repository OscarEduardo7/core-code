![Core Code](/Weeks/images/corecode2.png)
# Week 10
---
## ð´ Monday
### 1) Forrest Gump Ping-Pong API ð
``` js
app.post('/api/buba-gump',function (req, res) {
    console.log("--" + req.message);
    let body = req.body;
    
    let msg = body.message;
    if (msg == "pong"){
        res.send("ping");
    }else if (msg == "ping"){
        res.send("pong");
    }else{
        res.send("PING PONG API ðð");
    }
});
```

![imagen](../Weeks/Week-10/images/monday-ping.png)


### 2) Delayed Response API â³

``` js
app.get('/api/delay/:time?',function (req, res) {
    var time = req.params.time;
    if (time == undefined) time = 1000; 
    setTimeout(function() {
        res.send('Welcome! ððð\n');
    }, time);
});
```
![imagen](../Weeks/Week-10/images/monday-delay.png)

### 3) Age Prediction API ð¶-ð´

``` js
app.get('/api/age/:name?',function (req, res) {
    var n = req.params.name;
    let e = Math.floor( Math.random() * (99 - 1 ) + 1);
    let d = e * 365; 

    let respuesta = {
        nombre: n,
        edad: e,
        dÃ­as: d
    };

    if(n == undefined){
        res.send("Missing parameter 'name' was expected.");
    }else{
        res.send(respuesta);
    }
});
```

![imagen](../Weeks/Week-10/images/monday-age3.png)

![imagen](../Weeks/Week-10/images/monday-age.png)


### 4) NSA Secrets Box API - Hacking Challenge ð¨âð»

## ð´ Tuesday

---
