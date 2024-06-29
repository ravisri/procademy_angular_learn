import { Directive, ElementRef, Renderer2, Input } from '@angular/core';

@Directive({
  selector: '[appStyle]',
  standalone: true
})
export class StyleDirective {

  constructor(private element:ElementRef, private renderer:Renderer2) { }
@Input('appStyle') set style(styles:Object){
  let style = Object.entries(styles)
for(let item of style){
  let[style, value] =item
this.renderer.setStyle(this.element.nativeElement, style, value)
}
}
}
