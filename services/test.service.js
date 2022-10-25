const sequelize = require("../libs/sequelize");
let googleSheet = require("../utils/spreadsheet");
const CapacitationService = require("./capacitation.service");
const UserService = require("./user.service");

const capacitationService = new CapacitationService();
const userService = new UserService();

class TestService {
  async getTests(id_rol, id_usuario) {
    await this.verifyTests(id_usuario);

    let capacitations = await capacitationService.getCapacitations(id_rol);
    let tests = Promise.all(
      await capacitations.map(async (capacitation) => {
        let query = `SELECT cuestionario.id_cuestionario, 
        curso.id_curso, curso.nombre, curso.cuestionario, cuestionario.nota, cuestionario.estado
        FROM cuestionario, capacitacion, curso, curso_capacitacion
        WHERE cuestionario.id_capacitacion = capacitacion.id_capacitacion
        AND curso.id_curso = cuestionario.id_curso
        AND curso_capacitacion.id_capacitacion = capacitacion.id_capacitacion
        AND curso_capacitacion.id_curso = curso.id_curso
        AND capacitacion.estado = 'A'
        AND cuestionario.estado = 'A'
        AND cuestionario.id_usuario = ${id_usuario}
        AND capacitacion.id_capacitacion = ${capacitation.id_capacitacion};`;

        let [cuestionarios] = await sequelize.query(query);

        return {
          id_capacitacion: capacitation.id_capacitacion,
          nombre: capacitation.nombre,
          cuestionarios,
        };
      })
    );

    return tests;
  }

  async verifyTests(id_usuario) {
    let [user] = await userService.getUser(id_usuario);
    let records = await googleSheet.getRecords();
    let record = await records.filter(
      (record) => record.dni == user.dni && record.puntuacion == "20 / 20"
    );
    if (record.length > 0)
      await this.updateTestState(record[0].id_cuestionario);
    return record.length > 0;
  }

  async updateTestState(id_cuestionario) {
    let query = `UPDATE cuestionario 
    SET nota = ${20}, estado = 'I' 
    WHERE id_cuestionario = ${id_cuestionario};`;
    await sequelize.query(query);
  }
}

module.exports = TestService;
