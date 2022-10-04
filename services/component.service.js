const sequelize = require("../libs/sequelize");

class ComponentService {
  async getComponents(id_equipo_seguridad) {
    const query = `SELECT * FROM componente WHERE id_equipo_seguridad = ${id_equipo_seguridad};`;
    const [data] = await sequelize.query(query);
    return data;
  }

  async createHistory(id_equipo_seguridad, body) {
    console.log("body", body, id_equipo_seguridad )
    let components = body.components;
    let id_usuario = body.id_usuario;
    let note = body.note;
    let query = `INSERT INTO historico_componente(id_componente, id_usuario, buen_estado, fecha_hora) VALUES `;
    let values = '';
    components.forEach(component => {
      values += `(${component.id_componente}, ${id_usuario}, ${component.checked}, NOW()),`
    });
    query += values.slice(0, -1) + ";";
    return await sequelize.query(query);
  }
}

module.exports = ComponentService;