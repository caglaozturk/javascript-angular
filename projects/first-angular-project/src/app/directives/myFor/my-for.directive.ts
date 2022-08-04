import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appMyFor]'
})
export class MyForDirective {
  @Input() appMyForOf!: Array<any>;

  constructor(
    private container: ViewContainerRef,
    private template: TemplateRef<any>
  ) {}

  ngOnChanges() {
    this.container.clear();

    for (const input of this.appMyForOf) {
      this.container.createEmbeddedView(this.template, {
        $implicit: input,
        index: this.appMyForOf.indexOf(input)
      });
    }
  }
}
