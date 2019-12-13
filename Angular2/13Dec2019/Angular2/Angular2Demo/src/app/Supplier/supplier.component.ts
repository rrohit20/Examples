import { Component,Input,Output,EventEmitter } from "@angular/core"
import { ISupplier } from "./ISupplier";
import { gridcomponent } from "../Grid/grid.component";
import { customer } from "../customer/customer";
import { supplier } from "./supplier"
@Component({
    selector: 'supplier-ui',
    templateUrl: 'app/Supplier/supplier.html'
})

export class supplierComponent extends gridcomponent {

    //gridColumns: Array<object> = new Array<object>();
    //@Input()
    //gridData: Array<object> = new Array<object>();
    //@Input()
    //entityName: string = "";

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
    currentSupplier: supplier = new supplier();
    suppliers: Array<object> = new Array<object>();
    Select(supSelected: supplier) {
        this.currentSupplier = Object.assign({}, supSelected);
    }
    Clear() {
        this.currentSupplier = new supplier();
    }
    Update() {
        //for (let supp of this.suppliers) {
        //    if(supp.)
        //}
    }
    Add() {
        this.suppliers.push(this.currentSupplier);
        this.suppliers = this.suppliers.slice();
        this.currentSupplier = new supplier();
    }
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