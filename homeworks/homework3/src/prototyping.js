function Customer(first,last,city,country,age){
    this.first = first;
    this.last = last;
    this.city = city;
    this.age = age;
    this.country = country;
}

var someCustomer = new Customer("Çağla","Öztürk","İstanbul","Turkey",27);

Customer.prototype.eMail = "cagla@ozturk.com";
Customer.prototype.fullName = function(){
    return this.first + " " + this.last;
};

console.log(someCustomer.city);
console.log(someCustomer.eMail);
console.log(someCustomer.fullName());