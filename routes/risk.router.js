const express = require('express');
const RiskService = require('./../services/risk.service');

const router = express.Router();
const riskService = new RiskService();

router.get('/', async (req, res) => {
  try {
    const risks = await(riskService.getRisks());
    res.status(200).json(risks);
  } catch (error) {
    console.error(error);
  }
});

router.get('/:id_alerta_riesgo', async (req, res) => {
  try {
    let id_alerta_riesgo = req.params.id_alerta_riesgo;
    const [risk] = await(riskService.getRisk(id_alerta_riesgo));
    res.status(200).json(risk);
  } catch (error) {
    console.error(error);
  }
});


router.put('/', async (req, res) => {
  try {
    const body = req.body;
    res.status(200).json(await(riskService.updateRisk(body)));
  } catch (error) {
    console.error(error);
  }
});

module.exports = router;