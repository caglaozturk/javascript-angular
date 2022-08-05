import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Category } from 'src/app/features/categories/models/category';
import { Product } from 'src/app/features/products/models/product';
import { Supplier } from 'src/app/features/products/models/supplier';
import { CategoryService } from 'src/app/features/categories/services/category/category.service';
import { ProductsService } from 'src/app/features/products/services/products/products.service';
import { SuppliersService } from 'src/app/features/products/services/suppliers/suppliers.service';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {

  productForm! : FormGroup;
  product!: Product;  
  categoryList!:Category[];
  supplierList!:Supplier[];

  constructor(private formBuilder:FormBuilder,private activatedRoute:ActivatedRoute,
    private productService:ProductsService,private router:Router,private toastr: ToastrService,
    private supplierService:SuppliersService,private categoriesService:CategoryService) { }

  ngOnInit(): void {
    this.getProductIdFromRoute();
    this.getCategoryList();
    this.getSupplierList();
  }

  createProductForm(): void{
    this.productForm = this.formBuilder.group({
      name: [this.product?.name  || '',Validators.required],
      supplierId: [this.product?.supplierId || '',Validators.required],
      categoryId: [this.product?.categoryId || '',Validators.required],
      quantityPerUnit: [this.product?.quantityPerUnit || '',Validators.required],
      unitPrice: [this.product?.unitPrice || '',Validators.required],
      unitsInStock: [this.product?.unitsInStock  || '',Validators.required],
      unitsOnOrder: [this.product?.unitsOnOrder || '',Validators.required],
      reorderLevel: [this.product?.reorderLevel  || '',Validators.required],
      discontinued: [this.product?.discontinued  || '',Validators.required]
    })   
  }

  getProductIdFromRoute(){
    this.activatedRoute.params.subscribe((params) => {
      console.log(params['id'])
      if (params['id']) this.getProductById(params['id']);
      else{
        this.createProductForm();
      };
    });
  }

  getSupplierList(){
    this.supplierService.getList().subscribe(data=>{
      this.supplierList =data;
  });
  }

  getCategoryList(){
    this.categoriesService.getList().subscribe(data=>{
      this.categoryList =data;
  });
  }

  getProductById(id:number) {
    this.productService.getById(id).subscribe((data) => {
      console.log(data)
      this.product = data;
      this.createProductForm();
    });
  }


  save(){
    if(this.product) this.update();
    else{
      this.add();
    }
  }

  update() {
    if (this.productForm.invalid) {
      this.toastr.warning("Please fill the required areas!!!","Update")
      return;
    }
    const product:Product = Object.assign({id:this.product.id}, this.productForm.value); 
      this.productService.update(product).subscribe(() => {
        setTimeout(() => {
          this.router.navigateByUrl("/dashboard/products");
          this.toastr.success("Customer succesfully updated!","Update")
        }, 1000);
      });
  }

  add(){
    if (this.productForm.invalid) {
      this.toastr.warning("Please fill the required areas!!!","Add")
      return;
    }

    const product:Product = {
      ...this.productForm.value,
    }

    this.productService.add(product).subscribe(() =>{
      setTimeout(() => {
        this.toastr.success("Customer succesfully add!","Add")
        this.router.navigateByUrl("/dashboard/products");
      }, 1000);
    })
  }
}