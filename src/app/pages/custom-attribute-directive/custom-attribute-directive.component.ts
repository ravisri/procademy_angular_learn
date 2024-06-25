import { Component } from '@angular/core';
import { SetBackground } from './SetBackground.directive';

@Component({
  selector: 'app-custom-attribute-directive',
  standalone: true,
  imports: [SetBackground],
  templateUrl: './custom-attribute-directive.component.html',
  styleUrl: './custom-attribute-directive.component.scss',

})
export class CustomAttributeDirectiveComponent {

}
