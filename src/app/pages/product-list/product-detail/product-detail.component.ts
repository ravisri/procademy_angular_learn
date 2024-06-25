import { Component, Input, OnInit } from '@angular/core';
import { ProductListComponent } from '../product-list.component';
import { Product } from '../Models/product';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.scss'
})
export class ProductDetailComponent implements OnInit{

  @Input() productListComp!:ProductListComponent


product:any;

ngOnInit(): void {
  this.product = this.productListComp.selectedProduct;
}

}
