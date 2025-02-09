import { Injectable } from '@nestjs/common';
import { Alumno } from './entities/alumno.entity';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  private alumnos: Alumno[] = [
    {
      id: 1,
      Nombre: 'Carlos López',
      FechaNacimiento: new Date('2010-05-15T00:00:00.000Z'),
      NombrePadre: 'Juan López',
      NombreMadre: 'Ana García',
      Grado: '5',
      Seccion: 'A',
      FechaIngreso: new Date('2015-09-01T00:00:00.000Z'),
    },
    {
      id: 2,
      Nombre: 'María Pérez',
      FechaNacimiento: new Date('2011-08-20T00:00:00.000Z'),
      NombrePadre: 'Pedro Pérez',
      NombreMadre: 'Laura Sánchez',
      Grado: '4',
      Seccion: 'B',
      FechaIngreso: new Date('2016-09-01T00:00:00.000Z'),
    },
    {
      id: 3,
      Nombre: 'Luis Fernández',
      FechaNacimiento: new Date('2012-11-05T00:00:00.000Z'),
      NombrePadre: 'Carlos Fernández',
      NombreMadre: 'Lucía Martínez',
      Grado: '3',
      Seccion: 'C',
      FechaIngreso: new Date('2017-09-01T00:00:00.000Z'),
    },
    {
      id: 4,
      Nombre: 'Ana García',
      FechaNacimiento: new Date('2010-03-25T00:00:00.000Z'),
      NombrePadre: 'José García',
      NombreMadre: 'Marina Rodríguez',
      Grado: '6',
      Seccion: 'D',
      FechaIngreso: new Date('2015-09-01T00:00:00.000Z'),
    },
    {
      id: 5,
      Nombre: 'José Ramírez',
      FechaNacimiento: new Date('2010-02-10T00:00:00.000Z'),
      NombrePadre: 'Tomás Ramírez',
      NombreMadre: 'Carmen López',
      Grado: '6',
      Seccion: 'A',
      FechaIngreso: new Date('2015-09-01T00:00:00.000Z'),
    },
    {
      id: 6,
      Nombre: 'Sofía Torres',
      FechaNacimiento: new Date('2011-07-30T00:00:00.000Z'),
      NombrePadre: 'Ricardo Torres',
      NombreMadre: 'Elena Díaz',
      Grado: '5',
      Seccion: 'B',
      FechaIngreso: new Date('2016-09-01T00:00:00.000Z'),
    },
    {
      id: 7,
      Nombre: 'Martín Díaz',
      FechaNacimiento: new Date('2012-10-18T00:00:00.000Z'),
      NombrePadre: 'Antonio Díaz',
      NombreMadre: 'Rosa Hernández',
      Grado: '4',
      Seccion: 'C',
      FechaIngreso: new Date('2017-09-01T00:00:00.000Z'),
    },
    {
      id: 8,
      Nombre: 'Isabel Martínez',
      FechaNacimiento: new Date('2011-12-02T00:00:00.000Z'),
      NombrePadre: 'Juan Martínez',
      NombreMadre: 'Marta López',
      Grado: '3',
      Seccion: 'A',
      FechaIngreso: new Date('2016-09-01T00:00:00.000Z'),
    },
    {
      id: 9,
      Nombre: 'David Sánchez',
      FechaNacimiento: new Date('2010-06-22T00:00:00.000Z'),
      NombrePadre: 'Luis Sánchez',
      NombreMadre: 'Patricia Gómez',
      Grado: '5',
      Seccion: 'D',
      FechaIngreso: new Date('2015-09-01T00:00:00.000Z'),
    },
    {
      id: 10,
      Nombre: 'Elena Rodríguez',
      FechaNacimiento: new Date('2011-09-14T00:00:00.000Z'),
      NombrePadre: 'Manuel Rodríguez',
      NombreMadre: 'Celia Martín',
      Grado: '4',
      Seccion: 'B',
      FechaIngreso: new Date('2016-09-01T00:00:00.000Z'),
    },
  ];

  getAlumnoById(id: string): Alumno[] {
    return this.alumnos.filter((x: Alumno) => x.Grado == id);
  }

  getAllAlumnos(): Alumno[] {
    return this.alumnos;
  }

  createAlumno(alumno: Alumno): string {
    this.alumnos.push(alumno);
    if (this.alumnos.find((record: Alumno) => (record.id = alumno.id))) {
      return 'you create a alumno';
    } else {
      return 'you not create a alumno';
    }
  }
}
