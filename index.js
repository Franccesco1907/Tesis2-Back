const express = require('express')
const cors = require('cors');
const routerApi = require('./routes');

const app = express()
const port = 3000;
app.use(express.json())
app.use(cors())

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