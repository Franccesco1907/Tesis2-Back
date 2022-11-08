const express = require('express')
const cors = require('cors');
const bodyParser = require("body-parser");
const routerApi = require('./routes');

const app = express()
const port = 3000;
app.use(express.json())
app.use(express.static("./public"));
// cors
app.use(cors())
// parse requests of content-type - application/json
// app.use(bodyParser.json());
// parse requests of content-type - application/x-www-form-urlencoded
// app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.send('Welcome to Tesis 2. All rights reserved')
})

let env = process.env.PRODUCTION == 'true' ? '' : '/dev';

routerApi(app, env);

const server = app.listen(port, () => {
  console.log('API Port:', port);
  console.log('********************************************************');
});

module.exports = { app, server }