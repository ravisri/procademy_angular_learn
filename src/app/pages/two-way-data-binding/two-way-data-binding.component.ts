import { Component, ViewChild } from '@angular/core';
import { SearchComponent } from '../search/search.component';
import { ProductListComponent } from '../product-list/product-list.component';
import { ProductDetailComponent } from '../product-list/product-detail/product-detail.component';


@Component({
  selector: 'app-two-way-data-binding',
  standalone: true,
  imports: [SearchComponent, ProductListComponent, ProductDetailComponent],
  templateUrl: './two-way-data-binding.component.html',
  styleUrl: './two-way-data-binding.component.scss'
})
export class TwoWayDataBindingComponent {

  searchText:string = ''

  @ViewChild('app-product-list') productListComponent!:ProductListComponent;
  

  setSearchText(value:string){
    this.searchText = value
  }

}
