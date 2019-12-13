"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var grid_component_1 = require("../Grid/grid.component");
var supplier_1 = require("./supplier");
var supplierComponent = /** @class */ (function (_super) {
    __extends(supplierComponent, _super);
    function supplierComponent() {
        //gridColumns: Array<object> = new Array<object>();
        //@Input()
        //gridData: Array<object> = new Array<object>();
        //@Input()
        //entityName: string = "";
        var _this = _super !== null && _super.apply(this, arguments) || this;
        //set gridDataSet(_gridData: Array<object>) {
        //    if (_gridData.length > 0) {
        //        var columnNames = Object.keys(_gridData[0]).values;
        //        this.gridData = _gridData;
        //        for (var index in columnNames) {
        //            this.gridColumns.push(columnNames[index]);
        //        }
        //    }
        //}
        //suppliers: ISupplier[];
        _this.currentSupplier = new supplier_1.supplier();
        _this.suppliers = new Array();
        return _this;
        //constructor() {
        //    this.suppliers = [
        //        { firstName: 'customer1FirstName', lastName: 'customer1LastName', gender: 'Male', age: 18 },
        //        { firstName: 'customer2FirstName', lastName: 'customer2LastName', gender: 'Male', age: 18 },
        //        { firstName: 'customer3FirstName', lastName: 'customer3LastName', gender: 'FeMale', age: 18 },
        //        { firstName: 'customer4FirstName', lastName: 'customer4LastName', gender: 'FeMale', age: 18 },
        //        { firstName: 'customer5FirstName', lastName: 'customer5LastName', gender: 'FeMale', age: 18 },
        //        { firstName: 'customer6FirstName', lastName: 'customer6LastName', gender: 'FeMale', age: 18 }
        //    ];
        //}
    }
    supplierComponent.prototype.Select = function (supSelected) {
        this.currentSupplier = Object.assign({}, supSelected);
    };
    supplierComponent.prototype.Clear = function () {
        this.currentSupplier = new supplier_1.supplier();
    };
    supplierComponent.prototype.Update = function () {
        //for (let supp of this.suppliers) {
        //    if(supp.)
        //}
    };
    supplierComponent.prototype.Add = function () {
        this.suppliers.push(this.currentSupplier);
        this.suppliers = this.suppliers.slice();
        this.currentSupplier = new supplier_1.supplier();
    };
    supplierComponent = __decorate([
        core_1.Component({
            selector: 'supplier-ui',
            templateUrl: 'app/Supplier/supplier.html'
        })
    ], supplierComponent);
    return supplierComponent;
}(grid_component_1.gridcomponent));
exports.supplierComponent = supplierComponent;
//# sourceMappingURL=supplier.component.js.map