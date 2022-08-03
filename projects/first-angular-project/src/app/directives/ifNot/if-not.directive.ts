import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[ngIfNot]'
})
export class IfNotDirective {
  @Input("ngIfNotElse") elseTemplateRef!:TemplateRef<any>;

  private hasView: boolean=false;

  constructor(private viewContainerRef:ViewContainerRef, //Directve'i uyguladığımız parent element
    private templateRef:TemplateRef<any> //Direcetive'ı uyguladığımız elemtin içindeki child elementler
    ) { }

  @Input() set ngIfNot(condition: boolean) {
    /**
     * *ngIfNot="customerList.length===0"
     * * deyipte atama işlemi yaptığımız zaman directive'in içindeki set bloğu çalışır
     */
    if(condition === false && !this.hasView) {
      this.viewContainerRef.clear();
      this.viewContainerRef.createEmbeddedView(this.templateRef);
      this.hasView = true;
    } else if(condition === true && this.hasView) {
      this.viewContainerRef.clear();
      this.viewContainerRef.createEmbeddedView(this.elseTemplateRef);
      this.hasView = false;
    }
  }
}
