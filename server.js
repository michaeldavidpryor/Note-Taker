const path = require('path')
const port = process.env.PORT || 3000;
const chalk = require('chalk');
const express = require('express');
const http = require('http');
const app = express();

app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.use(express.static(path.join(__dirname, '/public')));


require('./routes/apiRoutes.js')(app);
require('./routes/htmlRoutes.js')(app);

const server = http.createServer((req, res) => {
   res.statusCode = 200;
   res.setHeader('Content-Type', 'text/html');
   res.end('<h1>Note Taker</h1>');
});

app.listen(port, () => {
  console.log(`listening on port ${chalk.cyanBright(port)}`);
});

