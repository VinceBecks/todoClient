import { Injectable } from '@angular/core';
import { TODOS } from '../assets/todo-mocks';
import {Todo} from '../domain/Todo';
import { HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  allTodos: Todo[];
  private BASE_URL = 'http://localhost:8080/todo-service-1.0-SNAPSHOT/api';

  constructor(private client: HttpClient) { }

  loadTodos() {
    console.log('Request to load all todos');
    this.allTodos = [];
    this.client.get<Todo[]>(this.BASE_URL + '/todos').subscribe( value => {
      for (let todo of value) {
        this.allTodos.push(new Todo(todo.todoId, todo.title, todo.description, todo.state));
      }
    });
    return this.allTodos;
  }

  getTodoWithId(id) {
    for (let todo of this.allTodos) {
      if (todo.todoId == id) {
        return todo;
      }
    }
  }

  updateTodo(todoId, todo) {
    return this.client.put<Todo>(this.BASE_URL + '/todos/' + todoId, todo);
  }
  deleteTodo(todo: Todo) {
    console.log('Request to delete todo with id ' + todo.todoId);
    return this.client.delete(this.BASE_URL + '/todos/' + todo.todoId);

  }
}
