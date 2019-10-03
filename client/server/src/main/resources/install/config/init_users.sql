CREATE TABLE t_users (
   id int PRIMARY KEY auto_increment,
   username VARCHAR(30) NOT NULL,
   password VARCHAR(255) NOT NULL,
   enabled BOOLEAN default TRUE,
   isAdmin BOOLEAN DEFAULT FALSE
);

INSERT INTO t_users(username, password) VALUES
('admin', '$2a$10$WN.yYybAqz0PXrz5PHVoMes2XgmgnheanMqs6HZWroTDb1lgb7Lh2'),
('guest', '$2a$10$7TUhH6vMYSJvFPEkbrdhKuqIrt063ySmy3MuYPm5ASRI/fRnrRbKO');