INSERT INTO rol(nombre, estado) VALUES ('Analista','A');
INSERT INTO rol(nombre, estado) VALUES ('Jefe de planta','A');
INSERT INTO rol(nombre, estado) VALUES ('Supervisor','A');
INSERT INTO rol(nombre, estado) VALUES ('Repartidor','A');
INSERT INTO rol(nombre, estado) VALUES ('Cargador','A');
INSERT INTO rol(nombre, estado) VALUES ('Limpieza','A');
INSERT INTO rol(nombre, estado) VALUES ('Jefe de finanzas','A');
INSERT INTO rol (nombre, estado) VALUES ('Seguridad', 'A');


INSERT INTO sector(nombre, estado) VALUES ('Almacén', 'A');
INSERT INTO sector(nombre, estado) VALUES ('Productivo', 'A');
INSERT INTO sector(nombre, estado) VALUES ('Administrativo', 'A');



INSERT INTO zona (id_sector, nombre, estado) VALUES (1, 'Zona A', 'A');
INSERT INTO zona (id_sector, nombre, estado) VALUES (1, 'Zona B', 'A');
INSERT INTO zona (id_sector, nombre, estado) VALUES (2, 'Línea de embotellamiento', 'A');
INSERT INTO zona (id_sector, nombre, estado) VALUES (2, 'Línea de llenado', 'A');
INSERT INTO zona (id_sector, nombre, estado) VALUES (2, 'Línea de sellado', 'A');
INSERT INTO zona (id_sector, nombre, estado) VALUES (3, 'Oficina de planeamiento', 'A');
INSERT INTO zona (id_sector, nombre, estado) VALUES (3, 'Oficina administrativa', 'A');
INSERT INTO zona (id_sector, nombre, estado) VALUES (3, 'Oficina de recursos humanos', 'A');



INSERT INTO usuario (id_rol, id_sector, correo_personal, correo_trabajo, celular_personal, celular_trabajo, contrasena, nombres, apellido_paterno, apellido_materno, dni, estado) VALUES (1, 2, 'freddy@gmail.com', 'freddy_analista@tesis.com', '999999999', '987654321', 'tesis', 'Freddy Ramón', 'De la torre', 'Izquierdo', '77777777', 'A');
INSERT INTO usuario (id_rol, id_sector, correo_personal, correo_trabajo, celular_personal, celular_trabajo, contrasena, nombres, apellido_paterno, apellido_materno, dni, estado) VALUES (2, 2, 'alex@gmail.com', 'alex_jefe@tesis.com', '999999999', '987654321', 'tesis', 'Alex Aldair', 'Pan', 'Li', '77777777', 'A');
INSERT INTO usuario (id_rol, id_sector, correo_personal, correo_trabajo, celular_personal, celular_trabajo, contrasena, nombres, apellido_paterno, apellido_materno, dni, estado) VALUES (3, 2, 'pilar@gmail.com', 'pilar_supervisor@tesis.com', '999999999', '987654321', 'tesis', 'Pilar Maritza', 'Llantoy', 'Sanchez', '77777777', 'A');
INSERT INTO usuario (id_rol, id_sector, correo_personal, correo_trabajo, celular_personal, celular_trabajo, contrasena, nombres, apellido_paterno, apellido_materno, dni, estado) VALUES (8, 2, 'antonio@gmail.com', 'antonio_seguridad@tesis.com', '999999999', '987654321', 'tesis', 'Antonio César', 'Ramirez', 'Valverde', '77797787', 'A');


INSERT INTO equipo_seguridad (id_sector, id_zona, estado_fisico, estado_control, nombre, numero_serie, marca, posicion, nota, fecha_adquisicion, fecha_vencimiento) VALUES (2, 3, 'En posición', 'Requiere acción inmediata', 'Extintor', 'V846866', 'Amerex', 'POS-23', 'Cambiar manómetro por desgaste, caducó fecha de mantenimiento', '2022-01-01', '2023-12-31');



INSERT INTO componente (id_equipo_seguridad, nombre, buen_estado) VALUES (1, 'Manquera y boquilla', true);
INSERT INTO componente (id_equipo_seguridad, nombre, buen_estado) VALUES (1, 'Tobera de descarga', true);
INSERT INTO componente (id_equipo_seguridad, nombre, buen_estado) VALUES (1, 'Grampa', true);
INSERT INTO componente (id_equipo_seguridad, nombre, buen_estado) VALUES (1, 'Manómetro', false);
INSERT INTO componente (id_equipo_seguridad, nombre, buen_estado) VALUES (1, 'Palanca de descarga', true);
INSERT INTO componente (id_equipo_seguridad, nombre, buen_estado) VALUES (1, 'Manija de transporte', true);
INSERT INTO componente (id_equipo_seguridad, nombre, buen_estado) VALUES (1, 'Cilindro', true);
INSERT INTO componente (id_equipo_seguridad, nombre, buen_estado) VALUES (1, 'Pasador', true);



