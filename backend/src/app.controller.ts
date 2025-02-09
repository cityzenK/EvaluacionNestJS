import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { Alumno } from './entities/alumno.entity';
import { CreateAlumnoDTO } from './dto/create-alumno.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('consultar-alumno/:idGrado')
  async getAlumnoById(@Param('idGrado') grado: string): Promise<Alumno[]> {
    if (grado != '0') {
      return this.appService.getAlumnoByGrade(grado);
    }
    return this.appService.getAllAlumnos();
  }

  @Post('crear-alumno')
  creteAlumno(@Body() alumnoPayload: CreateAlumnoDTO) {
    return this.appService.createAlumno(alumnoPayload);
  }
}
