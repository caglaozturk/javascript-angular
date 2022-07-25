var student = {
    firstName: "Çağla",
    lastName: "Öztürk",
    fullName: function(){
        return this.firstName + " " + this.lastName;
    }
}

alert(student.fullName());

function Customer(first,last,city,country,age){
    this.first = first;
    this.last = last;
    this.city = city;
    this.age = age;
    this.country = country;
}
var someCustomer = new Customer("Çağla","Ali","İstanbul","Turkey",25)

console.log(someCustomer.country)