INSERT INTO equipo_proteccion_personal (id_zona, nombre, obligatorio, estado) VALUES (1, 'Guantes', true, 'A');
INSERT INTO equipo_proteccion_personal (id_zona, nombre, obligatorio, estado) VALUES (1, 'Casco', true, 'A');
INSERT INTO equipo_proteccion_personal (id_zona, nombre, obligatorio, estado) VALUES (1, 'Chaleco', true, 'A');
INSERT INTO equipo_proteccion_personal (id_zona, nombre, obligatorio, estado) VALUES (1, 'Lentes', true, 'A');
INSERT INTO equipo_proteccion_personal (id_zona, nombre, obligatorio, estado) VALUES (1, 'Botas', true, 'A');
INSERT INTO equipo_proteccion_personal (id_zona, nombre, obligatorio, estado) VALUES (1, 'Arnés', true, 'A');
INSERT INTO equipo_proteccion_personal (id_zona, nombre, obligatorio, estado) VALUES (1, 'Protección respiratoria', true, 'A');
INSERT INTO equipo_proteccion_personal (id_zona, nombre, obligatorio, estado) VALUES (1, 'Tapones', true, 'A');
INSERT INTO equipo_proteccion_personal (id_zona, nombre, obligatorio, estado) VALUES (1, 'Orejeras', true, 'A');

INSERT INTO equipo_proteccion_personal (id_zona, nombre, obligatorio, estado) VALUES (2, 'Guantes', true, 'A');
INSERT INTO equipo_proteccion_personal (id_zona, nombre, obligatorio, estado) VALUES (2, 'Casco', true, 'A');
INSERT INTO equipo_proteccion_personal (id_zona, nombre, obligatorio, estado) VALUES (2, 'Chaleco', true, 'A');
INSERT INTO equipo_proteccion_personal (id_zona, nombre, obligatorio, estado) VALUES (2, 'Lentes', true, 'A');
INSERT INTO equipo_proteccion_personal (id_zona, nombre, obligatorio, estado) VALUES (2, 'Botas', true, 'A');
INSERT INTO equipo_proteccion_personal (id_zona, nombre, obligatorio, estado) VALUES (2, 'Arnés', true, 'A');
INSERT INTO equipo_proteccion_personal (id_zona, nombre, obligatorio, estado) VALUES (2, 'Protección respiratoria', true, 'A');
INSERT INTO equipo_proteccion_personal (id_zona, nombre, obligatorio, estado) VALUES (2, 'Tapones', true, 'A');
INSERT INTO equipo_proteccion_personal (id_zona, nombre, obligatorio, estado) VALUES (2, 'Orejeras', true, 'A');

INSERT INTO equipo_proteccion_personal (id_zona, nombre, obligatorio, estado) VALUES (3, 'Guantes', true, 'A');
INSERT INTO equipo_proteccion_personal (id_zona, nombre, obligatorio, estado) VALUES (3, 'Casco', true, 'A');
INSERT INTO equipo_proteccion_personal (id_zona, nombre, obligatorio, estado) VALUES (3, 'Chaleco', true, 'A');
INSERT INTO equipo_proteccion_personal (id_zona, nombre, obligatorio, estado) VALUES (3, 'Lentes', true, 'A');
INSERT INTO equipo_proteccion_personal (id_zona, nombre, obligatorio, estado) VALUES (3, 'Botas', true, 'A');
INSERT INTO equipo_proteccion_personal (id_zona, nombre, obligatorio, estado) VALUES (3, 'Arnés', true, 'A');
INSERT INTO equipo_proteccion_personal (id_zona, nombre, obligatorio, estado) VALUES (3, 'Protección respiratoria', true, 'A');
INSERT INTO equipo_proteccion_personal (id_zona, nombre, obligatorio, estado) VALUES (3, 'Tapones', true, 'A');
INSERT INTO equipo_proteccion_personal (id_zona, nombre, obligatorio, estado) VALUES (3, 'Orejeras', true, 'A');

