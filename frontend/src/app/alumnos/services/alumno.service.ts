import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AlumnoService {
  constructor(private http: HttpClient) {}
  private URL = 'http://localhost:3000';

  private headers = new HttpHeaders({
    'x-api-key': 'f2262fa054mshe5485a179fce5dcp1a22d0jsn3794fccb2f95',
  });

  public getAlumnos(id: Number): Observable<[]> {
    const uriConsulta = `${this.URL}/consultar-alumno/${id}`;
    return this.http
      .get<[]>(uriConsulta, { headers: this.headers })
      .pipe((res) => res);
  }
}
