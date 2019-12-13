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
var CustomerComponent = /** @class */ (function () {
    function CustomerComponent() {
        this.selectedRadioButtonValue = 'all';
        this.radioButtonSelectionChanged = new core_1.EventEmitter();
        //firstName: string= 'Tom';
        //lastName: string= 'Hopkins';
        //gender: string = 'Male';
        //age: number = 20;
    }
    CustomerComponent.prototype.onRadioButtonSelectionChange = function () {
        this.radioButtonSelectionChanged.emit(this.selectedRadioButtonValue);
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", Number)
    ], CustomerComponent.prototype, "all", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Number)
    ], CustomerComponent.prototype, "Male", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Number)
    ], CustomerComponent.prototype, "FeMale", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", core_1.EventEmitter)
    ], CustomerComponent.prototype, "radioButtonSelectionChanged", void 0);
    CustomerComponent = __decorate([
        core_1.Component({
            selector: 'my-customer',
            templateUrl: 'app/customer/customer.component.html'
        })
        //export class CustomerComponent {
        //    firstName: string = 'Tom';
        //    lastName: string = 'Hopkins';
        //    gender: string = 'Male';
        //    age: number = 20;
        //}
    ], CustomerComponent);
    return CustomerComponent;
}());
exports.CustomerComponent = CustomerComponent;
//# sourceMappingURL=customer.component.js.map