INSERT INTO equipo_proteccion_personal (id_zona, nombre, obligatorio, estado) VALUES (4, 'Guantes', true, 'A');
INSERT INTO equipo_proteccion_personal (id_zona, nombre, obligatorio, estado) VALUES (4, 'Casco', true, 'A');
INSERT INTO equipo_proteccion_personal (id_zona, nombre, obligatorio, estado) VALUES (4, 'Chaleco', true, 'A');
INSERT INTO equipo_proteccion_personal (id_zona, nombre, obligatorio, estado) VALUES (4, 'Lentes', true, 'A');
INSERT INTO equipo_proteccion_personal (id_zona, nombre, obligatorio, estado) VALUES (4, 'Botas', true, 'A');
INSERT INTO equipo_proteccion_personal (id_zona, nombre, obligatorio, estado) VALUES (4, 'Arnés', true, 'A');
INSERT INTO equipo_proteccion_personal (id_zona, nombre, obligatorio, estado) VALUES (4, 'Protección respiratoria', true, 'A');
INSERT INTO equipo_proteccion_personal (id_zona, nombre, obligatorio, estado) VALUES (4, 'Tapones', true, 'A');
INSERT INTO equipo_proteccion_personal (id_zona, nombre, obligatorio, estado) VALUES (4, 'Orejeras', true, 'A');

INSERT INTO equipo_proteccion_personal (id_zona, nombre, obligatorio, estado) VALUES (5, 'Guantes', true, 'A');
INSERT INTO equipo_proteccion_personal (id_zona, nombre, obligatorio, estado) VALUES (5, 'Casco', true, 'A');
INSERT INTO equipo_proteccion_personal (id_zona, nombre, obligatorio, estado) VALUES (5, 'Chaleco', true, 'A');
INSERT INTO equipo_proteccion_personal (id_zona, nombre, obligatorio, estado) VALUES (5, 'Lentes', true, 'A');
INSERT INTO equipo_proteccion_personal (id_zona, nombre, obligatorio, estado) VALUES (5, 'Botas', true, 'A');
INSERT INTO equipo_proteccion_personal (id_zona, nombre, obligatorio, estado) VALUES (5, 'Arnés', true, 'A');
INSERT INTO equipo_proteccion_personal (id_zona, nombre, obligatorio, estado) VALUES (5, 'Protección respiratoria', true, 'A');
INSERT INTO equipo_proteccion_personal (id_zona, nombre, obligatorio, estado) VALUES (5, 'Tapones', true, 'A');
INSERT INTO equipo_proteccion_personal (id_zona, nombre, obligatorio, estado) VALUES (5, 'Orejeras', true, 'A');

INSERT INTO equipo_proteccion_personal (id_zona, nombre, obligatorio, estado) VALUES (6, 'Guantes', true, 'A');
INSERT INTO equipo_proteccion_personal (id_zona, nombre, obligatorio, estado) VALUES (6, 'Casco', true, 'A');
INSERT INTO equipo_proteccion_personal (id_zona, nombre, obligatorio, estado) VALUES (6, 'Chaleco', true, 'A');
INSERT INTO equipo_proteccion_personal (id_zona, nombre, obligatorio, estado) VALUES (6, 'Lentes', true, 'A');
INSERT INTO equipo_proteccion_personal (id_zona, nombre, obligatorio, estado) VALUES (6, 'Botas', true, 'A');
INSERT INTO equipo_proteccion_personal (id_zona, nombre, obligatorio, estado) VALUES (6, 'Arnés', true, 'A');
INSERT INTO equipo_proteccion_personal (id_zona, nombre, obligatorio, estado) VALUES (6, 'Protección respiratoria', true, 'A');
INSERT INTO equipo_proteccion_personal (id_zona, nombre, obligatorio, estado) VALUES (6, 'Tapones', true, 'A');
INSERT INTO equipo_proteccion_personal (id_zona, nombre, obligatorio, estado) VALUES (6, 'Orejeras', true, 'A');

INSERT INTO equipo_proteccion_personal (id_zona, nombre, obligatorio, estado) VALUES (7, 'Guantes', true, 'A');
INSERT INTO equipo_proteccion_personal (id_zona, nombre, obligatorio, estado) VALUES (7, 'Casco', true, 'A');
INSERT INTO equipo_proteccion_personal (id_zona, nombre, obligatorio, estado) VALUES (7, 'Chaleco', true, 'A');
INSERT INTO equipo_proteccion_personal (id_zona, nombre, obligatorio, estado) VALUES (7, 'Lentes', true, 'A');
INSERT INTO equipo_proteccion_personal (id_zona, nombre, obligatorio, estado) VALUES (7, 'Botas', true, 'A');
INSERT INTO equipo_proteccion_personal (id_zona, nombre, obligatorio, estado) VALUES (7, 'Arnés', true, 'A');
INSERT INTO equipo_proteccion_personal (id_zona, nombre, obligatorio, estado) VALUES (7, 'Protección respiratoria', true, 'A');
INSERT INTO equipo_proteccion_personal (id_zona, nombre, obligatorio, estado) VALUES (7, 'Tapones', true, 'A');
INSERT INTO equipo_proteccion_personal (id_zona, nombre, obligatorio, estado) VALUES (7, 'Orejeras', true, 'A');

