import { TestBed } from '@angular/core/testing';
import { EmployeesComponent } from './employees.component';
import { EmployeeService } from '../service/employee.service';
import { Firestore } from '@angular/fire/firestore';
import { provideFirestore, getFirestore } from '@angular/fire/firestore';
import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { environment } from '../../environments/environment';

describe('EmployeesComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EmployeesComponent],
      providers: [EmployeeService],
      imports: [
        provideFirebaseApp(() => initializeApp(environment.firebase)),
        provideFirestore(() => getFirestore())
      ]
    }).compileComponents();
  });

  it('should create', () => {
    const fixture = TestBed.createComponent(EmployeesComponent);
    const component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });
});