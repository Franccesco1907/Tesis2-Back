const sequelize = require("../libs/sequelize");

class ComponentService {
  async getComponents(id_equipo_seguridad) {
    const query = `SELECT * FROM componente WHERE id_equipo_seguridad = ${id_equipo_seguridad};`;
    const [data] = await sequelize.query(query);
    return data;
  }
}

module.exports = ComponentService;