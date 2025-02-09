import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalCreateAlumnoComponent } from './modal-create-alumno.component';

describe('ModalCreateAlumnoComponent', () => {
  let component: ModalCreateAlumnoComponent;
  let fixture: ComponentFixture<ModalCreateAlumnoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModalCreateAlumnoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalCreateAlumnoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
