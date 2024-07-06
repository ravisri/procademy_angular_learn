import { Component, OnInit } from '@angular/core';
import { rejects } from 'assert';
import { resolve } from 'path';
import { AsyncSubject, BehaviorSubject, Observable, ReplaySubject, Subject } from 'rxjs';
import { ajax } from 'rxjs/ajax';

@Component({
  selector: 'subject-rxjs',
  standalone: true,
  imports: [],
  templateUrl: './subject.component.html',
  styleUrl: './subject.component.scss'
})
export class SubjectComponent implements OnInit{

  ngOnInit() {
    // Observable is unicost
    // let obs = new Observable((observer) => {
    //   observer.next(Math.random())
    // })

    // const subject = new Subject()
    // Behavior Subject
    // const subject = new BehaviorSubject<number>(100)

    // Replay Subject
    // const subject = new ReplaySubject(2, 1000)

    // subject.next(100)
    // subject.next(200)
    // subject.next(300)
    
      // // Subscriber 1
      // subject.subscribe((data) => {
      //   console.log('Subscriber 1 '+ data)
      // })
      // // Subscriber 2
      // subject.subscribe((data) => {
      //   console.log('Subscriber 2 '+data)
      // })

      // subject.next(2020)

      // // Subscriber 3
      // subject.subscribe((data) => {
      //   console.log('Subscriber 3 '+data)
      // })

      // subject.next(2023)


      // AJAX Call
      // const subjects = new Subject()
      // const data = ajax('https://randomuser.me/api/')

      // // Multi-cost
      // data.subscribe(subjects)

      // subjects.subscribe((res:any) => {
      //   console.log(res)
      // })
      // subjects.subscribe((res:any) => {
      //   console.log(res)
      // })
      // subjects.subscribe((res:any) => {
      //   console.log(res)
      // })


      // Async Subject
      // const asyncSubject = new AsyncSubject()

      // asyncSubject.next(100)
      // asyncSubject.next(200)
      // asyncSubject.next(300)
      // asyncSubject.complete()
      // asyncSubject.next(400)

      // asyncSubject.subscribe((data) => console.log('Subscriber 1: '+ data))

      let promise = new Promise((resolve, reject) => {
console.log('Promise is Called')
resolve(100)
resolve(200)
resolve(300)
      })

      promise.then((data) => {
        console.log(data)
      })

      let obs = new Observable((observer:any) => {
        console.log('Observable is Called')
        observer.next("subscribe 1 " + 100)
        observer.next("subscribe 2 " +200)
        observer.next("subscribe 3 " +300)
      })

      obs.subscribe((data) => {
        console.log(data)
      })

      
  }
}
