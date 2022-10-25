const { GoogleSpreadsheet } = require("google-spreadsheet");

const credentials = require("../credentials.json");

let googleId = "1n4TQ7_kLOhM0sVOH1C-GlX2VyCGnqktU16sGjMt38R4";

async function getRecords() {
  let googleDocument = new GoogleSpreadsheet(googleId);
  await googleDocument.useServiceAccountAuth(credentials);
  await googleDocument.loadInfo();

  let sheet = googleDocument.sheetsByIndex[0];

  let rows = await sheet.getRows();
  let records = rows.map((record) => {
    return {
      id_cuestionario: record.id_cuestionario,
      fecha_hora: record.fecha_hora,
      puntuacion: record.puntuacion,
      nombres_apellidos: record.nombres_apellidos,
      correo: record.correo,
      dni: record.dni,
    };
  });

  return records;
}

module.exports = {
  getRecords: getRecords,
};
