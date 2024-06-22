import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AsideComponent } from '../aside/aside.component';

@Component({
  selector: 'app-container',
  standalone: true,
  imports: [RouterOutlet, AsideComponent],
  templateUrl: './container.component.html',
  styleUrl: './container.component.scss'
})
export class ContainerComponent {

}
