const express = require('express');
const AlertService = require('./../services/alert.service');

const router = express.Router();
const alertService = new AlertService();

router.get('/', async (req, res) => {
  try {
    const alerts = await(alertService.getAlerts());
    res.json(alerts);
  } catch (error) {
    console.error(error);
  }
});


router.post('/', async (req, res) => {
  try {
    const body = req.body;
    console.log("body de alert", body);
    res.status(201).json(await(alertService.create(body)));
  } catch (error) {
    console.error(error);
  }
});

module.exports = router;