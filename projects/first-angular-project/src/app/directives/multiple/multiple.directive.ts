import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appMultiple]'
})
export class MultipleDirective {
  @Input() appMultipleOf!: Array<any>;

  constructor(
    private container: ViewContainerRef,
    private template: TemplateRef<any>
  ) {}

  @Input() set appMultiple(count : number ){
    this.container.clear();
    
    for (let index = 0; index < count; index++) {      
      this.container.createEmbeddedView(this.template)
    }
  }

  // ngOnChanges() {
  //   this.container.clear();

  //   for (const input of this.appMultipleOf) {
  //     this.container.createEmbeddedView(this.template, {
  //       $implicit: input,
  //       index: this.appMultipleOf.indexOf(input)
  //     });
  //   }
  // }
}
