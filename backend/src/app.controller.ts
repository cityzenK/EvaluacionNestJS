import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { Alumno } from './entities/alumno.entity';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('consultar-alumno/:idGrado')
  getAlumnoById(@Param('idGrado') id: string): Alumno[] {
    return this.appService.getAlumnoById(id);
  }

  @Post('crear-alumno')
  creteAlumno(@Body() alumnoPayload: Alumno): string {
    return this.appService.createAlumno(alumnoPayload);
  }
}
