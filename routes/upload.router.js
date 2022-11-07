const express = require("express");
const { upload } = require("./../middlewares/upload.handler");
const multer = require("multer");

const router = express.Router();

router.post("/", function (req, res) {
  upload.single("myFile")(req, res, function (err) {
    const ruta = req.body.ruta;
    if (err instanceof multer.MulterError) {
      res.status(500).send({ error: true, message: err.message }); // Un error de Multer ocurrió durante la subida.
    } else if (err) {
      res.status(501).send({ error: true, message: err.message }); // Un error desconocido ocurrió durante la subida.
    } else {
      res.status(200).send({
        error: false,
        message: "El archivo se subió al servidor con éxito",
        filename: `${ruta}/${req.file.filename}`,
      });
    }
  });
});

module.exports = router;
