import { Component, Input } from '@angular/core';
import { Product } from '../Models/product';
import { HighlightsDirective } from '../../../CustomDirective/highlights.directive';
import { DisableProductDirective } from '../../../CustomDirective/disable-product.directive';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [HighlightsDirective, DisableProductDirective],
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss'
})
export class ProductComponent{
  @Input()
product:any = Product;
// {productId: number,
//   productSku: string,
//   productName: string,
//   productPrice: number,
//   productShortName: string,
//   productDescription:string,
//   createdDate: string,
//   deliveryTimeSpan: string,
//   categoryId: number,
//   productImageUrl: string,
//   categoryName: string}
}


