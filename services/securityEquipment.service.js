const sequelize = require("../libs/sequelize");

class SecurityEquipmentService {
  async getSecurityEquipments(id_sector, id_zona) {
    const query = `SELECT * FROM equipo_seguridad WHERE id_sector = ${id_sector} AND id_zona = ${id_zona};`;
    const [data] = await sequelize.query(query);
    return data;
  }

  async getSecurityEquipment(id_equipo_seguridad) {
    const query = `SELECT * FROM equipo_seguridad WHERE id_equipo_seguridad = ${id_equipo_seguridad};`;
    const [data] = await sequelize.query(query);
    return data;
  }
}

module.exports = SecurityEquipmentService;