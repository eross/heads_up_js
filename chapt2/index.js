const express = require('express');
const app = express();
const path = require('path');
const rootDir = require('./util/path');
const gameRun = require('./util/game');

app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));

app.use('/',(req, res, next) => {
    gameRun();
    res.render(path.join(rootDir, 'public', 'index'), {"fun": String(gameRun())});
});

app.listen(3000);
