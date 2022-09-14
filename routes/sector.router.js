const express = require('express');
const SectorService = require('./../services/sector.service');

const router = express.Router();
const sectorService = new SectorService();

router.get('/', async (req, res) => {
  try {
    const sectors = await(sectorService.getSectors());
    res.json(sectors);
  } catch (error) {
    console.error(error);
  }
});

module.exports = router;