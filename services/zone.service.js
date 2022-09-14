const sequelize = require("../libs/sequelize");

class ZoneService {
  async getZonesByIdSector(id_sector) {
    const query = `SELECT * FROM zona WHERE id_sector = ${id_sector} AND estado = 'A';`;
    const [data] = await sequelize.query(query);
    return data;
  }
}

module.exports = ZoneService;
