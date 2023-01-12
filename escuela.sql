create dababase escuela;

use escuela;
create table alumnos(
    id int not null auto_increment,
    nombre varchar(100) not null,
    apellidos varchar(100) not null,
    matricula varchar(50) not null unique,
    carrera varchar(50) not null,
    constraint pk_alumnos primary key(id)
);

create table materias(
    id int not null auto_increment,
    materia varchar(50),
    promedio decimal(3,1),
    semestre varchar(50),
    constraint pk_materias primary key(id)
);

create table nota_alumnos_materias(
    id int not null auto_increment,
    id_alumno int not null,
    id_materia int not null,
    constraint pk_nota primary key(id),
    constraint fk_nota_alumno foreign key(id_alumno) references alumnos(id) on delete cascade on update cascade,
    constraint fk_nota_materia foreign key(id_materia) references materias(id) on delete cascade on update cascade
);