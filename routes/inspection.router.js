const express = require('express');
const InspectionService = require('../services/inspection.service');

const router = express.Router();
const inspectionService = new InspectionService();

router.get('/', async (req, res) => {
  try {
    const inspections = await(inspectionService.getInspections());
    res.status(200).json(inspections);
  } catch (error) {
    console.error(error);
    res.status(500).json({error: 'No se pudo realizar la solicitud.'});
  }
});

router.get('/date=:date', async (req, res) => {
  try {
    const { date } = req.params;
    const personalProtectiveEquipments = await(inspectionService.getPersonalProtectiveEquipmentsByDate(date));
    res.status(200).json(personalProtectiveEquipments);
  } catch (error) {
    console.error(error);
    res.status(500).json({error: 'No se pudo realizar la solicitud.'});
  }
});


module.exports = router;