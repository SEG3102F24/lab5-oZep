import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import {
  Firestore,
  collection,
  collectionData,
  addDoc
} from '@angular/fire/firestore';
import { Employee } from '../model/employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private firestore: Firestore = inject(Firestore);

  constructor() { }

  addEmployee(employee: Employee): void {
    console.log('addEmployee');
    const employeeData = { ...employee };
    addDoc(collection(this.firestore, 'employees'), employeeData);
  }

  getEmployees(): Observable<Employee[]> {
    console.log('getEmployees');
    const employees = collection(this.firestore, 'employees');
    return collectionData(employees) as Observable<Employee[]>;
  }
}
