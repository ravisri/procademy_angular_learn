import { Component} from '@angular/core';
import { ChildComponent } from './child/child.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-ng-content-child',
  standalone: true,
  imports: [ChildComponent, CommonModule],
  templateUrl: './ng-content-child.component.html',
  styleUrl: './ng-content-child.component.scss'
})
export class NgContentChildComponent {
inputVal:string = ''

onInputValChange(val:any){
  this.inputVal = val
  
  
}
}
