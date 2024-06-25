import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHighlights]',
  standalone: true
})
export class HighlightsDirective {

  constructor(private element:ElementRef, private renderer:Renderer2) { }


  @HostListener('mouseenter') onMouseEnter(){
this.renderer.addClass(this.element.nativeElement,'border-3')
  }

  @HostListener('mouseout') onMouseOut(){
    this.renderer.removeClass(this.element.nativeElement,'border-3')
  }

}
