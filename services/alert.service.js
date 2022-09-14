const sequelize = require("../libs/sequelize");

class AlertService {
  async getAlerts() {
    const query = `SELECT * FROM alerta_riesgo;`;
    const [alerts] = await sequelize.query(query);
    return alerts;
  }

  async create(alert) {
    const query = `INSERT INTO alerta_riesgo (id_sector, id_zona, id_usuario, incidente, gravedad, fecha_hora, descripcion, estado) 
    VALUES (${alert.id_sector}, ${alert.id_zona}, ${alert.id_usuario}, '${alert.incidente}', '${alert.gravedad}', CURRENT_TIMESTAMP, '${alert.descripcion}', 'A');`;
    console.log("query alert", query)
    let [data] = await sequelize.query(query);
    return data;
  }
}

module.exports = AlertService;
