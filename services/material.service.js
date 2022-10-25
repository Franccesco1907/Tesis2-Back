const sequelize = require("../libs/sequelize");

class MaterialService {

  async getMaterials(id_curso) {
    const query = `SELECT material.nombre, material.enlace, material.tipo 
    FROM material_curso, curso, material
    WHERE curso.id_curso = material_curso.id_curso
    AND material.id_material = material_curso.id_material
    AND curso.id_curso = ${id_curso};`;
    const [data] = await sequelize.query(query);
    return data;
  }
}

module.exports = MaterialService;
