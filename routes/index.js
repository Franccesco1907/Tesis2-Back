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
const capacitationRouter = require('./capacitation.router');
const courseRouter = require('./course.router');
const materialRouter = require('./material.router');
const testRouter = require('./test.router');
const uploadRouter = require('./upload.router');
const inspectionRouter = require('./inspection.router');


function routerApi(app, env) {
  const router = express.Router();
  const routerEnv = env + '/api/v1';
  console.log('API Routing:', routerEnv);
  app.use(routerEnv, router);



  router.use('/alert', alertRouter);
  router.use('/auth', authRouter);
  router.use('/capacitation', capacitationRouter);
  router.use('/course', courseRouter);
  router.use('/risk', riskRouter);
  router.use('/user', userRouter);
  router.use('/inspection', inspectionRouter);
  router.use('/sector', sectorRouter);
  router.use('/security-equipment', securityEquipmentRouter);
  router.use('/personal-protective-equipment', personalProtectiveEquipmentRouter);
  router.use('/zone', zoneRouter);
  router.use('/component', componentRouter);
  router.use('/material', materialRouter);
  router.use('/upload', uploadRouter);
  router.use('/test', testRouter);
}

module.exports = routerApi;