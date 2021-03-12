DROP DATABASE alkemy;
CREATE DATABASE alkemy;
USE alkemy;

CREATE TABLE users(
    id_user INT(50) auto_increment NOT NULL,
    email VARCHAR(50) NOT NULL,
    password VARCHAR(255) NOT NULL,
    CONSTRAINT pk_users PRIMARY KEY(id_user),
    CONSTRAINT uq_email UNIQUE(email)
)ENGINE=InnoDB;

CREATE TABLE categories(
    id_category INT(50) auto_increment NOT NULL,
    description VARCHAR(50) NOT NULL,
    CONSTRAINT pk_categories PRIMARY KEY(id_category)
)ENGINE=InnoDB;

CREATE TABLE operations(
    id_operation INT(50) auto_increment NOT NULL,
    -- user_id INT(50) NOT NULL,
    -- category_id INT(50) NOT NULL,
    concept VARCHAR(50) NOT NULL,
    amount INT (50) NOT NULL,
    date TIMESTAMP NOT NULL DEFAULT current_timestamp,
    type TINYINT(1) NOT NULL,
    CONSTRAINT pk_operations PRIMARY KEY(id_operation)
    -- CONSTRAINT fk_operations_users FOREIGN KEY(user_id) REFERENCES users(id_user),
    -- CONSTRAINT fk_operations_categories FOREIGN KEY(category_id) REFERENCES categories(id_category)

)ENGINE=InnoDB;



-- INSERT INTO operations (user_id, category_id, concept, amount, type) VALUES (1,1,'comida',200, 1)