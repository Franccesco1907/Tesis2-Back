const express = require('express');

const userRouter = require('./user.router');


function routerApi(app, env) {
  const router = express.Router();
  const routerEnv = env + '/api/v1';
  console.log('API Routing:', routerEnv);
  app.use(routerEnv, router);



  router.use('/user', userRouter);
}

module.exports = routerApi;