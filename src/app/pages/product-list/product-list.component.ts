import { Component, Input, OnInit } from '@angular/core';
import {ProductsService} from '../../services/products.service'
import { ProductComponent } from './product/product.component';
import { FilterComponent } from './filter/filter.component';
import { Product } from './Models/product';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [ProductComponent, FilterComponent],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.scss'
})
export class ProductListComponent implements OnInit{
prodArr:any[] = []
totalProductCount:any;
bakery:any;
oil:any;
fruits:any;
@Input()
searchText:string = ''

selectedProduct:any;

selectedFilterRadio:string = 'all';

constructor(private productSrv:ProductsService){}

ngOnInit(): void {
  this.loadAllProducts()
  
}

loadAllProducts(){
  this.productSrv.getProduct().subscribe((res:any) => {
    this.prodArr = res.data;
    this.totalProductCount = this.prodArr.length
    this.bakery = this.prodArr.filter(p => p.categoryName === 'Bakery, Cakes & Dairy').length
    this.oil = this.prodArr.filter(p => p.categoryName === 'Oil & Masala').length
    this.fruits = this.prodArr.filter(p => p.categoryName === 'Fruits & Vegetables').length
  })
}

onFilterChange(value:string){
this.selectedFilterRadio =value
}



}
