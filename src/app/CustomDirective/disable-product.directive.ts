import { Directive, ElementRef, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[disableProduct]',
  standalone: true
})
export class DisableProductDirective {

  constructor(private element:ElementRef, private renderer:Renderer2) { }

  @Input('disableProduct') set disableProduct(disable:boolean){
    if(disable){
      this.renderer.addClass(this.element.nativeElement, 'opacity-50')
    }
  };

}
