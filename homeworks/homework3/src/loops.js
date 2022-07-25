var obj = {
    "a": 1,
    "b": 2,
    "c": 3
};

for (var prop in obj) {
    if (obj.hasOwnProperty(prop)) { 
      console.log("prop: " + prop + " value: " + obj[prop])
    }
}

for(let i=0;i<5;i++) console.log(i);

// let i=1; while(i<5) {console.log(i); i++};

// let i=1; do{ console.log(i); i++} while(i<5) ;


// const numberArray=[1,2,2,4,5];
// const colorSet=new Set(["red","green","blue"]);
// const colorMap=new Map([['red',1],['green',2]])
// numberArray.forEach(el=>console.log(el))
// colorSet.forEach(el=>console.log(el))
// colorMap.forEach((value,key, map)=>{console.log(`${key}:${value}`)})

// forEach: tüm array elemanlarını dön
// filter: tüm array elemanlarını dön ve koşula göre filtreleme yap
// map: tüm array elemanlarını başka bir array olarak maple.
// find: array içerisinde ilgilendiğin elemanı bul.
// reduce array tek bir çıktının oluşmasını sağlamaktır.
// every verilen tüm elemanların testi geçip geçmediği
// some ise verilen elemanlardan bazılarının testi geçip geçmediği


