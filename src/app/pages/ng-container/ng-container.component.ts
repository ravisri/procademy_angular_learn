import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-ng-container',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ng-container.component.html',
  styleUrl: './ng-container.component.scss'
})
export class NgContainerComponent {
toggle:boolean =true;

onToggle(){
  this.toggle = !this.toggle
}
}
