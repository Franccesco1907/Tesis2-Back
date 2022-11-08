const sequelize = require("../libs/sequelize");

class EvidenceService {

  async registerEvidence(address, id_alerta_riesgo) {
    const query = `INSERT INTO evidencia(ubicacion, id_alerta_riesgo) VALUES ('${address}', ${id_alerta_riesgo});`;
    const [data] = await sequelize.query(query);
    return data;
  }
}

module.exports = EvidenceService;