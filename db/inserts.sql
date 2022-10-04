INSERT INTO rol(nombre, estado) values ('Analista','A');
INSERT INTO rol(nombre, estado) values ('Jefe de planta','A');
INSERT INTO rol(nombre, estado) values ('Supervisor','A');
INSERT INTO rol(nombre, estado) values ('Repartidor','A');
INSERT INTO rol(nombre, estado) values ('Cargador','A');
INSERT INTO rol(nombre, estado) values ('Limpieza','A');
INSERT INTO rol(nombre, estado) values ('Jefe de finanzas','A');



INSERT INTO sector(nombre, estado) values ('Almacén', 'A');
INSERT INTO sector(nombre, estado) values ('Productivo', 'A');
INSERT INTO sector(nombre, estado) values ('Administrativo', 'A');



INSERT INTO zona (id_sector, nombre, estado) values (1, 'Zona A', 'A');
INSERT INTO zona (id_sector, nombre, estado) values (1, 'Zona B', 'A');
INSERT INTO zona (id_sector, nombre, estado) values (2, 'Línea de embotellamiento', 'A');
INSERT INTO zona (id_sector, nombre, estado) values (2, 'Línea de llenado', 'A');
INSERT INTO zona (id_sector, nombre, estado) values (2, 'Línea de sellado', 'A');
INSERT INTO zona (id_sector, nombre, estado) values (3, 'Oficina de planeamiento', 'A');
INSERT INTO zona (id_sector, nombre, estado) values (3, 'Oficina administrativa', 'A');
INSERT INTO zona (id_sector, nombre, estado) values (3, 'Oficina de recursos humanos', 'A');



INSERT INTO usuario (id_rol, id_sector, correo_personal, correo_trabajo, celular_personal, celular_trabajo, contrasena, nombres, apellido_paterno, apellido_materno, dni, estado) VALUES (1, 2, 'freddy@gmail.com', 'freddy_analista@tesis.com', '999999999', '987654321', 'tesis', 'Freddy Ramón', 'De la torre', 'Izquierdo', '77777777', 'A');



INSERT INTO equipo_seguridad (id_sector, id_zona, estado_fisico, estado_control, nombre, numero_serie, marca, posicion, nota, fecha_adquisicion, fecha_vencimiento) VALUES (2, 3, 'En posición', 'Requiere acción inmediata', 'Extintor', 'V846866', 'Amerex', 'POS-23', 'Cambiar manómetro por desgaste, caducó fecha de mantenimiento', '2022-01-01', '2023-12-31');



INSERT INTO componente (id_equipo_seguridad, nombre, buen_estado, id_usuario) VALUES (1, 'Manquera y boquilla', true);
INSERT INTO componente (id_equipo_seguridad, nombre, buen_estado, id_usuario) VALUES (1, 'Tobera de descarga', true);
INSERT INTO componente (id_equipo_seguridad, nombre, buen_estado, id_usuario) VALUES (1, 'Grampa', true);
INSERT INTO componente (id_equipo_seguridad, nombre, buen_estado, id_usuario) VALUES (1, 'Manómetro', false);
INSERT INTO componente (id_equipo_seguridad, nombre, buen_estado, id_usuario) VALUES (1, 'Palanca de descarga', true);
INSERT INTO componente (id_equipo_seguridad, nombre, buen_estado, id_usuario) VALUES (1, 'Manija de transporte', true);
INSERT INTO componente (id_equipo_seguridad, nombre, buen_estado, id_usuario) VALUES (1, 'Cilindro', true);
INSERT INTO componente (id_equipo_seguridad, nombre, buen_estado, id_usuario) VALUES (1, 'Pasador', true);



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