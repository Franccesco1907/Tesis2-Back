const sequelize = require("../libs/sequelize");

class CapacitationService {

  async getCapacitations(id_rol) {
    const query = `SELECT * FROM capacitacion WHERE id_rol = ${id_rol} AND estado = 'A';`;
    const [data] = await sequelize.query(query);
    return data;
  }

  async getCapacitation(id_capacitacion) {
    const query = `SELECT * FROM capacitacion WHERE id_capacitacion = ${id_capacitacion};`;
    const [data] = await sequelize.query(query);
    return data;
  }
}

module.exports = CapacitationService;
