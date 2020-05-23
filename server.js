

const chalk = require('chalk');
const morgan = require('morgan');
const debug = require ('debug') ('app')
var express = require('express');

var app = express();

const port = process.env.PORT || 3000;

app.use (morgan('tiny'))

app.use(express.urlencoded({extended:true}));
app.use(express.json());

require('./routes/htmlRoutes.js')(app);




app.listen(port, () => {
    debug(`listening on port ${chalk.cyanBright(port)}`);
});