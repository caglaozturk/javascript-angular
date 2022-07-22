//export: public dışardan erişebilirsin demektir.

// const
//referans tipse referansını değiştiremezsin
//değer tipse değerini değiştiremezsin demektir

function addToCart(quantity, productName="Armut") {
    // console.log(quantity)
    // console.log(productName)
}

addToCart(15, "Elma");
addToCart(15);

let addToCart2 = (quantity) => {
    // console.log(quantity)
}

addToCart2();


let products = [
    {productName:"Elma", unitPrice:10, quantity:5},
    {productName:"Armut", unitPrice:10, quantity:5},
    {productName:"Karpuz", unitPrice:10, quantity:5}
]

//products.push({productName:"Üzüm", unitPrice:10, quantity:15})


function addProduct(product) {
    let productToFind = products.find(p=>p.productName === product.productName)
    if(!productToFind) products.push(product)
    // console.log(products)
}

addProduct({productName:"Vişne", unitPrice:100, quantity:15})

let filteredProducts = products.filter(p=>p.unitPrice<100)
// console.log(filteredProducts)


let searchProducts = products.filter(p=>p.productName.toLowerCase().includes("a"))
//console.log(searchProducts)

const array = ["a","b","c"]
let res1 = array.forEach(item => console.log(item))
let res2 = array.map(item => item+'Meyvesi')
console.log(res2)

array.map(a=>console.log(a))

const meyve=["elma","armut","karpuz"]
meyve.forEach(item=>{
    console.log(item)
})

//map yeni bir dizi oluşturur
const meyve2=meyve.map(meyve=>{
    console.log(meyve)
})
meyve2.forEach(x=>console.log(x))
meyve.forEach(x=>console.log(x))

const sayilar=[1,2,3,4,5,6,7,8,9,10]
const toplam=sayilar.reduce((onceki,sonraki)=>{
    return onceki+sonraki;
})
console.log(toplam)

const meyveler = ['🍇', '🍈', '🍉', '🍊', '🍋'];
const portakal = meyveler.find(meyve => meyve === '🍊');
console.log(portakal); // Output: 🍊