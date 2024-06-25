import { Component, ElementRef, QueryList, ViewChild, ViewChildren } from '@angular/core';

@Component({
  selector: 'app-forms',
  standalone: true,
  imports: [],
  templateUrl: './forms.component.html',
  styleUrl: './forms.component.scss'
})
export class FormsComponent {
  fullname:string = ''
  // @ViewChild('inputEl') inputElement!:ElementRef;
@ViewChildren('inputEl') inputElement!:QueryList<ElementRef>

show(){
  let name= ''
  // console.log(this.inputElement.nativeElement)
  this.inputElement.forEach((el) => {
name += el.nativeElement.value + ' '
  })
  this.fullname = name.trim()
}
}
