function Customer(firstName,lastName) { 
    this.firstName = firstName; 
    this.lastName = lastName;

    var someField = "some value"; 

    this.sendProduct = function() { 
        console.log("Ürün gönderildi!")
    }
}

var mirza = new Customer ("Çağla","Öztürk");
mirza.sendProduct();


