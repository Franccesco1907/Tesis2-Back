const express = require('express');
const SecurityEquipmentService = require('./../services/securityEquipment.service');

const router = express.Router();
const securityEquipmentService = new SecurityEquipmentService();

router.get('/id_sector=:id_sector&id_zona=:id_zona', async (req, res) => {
  try {
    let {id_sector, id_zona} = req.params;
    console.log("id_sector, id_zona", id_sector, id_zona)
    const securityEquipments = await(securityEquipmentService.getSecurityEquipments(id_sector, id_zona));
    res.status(200).json(securityEquipments);
  } catch (error) {
    console.error(error);
  }
});

router.get('/id_equipo_seguridad=:id_equipo_seguridad', async (req, res) => {
  try {
    let id_equipo_seguridad = req.params.id_equipo_seguridad;
    console.log("id_equipo_seguridad", id_equipo_seguridad)
    const [securityEquipment] = await(securityEquipmentService.getSecurityEquipment(id_equipo_seguridad));
    res.status(200).json(securityEquipment);
  } catch (error) {
    console.error(error);
  }
});

module.exports = router;