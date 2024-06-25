import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appSampleDirective]',
  standalone: true
})
export class SampleDirectiveDirective {

  constructor() { }

  @HostBinding('value') inputValue:string = 'Hi there!'


@HostListener('focus') logMessage(){
  console.log('Input has been focused from sample directive')
}

}
