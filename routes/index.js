const express = require('express');

const userRouter = require('./user.router');
const sectorRouter = require('./sector.router');
const securityEquipmentRouter = require('./securityEquipment.router');
const zoneRouter = require('./zone.router');
const alertRouter = require('./alert.router');
const riskRouter = require('./risk.router');


function routerApi(app, env) {
  const router = express.Router();
  const routerEnv = env + '/api/v1';
  console.log('API Routing:', routerEnv);
  app.use(routerEnv, router);



  router.use('/alert', alertRouter);
  router.use('/risk', riskRouter);
  router.use('/user', userRouter);
  router.use('/sector', sectorRouter);
  router.use('/security-equipment', securityEquipmentRouter);
  router.use('/zone', zoneRouter);
}

module.exports = routerApi;