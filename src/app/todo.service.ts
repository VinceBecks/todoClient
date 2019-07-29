import { Injectable } from '@angular/core';
import {Todo} from '../domain/Todo';
import { HttpClient} from '@angular/common/http';

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
    const todoObservable = this.client.get<Todo[]>(this.BASE_URL + '/todos');
    todoObservable.subscribe( value => {
      for (let todo of value) {
        this.allTodos.push(new Todo(todo.todoId, todo.title, todo.description, todo.state));
      }
    });
    return todoObservable;
  }

  getTodoWithId(id) {
    for (let todo of this.allTodos) {
      if (todo.todoId == id) {
        return todo;
      }
    }
  }
  createNewTodo(todo) {
    console.log('Request to create a new todo');
    return this.client.post<Todo>(this.BASE_URL + '/todos', todo);
  }

  updateTodo(todoId, todo) {
    return this.client.put<Todo>(this.BASE_URL + '/todos/' + todoId, todo);
  }
  deleteTodo(todo: Todo) {
    console.log('Request to delete todo with id ' + todo.todoId);
    return this.client.delete(this.BASE_URL + '/todos/' + todo.todoId);
  }
}
