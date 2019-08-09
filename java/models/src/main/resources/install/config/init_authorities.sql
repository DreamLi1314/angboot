CREATE TABLE t_authorities (
   username VARCHAR(50) NOT NULL,
   authority VARCHAR(20) NOT NULL
);

INSERT INTO t_authorities VALUES('admin', 'ROLE_ADMIN');