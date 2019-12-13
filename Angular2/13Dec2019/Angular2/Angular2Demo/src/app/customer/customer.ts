import { ICustomer } from "./Icustomer";

export class customer implements ICustomer {
    constructor(public firstName: string, public lastName: string, public gender: string, public age: number) { }
}