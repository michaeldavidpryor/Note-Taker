var express = require ('express');
var chalk = require ('chalk');
var debug = require('debug') ('app');
var morgan = require('morgan');
var path = require ('path');

var app = express();

app.use (morgan('tiny'));
app.use(express.static(path.join(__dirname, '/public/')))
app.use('/css', express.static(path.join(__dirname, '/node_modules/bootswatch/dist/flatly/css')));
app.use('/css', express.static(path.join(__dirname, '/node_modules/@fortawesome/fontawesome-free/css')));
app.use('/css', express.static(path.join(__dirname, '/node_modules/@fortawesome/webfonts')));
app.use('/js', express.static(path.join(__dirname, '/node_modules/jquery/dist/js')))

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, '/views/index.html'));
})

app.listen(3000, function () {
    debug(`listening on port ${chalk.cyanBright('3000')}`);
});
