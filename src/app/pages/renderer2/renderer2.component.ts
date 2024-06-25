import { Component } from '@angular/core';
import { SetBackgroundRenderer2 } from './renderer2.directive';

@Component({
  selector: 'app-renderer2',
  standalone: true,
  imports: [SetBackgroundRenderer2],
  templateUrl: './renderer2.component.html',
  styleUrl: './renderer2.component.scss'
})
export class Renderer2Component {

}
