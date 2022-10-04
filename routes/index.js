const express = require('express');

const userRouter = require('./user.router');
const sectorRouter = require('./sector.router');
const securityEquipmentRouter = require('./securityEquipment.router');
const personalProtectiveEquipmentRouter = require('./personalProtectiveEquipment.router');
const zoneRouter = require('./zone.router');
const alertRouter = require('./alert.router');
const authRouter = require('./auth.router');
const riskRouter = require('./risk.router');
const componentRouter = require('./component.router');


function routerApi(app, env) {
  const router = express.Router();
  const routerEnv = env + '/api/v1';
  console.log('API Routing:', routerEnv);
  app.use(routerEnv, router);



  router.use('/alert', alertRouter);
  router.use('/auth', authRouter);
  router.use('/risk', riskRouter);
  router.use('/user', userRouter);
  router.use('/sector', sectorRouter);
  router.use('/security-equipment', securityEquipmentRouter);
  router.use('/personal-protective-equipment', personalProtectiveEquipmentRouter);
  router.use('/zone', zoneRouter);
  router.use('/component', componentRouter);
}

module.exports = routerApi;