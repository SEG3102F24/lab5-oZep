import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { EmployeeComponent } from './employee.component';
import { EmployeeService } from '../service/employee.service';
import { Employee } from '../model/employee';
import { of } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

describe('EmployeeComponent', () => {
  let component: EmployeeComponent;
  let fixture: ComponentFixture<EmployeeComponent>;
  let employeeService: jasmine.SpyObj<EmployeeService>;
  let router: jasmine.SpyObj<Router>;

  beforeEach(() => {
    const employeeServiceSpy = jasmine.createSpyObj('EmployeeService', ['addEmployee']);
    const routerSpy = jasmine.createSpyObj('Router', ['navigate']);

    const activatedRouteSpy = jasmine.createSpyObj('ActivatedRoute', ['snapshot']);
    TestBed.configureTestingModule({
      imports: [ReactiveFormsModule, EmployeeComponent],
      providers: [
        { provide: EmployeeService, useValue: employeeServiceSpy },
        { provide: Router, useValue: routerSpy },
        { provide: ActivatedRoute, useValue: activatedRouteSpy }
      ]
    });

    fixture = TestBed.createComponent(EmployeeComponent);
    component = fixture.componentInstance;
    employeeService = TestBed.inject(EmployeeService) as jasmine.SpyObj<EmployeeService>;
    router = TestBed.inject(Router) as jasmine.SpyObj<Router>;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should validate the gender control with pattern', () => {
    const control = component.employeeForm.get('gender');
    control?.setValue('A');
    expect(control?.valid).toBeFalsy();
    control?.setValue('M');
    expect(control?.valid).toBeTruthy();
  });
});
