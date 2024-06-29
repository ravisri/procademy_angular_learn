import { Component, ViewEncapsulation } from '@angular/core';
import { SetBackgroundRenderer2 } from './renderer2.directive';
import { CommonModule } from '@angular/common';
import { ClassDirective } from '../../CustomDirective/class.directive';
import { StyleDirective } from '../../CustomDirective/style.directive';
import { IfDirective } from '../../CustomDirective/if.directive';

@Component({
  selector: 'app-renderer2',
  standalone: true,
  imports: [SetBackgroundRenderer2, CommonModule, ClassDirective, StyleDirective, IfDirective],
  templateUrl: './renderer2.component.html',
  styleUrl: './renderer2.component.scss',
  animations:[],
  // encapsulation:ViewEncapsulation.None
})
export class Renderer2Component {
active:boolean =true

display:boolean = false

tab:string = 'home'

onHomeClick(){
  this.tab = 'home'
}
onProfileClick(){
  this.tab = 'profile'
}
onContactClick(){
  this.tab = 'contact'
}

onDisabledClick(){
this.tab = 'disabled'
}


show(){
  this.display = !this.display
}
}
