import { users } from "../data/users.js";

export default class CustomerService{
    constructor(){
        this.customers = users.filter(user=>user.type === "customer")
    }

    getAll(){
        return this.customers;
    }

    add(customer){
        this.customers.push(customer);
    }

    update(customer){
        let customerToUpdate = this.customers.find(c=>c.id === customer.id)
        if(customerToUpdate) {
            customerToUpdate.firstName = customer.firstName;
            customerToUpdate.lastName = customer.lastName;
            customerToUpdate.age = customer.age;
            customerToUpdate.city = customer.city;
            customerToUpdate.creditCardNumber = customer.creditCardNumber;
        }

        // let customerToUpdateIndex = this.customers.findIndex(customer=>customer.id === customer.id);
        // this.customers[customerToUpdateIndex] = customer;
    }

    delete(customer){
        this.customers = this.customers.filter(c=>c.id !== customer.id);

    }
}