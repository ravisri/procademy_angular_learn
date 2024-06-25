import { Component, ElementRef, ViewChild, input } from '@angular/core';
import { ChildComponentComponent } from './child-component/child-component.component';
import { SampleDirectiveDirective } from '../../CustomDirective/sample-directive.directive';

@Component({
  selector: 'app-life-cycle-hooks',
  standalone: true,
  imports: [ChildComponentComponent, SampleDirectiveDirective],
  templateUrl: './life-cycle-hooks.component.html',
  styleUrl: './life-cycle-hooks.component.scss'
})
export class LifeCycleHooksComponent {
constructor(){
  console.log('Life Cycle Hooks Component will called')
}
// message:string = ''
message:string[] = ['Hello']


textValue:string = 'Hello World'

// @ViewChild('inputEl') inputElement!:ElementRef;

onBtnClick(inputEl:HTMLInputElement){
  this.message.push(inputEl.value)
  // this.message = this.inputElement.nativeElement.value;
}

// logValue(){
//   console.log('Input has been focus')
// }
}
