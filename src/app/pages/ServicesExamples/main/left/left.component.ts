import { Component } from '@angular/core';
import { SubscribeService } from '../../subscribe.service';

@Component({
  selector: 'app-left',
  standalone: true,
  imports: [],
  templateUrl: './left.component.html',
  styleUrl: './left.component.scss',
  providers:[SubscribeService]
})
export class LeftComponent {
  constructor(private subscribe:SubscribeService){}
  onSubscribe(){
    this.subscribe.onSubscribeClicked('Quaterly')
  }
}
