import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './search.component.html',
  styleUrl: './search.component.scss'
})
export class SearchComponent {
  searchText:string = '';
@Output()
  searchTextChanged = new EventEmitter()

  updateSearchText(inputEl:HTMLInputElement){
this.searchText = inputEl.value;
this.searchTextChanged.emit(this.searchText)
  }

}
