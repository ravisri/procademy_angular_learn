import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './data-binding.component.html',
  styleUrl: './data-binding.component.scss'
})
export class DataBindingComponent {
// title:string = 'edumy'
// message:string = 'Online Learning'
// display:boolean =true

// onClick(){
//   this.display = !this.display;
// }
addToCart:number = 0;

// onNameChange(e:any){
//   this.name = e.target.value
// }
product:any = [
  {name:'iPhone', price:999, color:'red', discount:8.5, inStock:5, pImg:'./ey-ai.jpg'},
  {name:'redmi', price:455, color:'gray', discount:4.5, inStock:2, pImg:'./ey-ai.jpg'},
  {name:'oppo', price:425, color:'white', discount:3.65, inStock:10, pImg:'./ey-ai.jpg'}
]
decrement(){
    this.addToCart--

}
increment(){
  // if(this.addToCart > this.product.inStock){
  //   this.addToCart++;
  // }
  
}



}
