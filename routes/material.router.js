const express = require('express');
const MaterialService = require('./../services/material.service');

const router = express.Router();
const materialService = new MaterialService();

router.get('/id_curso=:id_curso', async (req, res) => {
  try {
    let { id_curso } = req.params;
    const materials = await(materialService.getMaterials(id_curso));
    res.status(200).json(materials);
  } catch (error) {
    console.error(error);
  }
});


module.exports = router;