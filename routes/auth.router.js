const express = require("express");
const AuthService = require("./../services/auth.service");

const router = express.Router();
const authService = new AuthService();

router.post("/login", async (req, res) => {
  try {
    let { email, password } = req.body;

    let userExist = await authService.userExist(email);
    if (!userExist) {
      res.status(409).json({
        error: "Correo incorrecto",
        message: "Usuario no encontrado",
        title: "¡ERROR DE INGRESO!",
      });
    }

    let passwordIncorrect = await authService.passwordIncorrect(
      email,
      password
    );
    if (passwordIncorrect) {
      console.log("contra incorrecta")
      res.status(409).json({
        error: "Contraseña incorrecta",
        message: "Contraseña incorrecta",
        title: "¡ERROR DE INGRESO!",
      });
    }

    res.status(200).json(await authService.getUserByLogin(email, password));
  } catch (error) {
    console.error(error);
  }
});

module.exports = router;
