import { CommonModule } from '@angular/common';
import { Component, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { EventEmitter } from 'stream';

@Component({
  selector: 'app-filter',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './filter.component.html',
  styleUrl: './filter.component.scss'
})
export class FilterComponent {
@Input()
all:number = 0
@Input()
bakery:number = 0
@Input()
oil:number = 0
@Input()
fruits:number = 0;

// selectedRadioButton:string = 'all'
// @Output()
// selectedFilterRadioButtonChanged:EventEmitter<any> = new EventEmitter()

changeRadio(){
  // this.selectedFilterRadioButtonChanged.emit(this.selectedRadioButton)
}

}

