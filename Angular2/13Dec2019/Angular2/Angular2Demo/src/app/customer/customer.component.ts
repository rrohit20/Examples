import { Component, EventEmitter, Input, Output } from '@angular/core';
import { customer } from './customer'

@Component({
    selector: 'my-customer',
    templateUrl: 'app/customer/customer.component.html'
})
//export class CustomerComponent {
//    firstName: string = 'Tom';
//    lastName: string = 'Hopkins';
//    gender: string = 'Male';
//    age: number = 20;
//}

export class CustomerComponent {
    @Input()
    all: number;
    @Input()
    Male: number;
    @Input()
    FeMale: number;

    selectedRadioButtonValue: string = 'all';

    @Output()
    radioButtonSelectionChanged: EventEmitter<string> = new EventEmitter<string>();

    onRadioButtonSelectionChange() {
        this.radioButtonSelectionChanged.emit(this.selectedRadioButtonValue);
    }
    //firstName: string= 'Tom';
    //lastName: string= 'Hopkins';
    //gender: string = 'Male';
    //age: number = 20;
}