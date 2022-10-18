const sequelize = require("../libs/sequelize");

class CourseService {

  async getCourses(id_capacitacion) {
    const query = `SELECT curso.id_curso, curso.nombre, curso.fecha_creacion, curso.cuestionario
    FROM curso, curso_capacitacion, capacitacion
    WHERE curso.id_curso = curso_capacitacion.id_curso
    AND capacitacion.id_capacitacion = curso_capacitacion.id_capacitacion
    AND capacitacion.id_capacitacion = ${id_capacitacion};`;
    const [data] = await sequelize.query(query);
    return data;
  }

  async getCourse(id_capacitacion, id_curso) {
    const query = `SELECT curso.id_curso, curso.nombre, curso.fecha_creacion, curso.cuestionario
    FROM curso, curso_capacitacion, capacitacion
    WHERE curso.id_curso = curso_capacitacion.id_curso
    AND capacitacion.id_capacitacion = curso_capacitacion.id_capacitacion
    AND capacitacion.id_capacitacion = ${id_capacitacion}
    AND curso.id_curso = ${id_curso}`;
    const [[data]] = await sequelize.query(query);
    return data;
  }
}

module.exports = CourseService;
