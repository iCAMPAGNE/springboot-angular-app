import {Directive, inject, Input, TemplateRef, ViewContainerRef} from '@angular/core';

@Directive({
    selector: '[appStructuralDirective]'
})
export class StructuralDirective {
  private templateRef: TemplateRef<any> = inject(TemplateRef);
  private viewContainer: ViewContainerRef = inject(ViewContainerRef);

  @Input() set appStructuralDirective(condition: boolean) {
    if (!condition) {
      this.viewContainer.createEmbeddedView(this.templateRef);
    } else {
      this.viewContainer.clear();
    }

  }
}
