import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type AlumnoDocument = AlumnoSch & Document;
@Schema()
export class AlumnoSch {
  @Prop()
  Nombre: string;
  @Prop()
  FechaNacimiento: Date;
  @Prop()
  NombrePadre: string;
  @Prop()
  NombreMadre: string;
  @Prop()
  Grado: string;
  @Prop()
  Seccion: string;
  @Prop()
  FechaIngreso: Date;
}

export const AlumnoSchema = SchemaFactory.createForClass(AlumnoSch);
