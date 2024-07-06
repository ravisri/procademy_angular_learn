import { Component } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-unsubscribe',
  standalone: true,
  imports: [],
  templateUrl: './unsubscribe.component.html',
  styleUrl: './unsubscribe.component.scss'
})
export class UnsubscribeComponent {
title= 'Unsubscribeing to an Observable'

counter = interval(1000);

data:number[] = []

subscriber1:any;

onSubscribe(){
this.subscriber1 = this.counter.subscribe((val) => {
this.data.push(val)
})
}
unSubscribe(){
this.subscriber1.unsubscribe()
}
}
