const sequelize = require("../libs/sequelize");
// const jwt = require('jsonwebtoken');


class AuthService {
  async userExist(email) {
    let query = `SELECT * FROM usuario
    WHERE correo_trabajo = '${email}';`
    let [user] = await sequelize.query(query);
    
    return user.length > 0;
  }

  async passwordIncorrect(email, password) {
    let query = `SELECT * FROM usuario
    WHERE correo_trabajo = '${email}'
    AND contrasena = '${password}';`
    let [user] = await sequelize.query(query);
    
    return user.length == 0;
  }
  async getUserByLogin(email, password) {
    let query = `SELECT u.id_usuario, u.id_rol, u.id_sector, u.nombres, 
    u.apellido_paterno, u.apellido_materno, r.nombre nombre_rol,
    s.nombre nombre_sector
    FROM usuario u
    INNER JOIN rol r ON r.id_rol = u.id_rol
    INNER JOIN sector s ON s.id_sector = u.id_sector
    WHERE correo_trabajo = '${email}'
    AND contrasena = '${password}';`

    let [[data]] = await sequelize.query(query);

    return data;
  }
}

module.exports = AuthService;