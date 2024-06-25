import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NgContentComponent } from '../../ng-content/ng-content.component';

@Component({
  selector: 'app-ng-template',
  standalone: true,
  imports: [CommonModule, NgContentComponent],
  templateUrl: './ng-template.component.html',
  styleUrl: './ng-template.component.scss'
})
export class NgTemplateComponent {

}
