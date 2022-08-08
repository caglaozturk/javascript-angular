import { Product } from "../../products/models/product";

export interface CartSummaryModel{
    product:Product;
    quantity:number;
}