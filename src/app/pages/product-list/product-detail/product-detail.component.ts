import { Component, Input, OnInit } from '@angular/core';
import { ProductListComponent } from '../product-list.component';
import { AppHoverDirective } from '../../../CustomDirective/app-hover.directive';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [AppHoverDirective],
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
