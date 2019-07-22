import { Component, OnInit } from '@angular/core';
import {TodoService} from '../todo.service';
import {Todo} from '../../domain/Todo';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  private todos: Todo[];
  private todosToShow: Todo[];

  constructor(private todoService: TodoService) { }

  ngOnInit() {
    this.todos = this.todoService.loadTodos();
    this.todosToShow = this.todos;
  }
  searchTodos(event) {
    this.todosToShow = [];
    this.todos.forEach(todo => {
      if (todo.title.toLowerCase().includes(event.toLowerCase())) {
        this.todosToShow.push(todo);
      }
    });
  }

}
