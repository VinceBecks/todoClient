import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {TodoService} from '../../todo.service';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {
  searchString = '';
  @Output() searchRequest = new EventEmitter<string>();

  constructor() {
  }

  ngOnInit() {
  }

  searchForTodos() {
    this.searchRequest.emit(this.searchString);
  }

}
