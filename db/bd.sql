CREATE TABLE rol(
	id_rol int generated always as identity,
	nombre character varying(100) not null,
	estado character varying(1) not null,
	primary key(id_rol)
);

CREATE TABLE sector(
	id_sector int generated always as identity,
	nombre character varying(100) not null,
	estado character varying(1) not null,
	primary key(id_sector)
);

CREATE TABLE zona(
	id_sector int,
	id_zona int generated always as identity,
	nombre character varying(100) not null,
	estado character varying(1) not null,
	primary key(id_zona),
	constraint fk_sector
		foreign key(id_sector)
			references sector(id_sector)
);


CREATE TABLE usuario (
    id_usuario int generated always as identity,
	id_rol int,
	id_sector int,
	correo_personal character varying(100),
	correo_trabajo character varying(100),
	celular_personal character varying(20),
	celular_trabajo character varying(20),
	contrasena character varying(100),
	nombres character varying(100),
	apellido_paterno character varying(50),
	apellido_materno character varying(50),
	estado character varying(1),
	dni character varying(20),
	primary key(id_usuario),
	constraint fk_rol
		foreign key(id_rol)
			references rol(id_rol),
	constraint fk_sector
		foreign key(id_sector)
			references sector(id_sector)
);

CREATE TABLE alerta_riesgo (
	id_alerta_riesgo int generated always as identity,
	incidente character varying(100),
	gravedad character varying(50),
	id_sector int,
	id_zona int,
	fecha_hora timestamp with time zone,
	descripcion character varying(200),
	estado character varying(1),
	id_usuario int,
	primary key(id_alerta_riesgo),
	constraint fk_sector
		foreign key(id_sector)
			references sector(id_sector),
	constraint fk_zona
	foreign key(id_zona)
		references zona(id_zona)
);

CREATE TABLE seguimiento_riesgo (
	id_seguimiento int generated always as identity,
	causa character varying(100),
	plan_mejora character varying(50),
	id_alerta_riesgo int,
	primary key(id_seguimiento),
	constraint fk_alerta_riesgo
		foreign key(id_alerta_riesgo)
			references alerta_riesgo(id_alerta_riesgo)
);

CREATE TABLE evidencia (
	id_evidencia int generated always as identity,
	ubicacion character varying(100),
	id_alerta_riesgo int,
	primary key(id_evidencia),
	constraint fk_alerta_riesgo
		foreign key(id_alerta_riesgo)
			references alerta_riesgo(id_alerta_riesgo)
);

CREATE TABLE inspeccion (
	id_inspeccion int generated always as identity,
	id_usuario int,
	fecha_hora timestamp,
	primary key(id_inspeccion),
	constraint fk_usuario
		foreign key(id_usuario)
			references usuario(id_usuario)
);


CREATE TABLE equipo_seguridad (
	id_equipo_seguridad int generated always as identity,
	estado_fisico character varying(100),
	estado_control character varying(100),
	nombre character varying(100),
	numero_serie character varying(100),
	marca character varying(100),
	posicion character varying(100),
	nota character varying(100),
	id_sector int,
	id_zona int,
	fecha_adquisicion timestamp,
	fecha_vencimiento timestamp,
	primary key(id_equipo_seguridad),
	constraint fk_sector
		foreign key(id_sector)
			references sector(id_sector),
	constraint fk_zona
	foreign key(id_zona)
		references zona(id_zona)
);

CREATE TABLE plan_accion (
	id_plan_accion int generated always as identity,
	id_sector int,
	id_zona int,
	id_equipo_seguridad int,
	nota character varying(200),
	gravedad character varying(50),
	fecha_planeada_cierre timestamp,
	primary key(id_plan_accion),
	constraint fk_sector
		foreign key(id_sector)
			references sector(id_sector),
	constraint fk_zona
	foreign key(id_zona)
		references zona(id_zona),
	constraint fk_equipo_seguridad
	foreign key(id_equipo_seguridad)
		references equipo_seguridad(id_equipo_seguridad)
);

CREATE TABLE componente (
	id_componente int generated always as identity,
	id_equipo_seguridad int,
	nombre character varying(100),
	buen_estado boolean,
	primary key(id_componente),
	constraint fk_equipo_seguridad
		foreign key(id_equipo_seguridad)
			references equipo_seguridad(id_equipo_seguridad)
);

CREATE TABLE equipo_proteccion_personal (
	id_equipo_proteccion_personal int generated always as identity,
	id_zona int,
	nombre character varying(100),
	obligatorio boolean,
	estado character varying(1),
	primary key(id_equipo_proteccion_personal),
	constraint fk_zona
		foreign key(id_zona)
			references zona(id_zona)
);

CREATE TABLE historico_inspeccion (
	id_historico int generated always as identity,
	id_equipo_proteccion_personal int,
	id_zona int,
	id_usuario int,
	utilizado boolean,
	fecha_hora timestamp,
	primary key(id_historico),
	constraint fk_equipo_proteccion_personal
		foreign key(id_equipo_proteccion_personal)
			references equipo_proteccion_personal(id_equipo_proteccion_personal),
	constraint fk_zona
		foreign key(id_zona)
			references zona(id_zona),
	constraint fk_usuario
		foreign key(id_usuario)
			references usuario(id_usuario)
);

CREATE TABLE historico_componente (
	id_historico int generated always as identity,
	id_componente int,
	id_usuario int,
	buen_estado boolean,
	fecha_hora timestamp,
	primary key(id_historico),
	constraint fk_componente
		foreign key(id_componente)
			references componente(id_componente),
	constraint fk_usuario
		foreign key(id_usuario)
			references usuario(id_usuario)
);