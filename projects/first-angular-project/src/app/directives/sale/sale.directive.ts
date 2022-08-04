import { Directive, ElementRef, HostListener, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appOnSale]'
})
export class SaleDirective {
  @Input() appOnSale = 'red';
  @Input() onSaleColor:string = 'purple';
  @Input() onSaleText:string = 'On Sale';
  @Input() isOnSale:boolean = true;
  
  //Attribute Directive : Görünüm veya diğer özelliklerini değiştirebiliriz * olmadan çağırabiliriz
  constructor(private elementRef:ElementRef, private renderer:Renderer2) { 
    console.log(this.onSaleText)   
  }

  ngOnInit() {
    if(!this.isOnSale) return;
    this.changeBackgroundColor('green'); 
    this.addSaleText();
    // this.elementRef.nativeElement.innerHTML += this.onSaleText;
    console.log(this.onSaleText)   
  }

  @HostListener('mouseenter') onMouseEnter() {
    if(!this.isOnSale) return;
    this.changeBackgroundColor(this.onSaleColor);
    //this.changeBackgroundColor(this.appOnSale);
  }

  @HostListener('mouseleave') onMouseLeave(){
    if(!this.isOnSale) return;
    this.changeBackgroundColor('green');
  }

  changeBackgroundColor(color: string) {
    this.elementRef.nativeElement.style.backgroundColor = color;
  }

  addSaleText() {
    const saleTextElement:HTMLElement = this.renderer.createElement('span');
    saleTextElement.innerText = this.onSaleText;
    // saleTextElement = <span>İndirim!!!</span>;

    this.renderer.appendChild(this.elementRef.nativeElement, saleTextElement)
  }
}
