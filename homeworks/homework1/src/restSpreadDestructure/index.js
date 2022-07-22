//Js "type safe" bir dil değildir, değişkenlerin tipleri ve değerleri değiştirilebilir
var sayi1=10;
sayi1="Çağla";
console.log(sayi1)

// Aşağıdaki kod satırı duplicate hatası verecektir
// let sayi2=15;
// let sayi2= "Çağla";
// console.log(sayi2)

let student={id:1,name:"Çağla"};
console.log(student);

let students=["Merve","Çağla","Büşra"]; 
console.log(students);

let students2=[student,{id:2,name:"Büşra"}];
console.log(students2);

//Rest Parameters: Fonksiyonlara sınır sayısı olmadan parametre geçmeye olanak verir.
let showProducts=function (id,...products){
    console.log(id)
    console.log(products)
}
showProducts(1,"Elma","Armut","Karpuz")

// 1. Rest Parametresi, geriye kalan tüm değişkenleri toplar bu yüzden fonksiyonun son parametresi olmalı, 
// aşağıdaki gibi bir yazım hataya neden olur.
// function f(arg1, ...rest, arg2) {
//     //error
// }
// 2. Bir fonksiyonda sadece bir Rest Parametresi olabilir, aynı şekilde aşağıdaki gibi bir yazım hataya neden olacaktır.
// function f(...rest1, ...rest2) { 
//     //error
// }

// Spread Operator: fonksiyonlara sınırsız parametre göndermemizi sağlamakta ve 
// bu özelliğin dışında bir dizi içerisindeki tüm elemanları tek seferde elde etmemizi sağlamaktadır.
let points=[1,15,24,3,65,98]
console.log(Math.max(...points))
console.log(..."ABC","D",..."EFG")

//Destructuring bir obje veya bir array içinden her bir elemanın alınıp bir değişken içine kaydedilmesi.
let populations=[1000,2000,3000]
let [small,medium,high]=populations;
console.log(small)

let category={id:1,name:"İçecek"};
console.log(category.id);
console.log(category["name"])
