const sequelize = require('../libs/sequelize');

class UserService {
  async getUsers() {
    const query = `SELECT * FROM usuario;`;
    const [data] = await sequelize.query(query);
    return data;
  }
}

module.exports = UserService;