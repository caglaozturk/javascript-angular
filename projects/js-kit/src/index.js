import CustomerService from "./services/customerService.js"

console.log("index")

let service = new CustomerService();
console.log(service.getAll())