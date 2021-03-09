CREATE TABLE usuarios(
    id_usuario INT(50) auto_increment NOT NULL,
    email VARCHAR(50) NOT NULL,
    password VARCHAR(255) NOT NULL,
    CONSTRAINT pk_usuarios PRIMARY KEY(id_usuario),
    CONSTRAINT uq_email UNIQUE(email)
)ENGINE=InnoDB;

CREATE TABLE categorias(
    id_categoria INT(50) auto_increment NOT NULL,
    descripcion VARCHAR(50) NOT NULL,
    CONSTRAINT pk_categorias PRIMARY KEY(id_categoria)
)ENGINE=InnoDB;

CREATE TABLE operaciones(
    id_operacion INT(50) auto_increment NOT NULL,
    usuario_id INT(50) NOT NULL,
    categoria_id INT(50) NOT NULL,
    concepto VARCHAR(50) NOT NULL,
    monto INT (50) NOT NULL,
    fecha TIMESTAMP NOT NULL DEFAULT current_timestamp,
    tipo TINYINT(1) NOT NULL,
    CONSTRAINT pk_operaciones PRIMARY KEY(id_operacion),
    CONSTRAINT fk_operaciones_usuarios FOREIGN KEY(usuario_id) REFERENCES usuarios(id_usuario),
    CONSTRAINT fk_operaciones_categorias FOREIGN KEY(categoria_id) REFERENCES categorias(id_categoria)
)ENGINE=InnoDB;
