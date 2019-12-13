import { Component, EventEmitter, Input, Output } from '@angular/core';
import { customer } from './customer'

import { ICustomer } from './Icustomer'
@Component({
    selector: 'list-customer',
    templateUrl: 'app/customer/customerlist.component.html',
    styleUrls: ['app/customer/customerlist.component.css']
})

///////////////----1-------
//export class customerlistcomponent {
//    customers: any[];
//    selectedCustomerRadioButton: string = 'all';
//    constructor() {
//        this.customers = [
//            { firstName: 'Tom', lastName: 'Hopkins', gender: 'Male', age: 20 },
//            { firstName: 'Mary', lastName: 'Hopkins', gender: 'FeMale', age: 18 },
//            { firstName: 'customer1FirstName', lastName: 'customer1LastName', gender: 'Male', age: 18 },
//            { firstName: 'customer2FirstName', lastName: 'customer2LastName', gender: 'Male', age: 18 },
//            { firstName: 'customer3FirstName', lastName: 'customer3LastName', gender: 'FeMale', age: 18 },
//            { firstName: 'customer4FirstName', lastName: 'customer4LastName', gender: 'FeMale', age: 18 },
//            { firstName: 'customer5FirstName', lastName: 'customer5LastName', gender: 'FeMale', age: 18 },
//            { firstName: 'customer6FirstName', lastName: 'customer6LastName', gender: 'FeMale', age: 18 }
//        ];
//    }
//    getTotalCustomerCount(): number {
//        return this.customers.length;
//    }
//    getTotalMaleCustomerCount(): number {
//        return this.customers.filter(c=>c.gender === "Male").length;
//    }
//    getTotalFeMaleCustomerCount(): number {
//        return this.customers.filter(c => c.gender === "FeMale").length;
//    }

//    onCustomerRadioButtonChange(selectedRadioButtonValue: string): void {
//        this.selectedCustomerRadioButton = selectedRadioButtonValue;
//    }
//}

/////////////////
export class customerlistcomponent {
    //////----1
    //customers: any[];
    ///////////
    //////---2
    customers: ICustomer[];
    ///////
    selectedCustomerRadioButton: string = 'all';
    constructor() {
        this.customers = [
            { firstName: 'Tom', lastName: 'Hopkins', gender: 'Male', age: 20 },
            { firstName: 'Mary', lastName: 'Hopkins', gender: 'FeMale', age: 18 },
            { firstName: 'customer1FirstName', lastName: 'customer1LastName', gender: 'Male', age: 18 },
            { firstName: 'customer2FirstName', lastName: 'customer2LastName', gender: 'Male', age: 18 },
            { firstName: 'customer3FirstName', lastName: 'customer3LastName', gender: 'FeMale', age: 18 },
            { firstName: 'customer4FirstName', lastName: 'customer4LastName', gender: 'FeMale', age: 18 },
            { firstName: 'customer5FirstName', lastName: 'customer5LastName', gender: 'FeMale', age: 18 },
            { firstName: 'customer6FirstName', lastName: 'customer6LastName', gender: 'FeMale', age: 18 }
        ];
    }
    getTotalCustomerCount(): number {
        return this.customers.length;
    }
    getTotalMaleCustomerCount(): number {
        return this.customers.filter(c => c.gender === "Male").length;
    }
    getTotalFeMaleCustomerCount(): number {
        return this.customers.filter(c => c.gender === "FeMale").length;
    }

    onCustomerRadioButtonChange(selectedRadioButtonValue: string): void {
        this.selectedCustomerRadioButton = selectedRadioButtonValue;
    }
}