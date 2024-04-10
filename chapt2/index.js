const express = require('express');
const app = express();
const path = require('path');
const rootDir = require('./util/path');

app.set('view engine', 'ejs');
app.use('/',(req, res, next) => {
    res.render(path.join(rootDir, 'public', 'index'), {"fun": "It is fun"});
});

app.listen(3000);
