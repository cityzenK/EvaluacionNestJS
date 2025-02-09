import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { AlumnoService } from './services/alumno.service';
import { ActivatedRoute } from '@angular/router';
import { Alumno } from './models/alumno.model';

@Component({
  selector: 'app-alumnos',
  standalone: true,
  imports: [],
  templateUrl: './alumnos.component.html',
  styleUrl: './alumnos.component.css',
})
export class AlumnosComponent implements OnInit, OnChanges {
  alumnos: Alumno[] = [];
  @Input() idGrade: Number = 0;

  constructor(private alumnoService: AlumnoService) {}

  ngOnInit(): void {
    this.getAlumnos();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['idGrade']) {
      this.getAlumnos();
    }
  }

  getAlumnos(id: Number = this.idGrade) {
    this.alumnoService.getAlumnos(id).subscribe({
      next: (result) => {
        this.alumnos = result;
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
}
