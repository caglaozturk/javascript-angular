import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  productList!:any[]; // Buna başlangıç değeri atamadım ama farkındayım kullanırken değer atayacağım demek

  constructor() { }

  ngOnInit(): void {
    this.fillProductData();
  }

  fillProductData(){
    this.productList = [{
      "id": 1,
      "companyName": "ALFREDS FUTTERKISTE",
      "contactName": "Maria Anders",
      "contactTitle": "Sales Representative",
      "street": "Obere Str. 57",
      "city": "Berlin",
      "region": "NULL",
      "postalCode": 12209,
      "country": "Germany",
      "phone": "030-0074321",
      "customerKey": "ALFKI"
    },
    {
      "id": 2,
      "companyName": "ANA TRUJILLO EMPAREDADOS Y HELADOS",
      "contactName": "Ana Trujillo",
      "contactTitle": "Owner",
      "street": "Avda. de la Constitución 2222",
      "city": "México D.F.",
      "region": "NULL",
      "postalCode": 5021,
      "country": "Mexico",
      "phone": "(5) 555-4729",
      "customerKey": "ANATR"
    },
    {
      "id": 3,
      "companyName": "ANTONIO MORENO TAQUERÍA",
      "contactName": "Antonio Moreno",
      "contactTitle": "Owner",
      "street": "Mataderos  2312",
      "city": "México D.F.",
      "region": "NULL",
      "postalCode": 5023,
      "country": "Mexico",
      "phone": "(5) 555-3932",
      "customerKey": "ANTON"
    },
    {
      "id": 4,
      "companyName": "AROUND THE HORN",
      "contactName": "Thomas Hardy",
      "contactTitle": "Sales Representative",
      "street": "120 Hanover Sq.",
      "city": "London",
      "region": "NULL",
      "postalCode": "WA1 1DP",
      "country": "UK",
      "phone": "(171) 555-7788",
      "customerKey": "AROUT"
    },
    {
      "id": 5,
      "companyName": "BERGLUNDS SNABBKÖP",
      "contactName": "Christina Berglund",
      "contactTitle": "Order Administrator",
      "street": "Berguvsvägen  8",
      "city": "Luleå",
      "region": "NULL",
      "postalCode": "S-958 22",
      "country": "Sweden",
      "phone": "0921-12 34 65",
      "customerKey": "BERGS"
    }]
  }
}
