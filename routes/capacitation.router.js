const express = require('express');
const CapacitationService = require('./../services/capacitation.service');

const router = express.Router();
const capacitationService = new CapacitationService();

router.get('/id_rol=:id_rol', async (req, res) => {
  try {
    let { id_rol } = req.params;
    const capacitations = await(capacitationService.getCapacitations(id_rol));
    res.status(200).json(capacitations);
  } catch (error) {
    console.error(error);
  }
});

router.get('/id_capacitacion=:id_capacitacion', async (req, res) => {
  try {
    let { id_capacitacion } = req.params;
    const capacitation = await(capacitationService.getCapacitation(id_capacitacion));
    res.status(200).json(capacitation);
  } catch (error) {
    console.error(error);
  }
});


module.exports = router;