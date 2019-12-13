import { Component } from '@angular/core';

@Component({
    selector: 'my-employee',
    templateUrl: 'app/employee/employee.component.html'
})
export class EmployeeComponent {
    firstName: string = 'EmployeeFirstName';
    lastName: string = 'EmployeeLastName';
    gender: string = 'Male';
    age: number = 20;
}