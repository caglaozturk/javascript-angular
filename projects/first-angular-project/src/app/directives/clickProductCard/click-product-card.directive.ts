import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appClickProductCard]'
})
export class ClickProductCardDirective {

  constructor(private elementRef:ElementRef) { }

  @HostListener('click',) onClick() {
    this.elementRef.nativeElement.style.opacity = '0.7';
  }

  @HostListener('dblclick',) onDblClick() {
    this.elementRef.nativeElement.style.opacity = '1';
  }

}