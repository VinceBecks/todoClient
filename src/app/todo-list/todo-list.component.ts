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
  private statusToShow: string;
  private isNewTodoFormVisible = false;

  constructor(private todoService: TodoService) { }

  ngOnInit() {
    this.todos = [];
    this.statusToShow = 'openTodos';
    this.todoService.loadTodos().subscribe( value => {
      value.forEach(todo => this.todos.push(new Todo(todo.todoId, todo.title, todo.description, todo.state)));
      this.loadTodosToShow();
    });
  }
  searchTodos(searchString) {
    this.loadTodosToShow();
    this.todosToShow = this.todosToShow.filter(todo => todo.title.toLowerCase().includes(searchString.toLowerCase()));
  }
  tweetCreatedRequest() {
    this.toggleNewTodoForm();
    this.ngOnInit();
  }
  loadTodosToShow() {
    console.log('Load todos to show', this.statusToShow);
    this.todosToShow = [];
    switch (this.statusToShow) {
      case 'allTodos':
        this.todosToShow = this.todos;
        break;
      case 'openTodos':
        this.todos.forEach(todo => {
          if (todo.state === 'OPEN') {
            this.todosToShow.push(todo);
          }
        });
        break;
      case 'inProgressTodos':
        this.todos.forEach(todo => {
          if (todo.state === 'IN_PROGRESS') {
            this.todosToShow.push(todo);
          }
        });
        break;
      case 'doneTodos':
        this.todos.forEach(todo => {
          if (todo.state === 'DONE') {
            this.todosToShow.push(todo);
          }
        });
        break;
      default:
        this.todosToShow = [];
    }
  }
  setStateToShow(todoType) {
    this.statusToShow = todoType;
    this.loadTodosToShow();
  }
  toggleNewTodoForm() {
    this.isNewTodoFormVisible = !this.isNewTodoFormVisible;
  }
}
