const path = require('path')
const port = process.env.PORT || 3000;
const chalk = require('chalk');
const express = require('express');
const app = express();
const debug = require ('debug')('app')

app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.use(express.static(path.join(__dirname, '/public')));

require('./routes/apiRoutes.js')(app);
require('./routes/htmlRoutes.js')(app);

app.listen(port, () => {
   debug(`listening on port ${chalk.cyanBright(port)}`);
});

