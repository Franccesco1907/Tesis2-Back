const multer = require("multer");

const storage = multer.diskStorage({
  filename: function (_res, file, cb) {
    const ext = file.originalname.split(".").pop(); // pdf / jpeg / mp3
    const fileName = Date.now(); // 12312321321
    cb(null, `${fileName}.${ext}`); // 123123213232.pdf = nombre del archivo sera la fecha
  },
  destination: function (_req, _file, cb) {
    const body = _req.body;
    // recuperamos el tipo de archivo
    const ruta = body.ruta;
    // Destino donde se guardarán los datos
    cb(null, process.env.FILES_PATH);
  },
});
// Validacion del tipo de archivo y limite maximo
// Controla cuáles archivos deben ser subidos y cuáles deben ser omitidos
const maxSize = 100 * 1024 * 1024;
const upload = multer({
  storage,
  fileFilter: function (_req, file, cb) {
    let filetypes = /docx|doc|pdf|png|jpg|mp4|mkv/;
    let mimetype = filetypes.test(file.mimetype);
    let extname = filetypes.test(file.originalname.split(".").pop());
    if (mimetype && extname) {
      return cb(null, true);
    }
    cb(
      new Error(
        "Error: File upload only supports the following filetypes - " +
          filetypes
      )
    );
  },
  limits: { fileSize: maxSize },
});

module.exports = { upload };
