import { Component } from '@angular/core';
import { SubscribeService } from '../../subscribe.service';

@Component({
  selector: 'app-right',
  standalone: true,
  imports: [],
  templateUrl: './right.component.html',
  styleUrl: './right.component.scss',
  providers:[SubscribeService]
})
export class RightComponent {
  constructor(private subscribe:SubscribeService){}
  onSubscribe(){
    this.subscribe.onSubscribeClicked('Annually')
  }
}
