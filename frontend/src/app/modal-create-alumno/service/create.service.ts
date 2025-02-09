import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Alumno } from '../../alumnos/models/alumno.model';
import { Observable } from 'rxjs';
import { configLoader } from '../../config/config-loader';

@Injectable({
  providedIn: 'root',
})
export class CreateService {
  private URL = configLoader().URL;
  private headers = new HttpHeaders(configLoader().keyHedaer);

  constructor(private http: HttpClient) {}

  public createAlumno(alumno: Alumno): Observable<Alumno> {
    const uriRequest = `${this.URL}/crear-alumno`;
    return this.http
      .post<Alumno>(uriRequest, alumno, { headers: this.headers })
      .pipe((res) => res);
  }
}
