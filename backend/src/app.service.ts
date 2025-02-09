import { Injectable } from '@nestjs/common';
import { Alumno } from './entities/alumno.entity';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { AlumnoDocument, AlumnoSch } from './schemas/alumno.schema';
import { CreateAlumnoDTO } from './dto/create-alumno.dto';

@Injectable()
export class AppService {
  constructor(
    @InjectModel(AlumnoSch.name)
    private readonly alumnoModel: Model<AlumnoDocument>,
  ) {}
  getHello(): string {
    return 'Hello World!';
  }

  async getAlumnoByGrade(Grado: string): Promise<Alumno[]> {
    return this.alumnoModel.find({ Grado }).exec();
  }

  async getAllAlumnos(): Promise<Alumno[]> {
    return this.alumnoModel.find().exec();
  }

  async createAlumno(alumno: CreateAlumnoDTO): Promise<Alumno> {
    return this.alumnoModel.create(alumno);
  }
}
