import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AlumnosComponent } from './alumnos/alumnos.component';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { ModalCreateAlumnoComponent } from './modal-create-alumno/modal-create-alumno.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    AlumnosComponent,
    ReactiveFormsModule,
    ModalCreateAlumnoComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  gradeFilter = new FormControl('');
  grade: Number = 0;

  constructor() {
    this.gradeFilter.valueChanges.subscribe((value) => {
      this.grade = new Number(value);
    });
  }
  grades: number[] = [1, 2, 3, 4, 5, 6];
  title = 'frontend';
}
