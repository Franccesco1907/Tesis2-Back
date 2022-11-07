const sequelize = require("../libs/sequelize");

class InspectionService {

  async getInspections() {
    const query = `SELECT CONCAT(usuario.nombres, ' ', usuario.apellido_paterno, ' ', usuario.apellido_materno) as full_name, 
    cast(historico_inspeccion.fecha_hora as text) as date_hour, sector.nombre as sector_name, zona.nombre as zone_name
    FROM historico_inspeccion, usuario, sector, zona
    WHERE historico_inspeccion.id_usuario = usuario.id_usuario
    AND sector.id_sector = zona.id_sector
    AND historico_inspeccion.id_zona = zona.id_zona
    GROUP BY full_name, date_hour, sector_name, zone_name
    ORDER BY date_hour DESC;`;
    const [data] = await sequelize.query(query);
    return data;
  }

  async getPersonalProtectiveEquipmentsByDate(date) {
    const query = `SELECT historico_inspeccion.id_historico, equipo_proteccion_personal.id_equipo_proteccion_personal, 
    equipo_proteccion_personal.nombre, historico_inspeccion.utilizado
    FROM historico_inspeccion, equipo_proteccion_personal
    WHERE historico_inspeccion.id_equipo_proteccion_personal = equipo_proteccion_personal.id_equipo_proteccion_personal
    AND historico_inspeccion.fecha_hora = '${date}';`
    const [data] = await sequelize.query(query);
    return data;
  }
}

module.exports = InspectionService;
