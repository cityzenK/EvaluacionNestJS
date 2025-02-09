import { CommonModule, NgClass } from '@angular/common';
import { Component, OnInit, signal } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { Alumno } from '../alumnos/models/alumno.model';

@Component({
  selector: 'app-modal-create-alumno',
  standalone: true,
  imports: [NgClass, ReactiveFormsModule, CommonModule, FormsModule],
  templateUrl: './modal-create-alumno.component.html',
  styleUrl: './modal-create-alumno.component.css',
})
export class ModalCreateAlumnoComponent implements OnInit {
  alumnoForm!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.createForm();
  }

  createForm(): void {
    this.alumnoForm = this.fb.group({
      Nombre: [''],
      FechaNacimiento: [''],
      NombrePadre: [''],
      NombreMadre: [''],
      Grado: [''],
      Seccion: [''],
      FechaIngreso: [new Date().toISOString().split('T')[0]],
    });
  }

  onSubmit(): void {
    if (this.alumnoForm.valid) {
      const formData: Alumno = this.alumnoForm.value;
      formData.FechaIngreso = new Date(formData.FechaIngreso);
      formData.FechaNacimiento = new Date(formData.FechaNacimiento);
      console.log(formData);
    } else {
      console.log('Form is invalid');
    }
  }

  isModalOpen = signal(false);

  openModal() {
    this.isModalOpen.set(true);
  }
  closeModal() {
    this.isModalOpen.set(false);
  }
}
