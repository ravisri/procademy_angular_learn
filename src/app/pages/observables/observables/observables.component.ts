import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { count } from 'console';
import { resolve } from 'path';
import { Observable, filter, from, fromEvent, map, of } from 'rxjs';

@Component({
  selector: 'app-observables',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './observables.component.html',
  styleUrl: './observables.component.scss'
})
export class ObservablesComponent implements AfterViewInit{
title = 'Angular Observables'

data:any[] = []


@ViewChild('createbtn') createBtn!:ElementRef

createBtnObs:any;

array1 = [1,2,3,4,5]
array2 = ['T',"U","R","V","I"]

// 1. Create an Observable

// observable   ---Event Emiter
// myObservable = new Observable((observer) =>{
//   // observer.next([1,2,3,4,5,6,7])
//   setTimeout(() => {observer.next(1)}, 1000 )
//   setTimeout(() => {observer.next(2)}, 2000 )
//   setTimeout(() => {observer.next(3)}, 3000 )
//   setTimeout(() => {observer.error(new Error('Something went wrong. Please try again later!'))}, 3000 )
//   setTimeout(() => {observer.next(4)}, 4000 )
//   setTimeout(() => {observer.next(5)}, 5000 )
//   setTimeout(() => {observer.complete()}, 3000 )
// })

// myObservable = of(this.array1, this.array2, 20, 41, true, 'Hello')

promiseData = new Promise((resolve, reject)=> {
  resolve([10,20,30,40,50])
} )

// myObservable = from(this.promiseData)
myObservable = from([2,4,6,8,10,12]).pipe(map((val) => {
  return val * 5;
  }), filter((val) => {
    return val % 6 === 0;
  }))

// transformedObs = this.myObservable.pipe(map((val) => {
// return val * 5;
// }), filter((val) => {
//   return val % 4 === 0;
// }))


// fitteredObs = this.transformedObs.pipe(filter((val) => {
//   return val % 4 === 0;
// }))

getAsyncData(){
  // observer -- Event Lister
  // next, error, complate are optional call back functions
// this.myObservable.subscribe((res:any) =>{
// //  this.data = res;
// this.data.push(res)
// }, (err) => {
//   alert(err.message)
// }, () => {
//   alert('All the data is streamed!')
// })


this.myObservable.subscribe({
  next: (res:any) => {
    this.data.push(res)
    console.log(res)
  },
  error(err){
    alert(err.message)
  },
  complete(){
    alert('All the data is streamed!')
  }
})
}

// Event Hander



// buttonClick(){
//   let count = 0;
//   this.createBtnObs = fromEvent(this.createBtn.nativeElement, 'click').subscribe((res:any) =>{
//     console.log(res)
//     this.showItem(++count)
//   })
// }

// showItem(val:number){
//   let li = document.createElement('li')
//   li.innerText = 'Item ' + val
//   li.className = 'list-group-item'
//   document.getElementById('container')?.appendChild(li)
// }


ngAfterViewInit(): void {
  // this.buttonClick()
}
}
