function primeNumbers() {
    for(let j=2;j<1000;j++){
        let sayac=0;
        for(let i=2;i<j;i++){
            if(j%i==0){
                sayac+=1
            }
        }
        if (sayac==0) {
            console.log(j+" Asal")
        }
    }
}
primeNumbers()