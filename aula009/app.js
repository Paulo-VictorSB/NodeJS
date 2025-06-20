const express = require('express');
const app = express();
app.listen(3000);

app.use((req, res, next) => {
    req.requestTime = Date.now();
    next();
})

app.get('/', (req, res) => {
    console.log(req.requestTime);
    res.send("<h1>Request Time: </h1>" + req.requestTime);
})