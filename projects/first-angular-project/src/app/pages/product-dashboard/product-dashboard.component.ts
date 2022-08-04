import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/models/product';
import { ProductsService } from 'src/app/features/products/services/products/products.service';

@Component({
  selector: 'app-product-dashboard',
  templateUrl: './product-dashboard.component.html',
  styleUrls: ['./product-dashboard.component.css']
})
export class ProductDashboardComponent implements OnInit {
  productList! : Product[];

  constructor(private productService:ProductsService,private router:Router) { }

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts(){
    this.productService.getList().subscribe((response) =>{
      this.productList = response;
    })
  }

  deleteProduct(id:number){
    if(confirm("Are you sure want to delete?")){
      this.productService.delete(id).subscribe(()=>{
        setTimeout(() => {
          this.getProducts();
        }, 1000);
      })
    } 
  }

  selectedProductId(selectedProduct: Product):void{
    console.log(selectedProduct)
     this.router.navigateByUrl(`dashboard/product/${selectedProduct.id}`);
  }

}