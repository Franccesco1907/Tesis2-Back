const sequelize = require("../libs/sequelize");

class SectorService {
  async getSectors() {
    const query = `SELECT * FROM sector WHERE estado = 'A';`;
    const [data] = await sequelize.query(query);
    return data;
  }
}

module.exports = SectorService;
