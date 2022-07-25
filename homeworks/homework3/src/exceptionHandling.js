function myFunction() {
    var message,x;
    message = "";
    x = document.getElementById("demo").value;
    try {
        if (x == "") throw "is empty"
        if (isNaN(x)) throw "is not a number"
        if (x>10) throw "is too high"
        if (x<5) throw "is too low"
    } 
    catch (err) {
        message = "Input " + err
        console.log(message)
    }
    finally{
        document.getElementById("demo").value = "";
    }
}
