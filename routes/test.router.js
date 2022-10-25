const express = require('express');
const TestService = require('./../services/test.service');

const router = express.Router();
const testService = new TestService();

router.get('/id_rol=:id_rol/id_usuario=:id_usuario', async (req, res) => {
  try {
    let { id_rol, id_usuario } = req.params;
    const tests = await testService.getTests(id_rol, id_usuario);
    res.status(200).json(tests);
  } catch (error) {
    console.error(error);
  }
});

module.exports = router;