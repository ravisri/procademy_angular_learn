import { Component, Input } from '@angular/core';
import { ProductListComponent } from '../product-list.component';
import { AppHoverDirective } from '../../../CustomDirective/app-hover.directive';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [AppHoverDirective],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.scss'
})
export class ProductDetailComponent {
@Input() productListComp!:ProductListComponent;
}
