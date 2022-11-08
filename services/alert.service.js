const sequelize = require("../libs/sequelize");
const RiskService = require("./risk.service");

const riskService = new RiskService();
class AlertService {

  async create(alert) {
    const queryAlert = `INSERT INTO alerta_riesgo (id_sector, id_zona, id_usuario, incidente, gravedad, fecha_hora, descripcion, estado) 
    VALUES (${alert.id_sector}, ${alert.id_zona}, ${alert.id_usuario}, '${alert.incidente}', '${alert.gravedad}', CURRENT_TIMESTAMP, '${alert.descripcion}', 'A') RETURNING id_alerta_riesgo;`;

    let [[alert_data]] = await sequelize.query(queryAlert);

    let id_sequimiento = await riskService.create(alert_data.id_alerta_riesgo);
    
    return {
      id_alerta_riesgo: alert_data.id_alerta_riesgo,
      id_seguimiento: id_sequimiento
    };
  }

  async getAlerts() {
    const query = `SELECT alerta_riesgo.id_alerta_riesgo, incidente, gravedad, sector.nombre as nombre_sector, 
    zona.nombre as nombre_zona, fecha_hora, descripcion, evidencia.ubicacion
    FROM alerta_riesgo
    INNER JOIN sector ON sector.id_sector = alerta_riesgo.id_sector AND sector.estado = 'A'
    INNER JOIN zona ON zona.id_zona = alerta_riesgo.id_sector AND zona.estado = 'A'
    LEFT JOIN evidencia ON evidencia.id_alerta_riesgo = alerta_riesgo.id_alerta_riesgo
    WHERE alerta_riesgo.estado = 'A'
    ORDER BY alerta_riesgo.fecha_hora DESC;`;
    const [alerts] = await sequelize.query(query);
    return alerts;
  }
  
  async mitigateAlert(id_alerta_riesgo) {
    const query = `UPDATE alerta_riesgo SET estado = 'M' WHERE id_alerta_riesgo = ${id_alerta_riesgo};`;
    const [alertMitigated] = await sequelize.query(query);
    return alertMitigated;
  }

  async updateAlert(risk) {
    const query = `UPDATE alerta_riesgo
    SET incidente = '${risk.incidente}',
    gravedad = '${risk.gravedad}',
    id_sector = ${risk.id_sector},
    id_zona = ${risk.id_zona},
    descripcion = '${risk.descripcion}',
    id_usuario = ${risk.id_usuario_afectado}
    WHERE estado = 'A'
    AND id_alerta_riesgo = ${risk.id_alerta_riesgo};`
    const [alertUpdated] = await sequelize.query(query);
    return alertUpdated;
  }
  
}

module.exports = AlertService;
