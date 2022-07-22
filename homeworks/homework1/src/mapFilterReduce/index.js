// map() metodu, dizi içerisindeki tüm elemanları bir işlemden geçirmek için kullanılır. 
// Her bir eleman tek tek işlenir, değerleri değiştirilebilir, geriye ne döndürüleceği belirlenebilir. 
// Ve sonunda ise, işlemden geçen öğelerden oluşan bir dizi geriye döner.
let products=[
    {id:1,name:"Dell Bilgisayar",unitPrice:1000},
    {id:2,name:"ASUS Bilgisayar",unitPrice:2000},
    {id:3,name:"Monster Bilgisayar",unitPrice:3000},
    {id:4,name:"Casper Bilgisayar",unitPrice:4000},
    {id:5,name:"ACER Bilgisayar",unitPrice:5000},

]
console.log("<ul>")
products.map(product=>console.log(`<li>${product.name}<li>`))
console.log("<ul>")

// Filter bir fonksiyondan True dönen elementler için bir liste oluşturur.
let filteredProducts= products.filter(product=>product.unitPrice>3000)
console.log(filteredProducts)

// Reduce bir liste üzerine bazı hesaplamaları gerçekleştirmek ve bir sonuç döndürmek için çok kullanışlı bir fonksiyondur. 
// Bir listedeki öğelerin çarpımı döndüren bir kod yazalım. Klasik bir programcı aşağıdaki şekilde kod yazar.
let cartTotal=products.reduce((acc,product)=>acc+product.unitPrice,0)
console.log(cartTotal)


let cartTotal2 = products
                .filter(p=>p.unitPrice>13000)
                .map(p=>{
                    p.unitPrice = p.unitPrice*1.18
                    return p
                })
                .reduce((acc,p)=>acc+p.unitPrice,0)
console.log(cartTotal2)