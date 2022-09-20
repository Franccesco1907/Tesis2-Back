const sequelize = require("../libs/sequelize");

class PersonalProtectiveEquipmentService {
  async getPersonalProtectiveEquipments(id_zona) {
    const query = `SELECT * FROM equipo_proteccion_personal WHERE id_zona = ${id_zona};`;
    const [data] = await sequelize.query(query);
    return data;
  }

  async createHistory(history) {
    let query = `INSERT INTO historico_inspeccion (id_equipo_proteccion_personal, id_zona, id_usuario, utilizado, fecha_hora) VALUES `;
    let values = '';
    history.forEach((element) => {
      values += `(${element.id_equipo_proteccion_personal}, ${element.id_zone}, ${element.id_user}, ${element.checked}, NOW()),`;
    });
    query += values.slice(0, -1) + ";";
    return await sequelize.query(query);
  }
}

module.exports = PersonalProtectiveEquipmentService;
