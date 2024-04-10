const express = require('express');
const app = express();

app.use('/',(req, res, next) => {
    res.send("<p>Hello</p>");
});

app.listen(3000);
