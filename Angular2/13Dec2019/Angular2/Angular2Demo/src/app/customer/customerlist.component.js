"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var customerlistcomponent = /** @class */ (function () {
    function customerlistcomponent() {
        ///////
        this.selectedCustomerRadioButton = 'all';
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
    customerlistcomponent.prototype.getTotalCustomerCount = function () {
        return this.customers.length;
    };
    customerlistcomponent.prototype.getTotalMaleCustomerCount = function () {
        return this.customers.filter(function (c) { return c.gender === "Male"; }).length;
    };
    customerlistcomponent.prototype.getTotalFeMaleCustomerCount = function () {
        return this.customers.filter(function (c) { return c.gender === "FeMale"; }).length;
    };
    customerlistcomponent.prototype.onCustomerRadioButtonChange = function (selectedRadioButtonValue) {
        this.selectedCustomerRadioButton = selectedRadioButtonValue;
    };
    customerlistcomponent = __decorate([
        core_1.Component({
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
        ,
        __metadata("design:paramtypes", [])
    ], customerlistcomponent);
    return customerlistcomponent;
}());
exports.customerlistcomponent = customerlistcomponent;
//# sourceMappingURL=customerlist.component.js.map