import { CommonModule } from '@angular/common';
import { AfterContentChecked, AfterContentInit, Component, ContentChild, DoCheck, ElementRef, Input, OnChanges, OnInit, SimpleChanges, ViewChild, contentChild } from '@angular/core';

@Component({
  selector: 'app-child-component',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './child-component.component.html',
  styleUrl: './child-component.component.scss'
})
export class ChildComponentComponent implements OnChanges, OnInit, DoCheck, AfterContentInit, AfterContentChecked{
  title:string = 'Child Component'

  @Input() message:string[] | undefined;

  @ViewChild('para') tempPara!:ElementRef;

  @ContentChild('temp') paraContent!:ElementRef;

constructor(){
  // console.log('child component constructor will called')
  // console.log(this.title)
  // console.log(this.message)
}


ngOnChanges(changes: SimpleChanges): void {
  // console.log('ngOnChanges Hook called!')
  // console.log(this.message)
  // console.log(changes)
}

ngOnInit(): void {
  // console.log('ngOnInit Hook called!')
  // console.log(this.tempPara?.nativeElement.value)
}

ngDoCheck(): void {
  console.log('ngDoCheck Hook called!')
  // console.log('In ngDoCheck', this.paraContent)
}

ngAfterContentInit(): void {
  console.log('ngAfterContentInit Hook called!')
  // console.log('In ngAfterContentInit', this.paraContent?.nativeElement.value)
}

ngAfterContentChecked(): void {
  console.log('ngAfterContentChecked Hook called!')
}



}
