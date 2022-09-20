const express = require("express");
const PersonalProtectiveEquipmentService = require("./../services/personalProtectiveEquipment.service");

const router = express.Router();
const personalProtectiveEquipmentService =
  new PersonalProtectiveEquipmentService();

router.get("/id_zona=:id_zona", async (req, res) => {
  try {
    let { id_zona } = req.params;
    console.log("id_zona", id_zona);
    const personalProtectiveEquipments =
      await personalProtectiveEquipmentService.getPersonalProtectiveEquipments(
        id_zona
      );
    res.status(200).json(personalProtectiveEquipments);
  } catch (error) {
    console.error(error);
  }
});

router.post("/createHistory", async (req, res) => {
  try {
    let history = req.body;
    res
      .status(201)
      .json(await personalProtectiveEquipmentService.createHistory(history));
  } catch (error) {
    console.error(error);
  }
});

module.exports = router;
