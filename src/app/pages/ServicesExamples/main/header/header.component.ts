import { Component } from '@angular/core';
import { SubscribeService } from '../../subscribe.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  providers:[SubscribeService]
})
export class HeaderComponent {
  constructor(private subService:SubscribeService){}
  onSubscribe(){
    this.subService.onSubscribeClicked('Monthly')
  }
}
