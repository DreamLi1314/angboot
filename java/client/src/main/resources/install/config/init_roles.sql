CREATE TABLE t_roles (
   id int PRIMARY KEY auto_increment,
   role_name VARCHAR(20) NOT NULL
);

INSERT INTO t_roles VALUES(NULL, 'ROLE_ADMIN'), (NULL, 'ROLE_GUEST');
