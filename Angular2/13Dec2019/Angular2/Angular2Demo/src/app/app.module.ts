import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'
import { AppComponent }  from './app.component';
import { EmployeeComponent } from './employee/employee.component';
import { CustomerComponent } from './customer/customer.component';
import { customerlistcomponent } from './customer/customerlist.component';
import { supplierComponent } from './Supplier/supplier.component'
import { gridcomponent } from './Grid/grid.component'
@NgModule({
    imports: [BrowserModule, FormsModule],
    declarations: [AppComponent, EmployeeComponent, CustomerComponent, customerlistcomponent, supplierComponent, gridcomponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
