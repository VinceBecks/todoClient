import { Component, OnInit } from '@angular/core';
import {TodoService} from '../todo.service';
import {Todo} from '../../domain/Todo';
import {Router} from '@angular/router';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  private todos: Todo[];
  private todosToShow: Todo[];
  private todoType: string;


  constructor(private todoService: TodoService, private router: Router) { }

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
  loadTodosToShow() {
    console.log('Load todos to show', this.todoType);
    this.todosToShow = [];
    if (this.todoType === 'allTodos') {
      this.todosToShow = this.todos;
    } else if (this.todoType === 'openTodos') {
      this.todos.forEach(todo => {
        console.log(todo);
        if (todo.state === 'OPEN') {
          this.todosToShow.push(todo);
        }
      });
    } else if (this.todoType === 'inProgressTodos') {
      this.todos.forEach(todo => {
        if (todo.state === 'IN_PROGRESS') {
          this.todosToShow.push(todo);
        }
      });
    } else if (this.todoType === 'doneTodos') {
      this.todos.forEach(todo => {
        if (todo.state === 'DONE') {
          this.todosToShow.push(todo);
        }
      });
    } else {}
  }
  setTodoType(todoType) {
    this.todoType = todoType;
    this.loadTodosToShow();
  }
}
