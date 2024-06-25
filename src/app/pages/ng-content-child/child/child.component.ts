import { CommonModule } from '@angular/common';
import { Component, ContentChild, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-child',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './child.component.html',
  styleUrl: './child.component.scss'
})
export class ChildComponent {
  @ContentChild('para') paragraphEl!:ElementRef;

  onSytleParagraph(){
    
  }

  inputVal:string = '';
@Output()
  inputValChange:EventEmitter<string> = new EventEmitter<string>()
@ViewChild('searchInput') searchInputEl!:ElementRef;


  onInputValChange(){
    this.inputVal = this.searchInputEl.nativeElement.value;
    this.inputValChange.emit(this.inputVal)
  }


}
