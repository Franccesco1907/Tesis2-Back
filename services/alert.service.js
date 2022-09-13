const sequelize = require("../libs/sequelize");

class AlertService {
  async getAlerts() {
    const query = `SELECT * FROM alerta_riesgo;`;
    const [data] = await sequelize.query(query);
    return data;
  }

  async create(data) {
    const query = `INSERT INTO alerta_riesgo (id_sector, id_zona, id_usuario, incidente, gravedad, fecha_hora, descripcion, estado) 
    VALUES (${data.id_sector}, ${data.id_zona}, ${data.id_usuario}, '${data.incidente}', '${data.gravedad}', CURRENT_TIMESTAMP, '${data.descripcion}', 'A');`;

    const [data] = await sequelize.query(query);
    return data;
  }
}

module.exports = AlertService;
