CREATE DATABASE  musipy;

use musipy;


CREATE TABLE usuario (
	id INT PRIMARY KEY AUTO_INCREMENT,
	nome VARCHAR(50),
	email VARCHAR(50),
	senha VARCHAR(50)
);

select * from usuario;	

truncate table usuario;

create table playlist (
	idPlaylist int primary key auto_increment,
    nomePlaylist varchar(45)
);

create table conec (
fkUsurio int,
fkPlaylist int,
primary key (fkUsuario, fkPlaylist),
foreign key (fkUsuario) references usuario (id),
foreign key (fkPlaylist) references playlist (idPlaylist)
);