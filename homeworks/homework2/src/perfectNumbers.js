//Mükemmel sayı, sayılar teorisinde, kendisi hariç pozitif tam bölenlerinin toplamı kendisine eşit olan sayı. 
//Diğer bir ifadeyle, bir mükemmel sayı, bütün pozitif tam bölenlerinin toplamının yarısına eşittir.
function perfectNumbers() {
    for (let num = 1; num < 1000; num++) {
        let sum = 0
        let i = 1
        while (i <= num / 2) {
            if (num % i == 0) {
                sum = sum + i
            }
            i += 1
        }
        if (num == sum) {
            console.log(num + " Mükemmel sayıdır!")
        }
    }
}
perfectNumbers()

