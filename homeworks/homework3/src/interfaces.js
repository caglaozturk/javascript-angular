function sendEmail(personInterfaces) {
    var to = personInterfaces.eMail;
    var name = personInterfaces.name;

    var send = function(){
        console.log("Mail gönderildi :" + name + "/" + to);
    }

    send();
}

function Customer(name,eMail) {
    this.name = name;
    this.eMail = eMail;
    //Other staff
}

function Employee(name,eMail) {
    this.name = name;
    this.eMail = eMail;
}

var someCustomer = new Customer("cagla","cagla@ozturk.com");
var someEmployee = new Employee("ali","ali@gmail.com");
sendEmail(someCustomer);
sendEmail(someEmployee);