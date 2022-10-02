const express = require('express');
const ComponentService = require('./../services/component.service');

const router = express.Router();
const componentService = new ComponentService();

router.get('/id_equipo_seguridad=:id_equipo_seguridad', async (req, res) => {
  try {
    let { id_equipo_seguridad } = req.params;
    const components = await(componentService.getComponents(id_equipo_seguridad));
    res.status(200).json(components);
  } catch (error) {
    console.error(error);
  }
});

module.exports = router;