INSERT INTO equipo_proteccion_personal (id_zona, nombre, obligatorio, estado) VALUES (8, 'Guantes', true, 'A');
INSERT INTO equipo_proteccion_personal (id_zona, nombre, obligatorio, estado) VALUES (8, 'Casco', true, 'A');
INSERT INTO equipo_proteccion_personal (id_zona, nombre, obligatorio, estado) VALUES (8, 'Chaleco', true, 'A');
INSERT INTO equipo_proteccion_personal (id_zona, nombre, obligatorio, estado) VALUES (8, 'Lentes', true, 'A');
INSERT INTO equipo_proteccion_personal (id_zona, nombre, obligatorio, estado) VALUES (8, 'Botas', true, 'A');
INSERT INTO equipo_proteccion_personal (id_zona, nombre, obligatorio, estado) VALUES (8, 'Arnés', true, 'A');
INSERT INTO equipo_proteccion_personal (id_zona, nombre, obligatorio, estado) VALUES (8, 'Protección respiratoria', true, 'A');
INSERT INTO equipo_proteccion_personal (id_zona, nombre, obligatorio, estado) VALUES (8, 'Tapones', true, 'A');
INSERT INTO equipo_proteccion_personal (id_zona, nombre, obligatorio, estado) VALUES (8, 'Orejeras', true, 'A');



INSERT INTO curso (nombre, fecha_creacion, cuestionario) VALUES ('Seguridad y salud en el trabajo', NOW(), 'https://docs.google.com/forms/d/e/1FAIpQLScv261qThl38Q4G1rTmEvIyw5Pv3YX96dA2XnKhhy6W9FXVvA/viewform?usp=sf_link');
INSERT INTO curso (nombre, fecha_creacion, cuestionario) VALUES ('Restricciones por COVID 19', NOW(), 'https://docs.google.com/forms/d/e/1FAIpQLScv261qThl38Q4G1rTmEvIyw5Pv3YX96dA2XnKhhy6W9FXVvA/viewform?usp=sf_link');
INSERT INTO curso (nombre, fecha_creacion, cuestionario) VALUES ('Uso de equipos de protección del personal', NOW(), 'https://docs.google.com/forms/d/e/1FAIpQLScv261qThl38Q4G1rTmEvIyw5Pv3YX96dA2XnKhhy6W9FXVvA/viewform?usp=sf_link');

INSERT INTO capacitacion (id_rol, nombre, fecha_hora, estado) VALUES (3, 'Capacitación en seguridad y salud en el trabajo', NOW(), 'A');
INSERT INTO capacitacion (id_rol, nombre, fecha_hora, estado) VALUES (3, 'Capacitación en equipamentos de seguridad', NOW(), 'A');

INSERT INTO curso_capacitacion (id_capacitacion, id_curso) VALUES (1, 1);
INSERT INTO curso_capacitacion (id_capacitacion, id_curso) VALUES (1, 2);
INSERT INTO curso_capacitacion (id_capacitacion, id_curso) VALUES (2, 3);


INSERT INTO material (nombre, fecha_creacion, enlace, tipo) VALUES ('LECTURA DE SEGURIDAD EN EL TRABAJO', NOW(), 'https://www.ilo.org/wcmsp5/groups/public/@americas/@ro-lima/@ilo-buenos_aires/documents/publication/wcms_248685.pdf', 'archivo');
INSERT INTO material (nombre, fecha_creacion, enlace, tipo) VALUES ('VIDEO DE SEGURIDAD EN EL TRABAJO', NOW(), 'https://www.youtube.com/watch?v=y6jhr7QLNug', 'video');


INSERT INTO material_curso(id_material, id_curso) VALUES (1, 1);
INSERT INTO material_curso(id_material, id_curso) VALUES (2, 1);


INSERT INTO cuestionario (id_capacitacion, id_curso, id_usuario, nota, estado) VALUES (1, 1, 3, 10, 'A');
INSERT INTO cuestionario (id_capacitacion, id_curso, id_usuario, nota, estado) VALUES (1, 2, 3, 10, 'A');