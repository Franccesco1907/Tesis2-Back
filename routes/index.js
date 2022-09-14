const express = require('express');

const userRouter = require('./user.router');
const sectorRouter = require('./sector.router');
const zoneRouter = require('./zone.router');
const alertRouter = require('./alert.router');


function routerApi(app, env) {
  const router = express.Router();
  const routerEnv = env + '/api/v1';
  console.log('API Routing:', routerEnv);
  app.use(routerEnv, router);



  router.use('/alert', alertRouter);
  router.use('/user', userRouter);
  router.use('/sector', sectorRouter);
  router.use('/zone', zoneRouter);
}

module.exports = routerApi;