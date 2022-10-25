const sequelize = require('../libs/sequelize');

class UserService {
  async getUsers() {
    const query = `SELECT * FROM usuario;`;
    const [users] = await sequelize.query(query);
    return users;
  }

  async getUser(id_usuario) {
    const query = `SELECT * FROM usuario WHERE id_usuario = ${id_usuario};`
    const [user] = await sequelize.query(query);
    return user;
  }
}

module.exports = UserService;