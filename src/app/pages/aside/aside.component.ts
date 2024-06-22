import { Component } from '@angular/core';
import {menu} from '../../aside-nav'
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-aside',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './aside.component.html',
  styleUrl: './aside.component.scss',
  host:{'class':'d-flex'}
})
export class AsideComponent {
menu:any =menu;
}
