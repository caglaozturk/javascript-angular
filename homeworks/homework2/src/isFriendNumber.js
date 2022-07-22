//Arkadaş sayı iki sayı birbirinin kendisi hariç bölenleri toplamına eşitse bu sayılara denir.
function isFriendNumber(num1,num2) {
    let biggerNumber;
    let sum1=1;
    let sum2=1;
    let i=2;
    if (num1>num2) {
        biggerNumber=num1
    }
    else{
        biggerNumber=num2
    }
    while(i <= biggerNumber/2){
        if (num1%i==0) {
           sum1=sum1+i 
        }
        if (num2%i==0) {
            sum2=sum2+i 
        }
        i=i+1
    }
    if (num1==sum2 && num2==sum1) {
        console.log(num1 + " ve " + num2 + " Arkadaş sayıdır")
    }
    else{
        console.log(num1 + " ve " + num2 + " Arkadaş sayı değildir!!")
    }
}

isFriendNumber(220,284)