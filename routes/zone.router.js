const express = require('express');
const ZoneService = require('./../services/zone.service');

const router = express.Router();
const zoneService = new ZoneService();

router.get('/id_sector=:id_sector', async (req, res) => {
  try {
    const id_sector = req.params.id_sector;
    console.log("req.params", req.params)
    const zones = await zoneService.getZonesByIdSector(id_sector);
    res.json(zones);
  } catch (error) {
    console.error(error);
  }
});

module.exports = router;