const sequelize = require("../libs/sequelize");

class RiskService {
  async create(id_alerta_riesgo) {
    const query = `INSERT INTO seguimiento_riesgo(id_alerta_riesgo, causa, plan_mejora)
    VALUES(${id_alerta_riesgo}, 'Desconocida', 'Sin plan de mejora') RETURNING id_seguimiento;`;

    let [[risk_data]] = await sequelize.query(query);

    return risk_data.id_seguimiento;
  }

  async getRisks() {
    const query = `SELECT alerta_riesgo.id_alerta_riesgo, incidente, gravedad, sector.nombre as nombre_sector, 
    zona.nombre as nombre_zona, fecha_hora, descripcion, causa, plan_mejora
    FROM alerta_riesgo
    INNER JOIN sector ON sector.id_sector = alerta_riesgo.id_sector AND sector.estado = 'A'
    INNER JOIN zona ON zona.id_zona = alerta_riesgo.id_sector AND zona.estado = 'A'
    INNER JOIN seguimiento_riesgo ON seguimiento_riesgo.id_alerta_riesgo = alerta_riesgo.id_alerta_riesgo
    WHERE alerta_riesgo.estado = 'A';`;
    const [risks] = await sequelize.query(query);
    return risks;
  }

  async getRisk(id_alerta_riesgo) {
    const query = `SELECT alerta_riesgo.*, sector.nombre as nombre_sector, zona.nombre as nombre_zona,
    seguimiento_riesgo.causa, seguimiento_riesgo.plan_mejora
    FROM alerta_riesgo
    INNER JOIN sector ON sector.id_sector = alerta_riesgo.id_sector AND sector.estado = 'A'
    INNER JOIN zona ON zona.id_zona = alerta_riesgo.id_sector AND zona.estado = 'A'
    INNER JOIN seguimiento_riesgo ON seguimiento_riesgo.id_alerta_riesgo = alerta_riesgo.id_alerta_riesgo
    WHERE alerta_riesgo.estado = 'A'
    AND seguimiento_riesgo.id_alerta_riesgo = ${id_alerta_riesgo};`;

    const [risk] = await sequelize.query(query);
    return risk;
  }

  async updateRisk(risk) {
    const queryAlert = `UPDATE alerta_riesgo
    SET incidente = '${risk.incidente}',
    gravedad = '${risk.gravedad}',
    id_sector = ${risk.id_sector},
    id_zona = ${risk.id_zona},
    descripcion = '${risk.descripcion}',
    id_usuario = ${risk.id_usuario_afectado}
    WHERE estado = 'A'
    AND id_alerta_riesgo = ${risk.id_alerta_riesgo};`;
    const [alertUpdated] = await sequelize.query(queryAlert);

    const queryRisk = `UPDATE seguimiento_riesgo
    SET causa = '${risk.causa}',
    plan_mejora = '${risk.plan_mejora}'
    WHERE id_alerta_riesgo = ${risk.id_alerta_riesgo};`;

    let [riskUpdated] = await sequelize.query(queryRisk);

    return { alertUpdated: alertUpdated, riskUpdated: riskUpdated };
  }
}

module.exports = RiskService;
