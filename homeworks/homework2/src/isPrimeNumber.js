//Asal sayılar sadece kendine ve 1'e bölünebilen pozitif tam sayılardır.
function isPrimeNumber(...sayi) {
    for (let j = 0; j < sayi.length; j++) {
        let sayac=0;
        for(let i=2;i<sayi[j];i++){
            if(sayi[j]%i==0){
                sayac+=1
            }
        }
        if (sayac==0) {
            console.log(sayi[j]+" Asal")
        }
        else{
            console.log(sayi[j]+" Asal değil!")
        }
    }
}
isPrimeNumber(3,21,7)