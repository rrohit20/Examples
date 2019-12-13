import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
    //template: `<h1>Hello {{name}}</h1>`,
    //templateUrl: 'app/app.component.html',
    //template: '<div><h1>{{pageHeader}}</h1><my-employee></my-employee></div>'
    templateUrl: 'app/Main.html'
})
//export class AppComponent  { name = 'Angular 2!'; }
export class AppComponent {
    pageHeader: string = 'Employee Details:';
}