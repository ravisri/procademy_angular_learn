import { Component, Input } from '@angular/core';
import { ProductListComponent } from '../product-list.component';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.scss'
})
export class ProductDetailComponent {
@Input() productListComp!:ProductListComponent;
}
