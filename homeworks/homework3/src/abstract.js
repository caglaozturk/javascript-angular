var Person = {
    name: "None",
    email: "None",
    sendEmail: function() {
        console.log("Mail gönderildi :" + this.name + " " + this.email)
    }
}

function Customer(name,email) {
    this.name = name;
    this.email = email;
}

function Employee(name,email) {
    this.name = name;
    this.email = email;
}

Customer.prototype = Person;
var someCustomer = new Customer("Çağla","cagla@ozturk.com");
someCustomer.sendEmail();

Employee.prototype = Person;
var someEmployee = new Employee("Ali","ali@gmail.com");
someEmployee.sendEmail();
