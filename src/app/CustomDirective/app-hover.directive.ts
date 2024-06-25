import { Directive, ElementRef, HostBinding, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHover]',
  standalone: true
})
export class AppHoverDirective {

  constructor(private element:ElementRef, private renderer:Renderer2) { }

  @HostBinding('style.backgroundColor') backgroundColor:string = 'green';
  @HostBinding('style.border') border:string = 'none'
  @HostBinding('style.color') textColor:string = 'white'

  @HostListener('mouseover') onMouseEnter(){
this.backgroundColor = 'red'
this.textColor ='yellow'
this.border = 'solid 2px pink'
  }

  @HostListener('mouseout') onMouseOut(){
    this.backgroundColor = 'green'
this.textColor ='white'
this.border = 'none'
  }

}
