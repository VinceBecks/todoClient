import { Injectable } from '@angular/core';
import { TODOS } from '../assets/todo-mocks';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  allTodos = TODOS;

  constructor() { }

  loadTodos() {
    return this.allTodos;
  }
}
