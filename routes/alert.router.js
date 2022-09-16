const express = require('express');
const AlertService = require('./../services/alert.service');

const router = express.Router();
const alertService = new AlertService();

router.get('/', async (req, res) => {
  try {
    const alerts = await(alertService.getAlerts());
    res.status(200).json(alerts);
  } catch (error) {
    console.error(error);
  }
});

router.get('/mitigateAlert=:id_alerta_riesgo', async (req, res) => {
  try {
    let id_alerta_riesgo = req.params.id_alerta_riesgo;
    console.log("ra,on", id_alerta_riesgo)
    const alertMitigated = await(alertService.mitigateAlert(id_alerta_riesgo));
    res.status(200).json(alertMitigated);
  } catch (error) {
    console.error(error);
  }
});

router.post('/', async (req, res) => {
  try {
    const body = req.body;
    res.status(201).json(await(alertService.create(body)));
  } catch (error) {
    console.error(error);
  }
});

module.exports = router;