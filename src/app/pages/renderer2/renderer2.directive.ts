import { Directive, ElementRef, Input, OnInit, Renderer2 } from "@angular/core";

@Directive({
    selector:'[setBackground]',
    standalone:true
})
export class SetBackgroundRenderer2 implements OnInit{

    // @Input('setBackground') backColor:string = 'green';
    // @Input() textColor:string = 'white'
    
    @Input('setBackground') changeTextAndBackColor!:{backColor:string, textColor:string}

constructor(private element:ElementRef, private renderer:Renderer2){

}

ngOnInit(): void {
    this.renderer.setStyle(this.element.nativeElement, 'backgroundColor',this.changeTextAndBackColor.backColor)
    this.renderer.setStyle(this.element.nativeElement, 'color',this.changeTextAndBackColor.textColor)
    // this.renderer.setAttribute(this.element.nativeElement, 'title','ravi')
}

}