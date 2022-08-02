import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appOnSale]'
})
export class SaleDirective {
  @Input() appOnSale = 'red';
  @Input() onSaleColor:string = 'purple';
  
  constructor(private elementRef:ElementRef) { 
    this.changeBackgroundColor('green');
  }

  @HostListener('mouseenter') onMouseEnter() {
    this.changeBackgroundColor(this.onSaleColor);
    //this.changeBackgroundColor(this.appOnSale);
  }

  @HostListener('mouseleave') onMouseLeave(){
    this.changeBackgroundColor('green');
  }

  changeBackgroundColor(color: string) {
    this.elementRef.nativeElement.style.backgroundColor = color;
  }
}
