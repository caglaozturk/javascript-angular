import { Pipe, PipeTransform } from '@angular/core';
import { Product } from 'src/app/features/products/models/product';

@Pipe({
  name: 'filterProduct'
})
export class FilterProductPipe implements PipeTransform {

  transform(value: Product[], filterText: string): Product[] {
    filterText = filterText?filterText.toLocaleLowerCase():""
    return filterText?value.filter((p:Product)=>p.name.toLocaleLowerCase().includes(filterText)):value;
  }

}