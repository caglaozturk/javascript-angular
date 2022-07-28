import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { ProductsService } from 'src/app/services/products/products.service';

@Component({
  selector: 'app-product-card-list',
  templateUrl: './product-card-list.component.html',
  styleUrls: ['./product-card-list.component.css']
})
export class ProductCardListComponent implements OnInit {
  productList!:Product[];
  cartItems:any[]=[];
  loading:boolean = false;
  //httpClient: HttpClient

  constructor(private httpClient: HttpClient, private productService:ProductsService) { 
    // Dependency Injection ile Angular otomatik olarak inject eder.
    // this.httpClient = httpClient
    // this.productList.push(new ProductClass())
   }

  ngOnInit(): void {
    // this.fillProductDatas();
    setTimeout(() => {      
      this.getProducts();
    }, 2000);
  }

  getProducts(){
    this.productService.getList().subscribe((data) => {
      this.productList = data
      this.loading = true;
    })
    // subscribe yapmalıyım çünkü gelen cevabı beklemeliyim asenkron çalıştığı için
    // this.httpClient.get<Product[]>("http://localhost:3000/products").subscribe(response => {
    //   console.log(response)
    //   this.productList = response;
    // })
  }

  // fillProductDatas(){
  //   this.productList = [{
  //     "id": 1,
  //     "companyName": "ALFREDS FUTTERKISTE",
  //     "contactName": "Maria Anders",
  //     "contactTitle": "Sales Representative",
  //     "street": "Obere Str. 57",
  //     "city": "Berlin",
  //     "region": "NULL",
  //     "postalCode": 12209,
  //     "country": "Germany",
  //     "phone": "030-0074321",
  //     "customerKey": "ALFKI"
  //   },
  //   {
  //     "id": 2,
  //     "companyName": "ANA TRUJILLO EMPAREDADOS Y HELADOS",
  //     "contactName": "Ana Trujillo",
  //     "contactTitle": "Owner",
  //     "street": "Avda. de la Constitución 2222",
  //     "city": "México D.F.",
  //     "region": "NULL",
  //     "postalCode": 5021,
  //     "country": "Mexico",
  //     "phone": "(5) 555-4729",
  //     "customerKey": "ANATR"
  //   },
  //   {
  //     "id": 3,
  //     "companyName": "ANTONIO MORENO TAQUERÍA",
  //     "contactName": "Antonio Moreno",
  //     "contactTitle": "Owner",
  //     "street": "Mataderos  2312",
  //     "city": "México D.F.",
  //     "region": "NULL",
  //     "postalCode": 5023,
  //     "country": "Mexico",
  //     "phone": "(5) 555-3932",
  //     "customerKey": "ANTON"
  //   },
  //   {
  //     "id": 4,
  //     "companyName": "AROUND THE HORN",
  //     "contactName": "Thomas Hardy",
  //     "contactTitle": "Sales Representative",
  //     "street": "120 Hanover Sq.",
  //     "city": "London",
  //     "region": "NULL",
  //     "postalCode": "WA1 1DP",
  //     "country": "UK",
  //     "phone": "(171) 555-7788",
  //     "customerKey": "AROUT"
  //   },
  //   {
  //     "id": 5,
  //     "companyName": "BERGLUNDS SNABBKÖP",
  //     "contactName": "Christina Berglund",
  //     "contactTitle": "Order Administrator",
  //     "street": "Berguvsvägen  8",
  //     "city": "Luleå",
  //     "region": "NULL",
  //     "postalCode": "S-958 22",
  //     "country": "Sweden",
  //     "phone": "0921-12 34 65",
  //     "customerKey": "BERGS"
  //   }]
  // }

  addToCartEvent(product:Product){
    let itemToFind = this.cartItems.find(cart=>cart==product.name)
    if(!itemToFind){
      this.cartItems.push(product.name)
    }
    console.log(this.cartItems)
    console.log("product list fonksiyonu: ",product.name)
  }
}
