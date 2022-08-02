import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'kdv'  // Her pipe'ın kendine ait unique bir ismi vardır yani başka bir pipe oluşturursan adını kdv koyamazsın
})
export class KdvPipe implements PipeTransform {

  transform(value: number, kdvValue:number): number {
    // value: pipe'ı uyguladığımız veri
    // return yeni değiştirdiğimiz değer
    return value + ( value * kdvValue);
  }

}
