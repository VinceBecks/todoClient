import { Injectable } from '@angular/core';
import { TODOS } from '../assets/todo-mocks';
import {Todo} from '../domain/Todo';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  allTodos = TODOS;

  constructor() { }

  loadTodos() {
    return this.allTodos;
  }
  getTodoWithId(id) {
    // todo: Macht es Sinn hier einen neuen Request an die Schnittstelle /todos/{id} zu senden?
    for (const todo of this.allTodos) {
      if (todo.todoId == id) {
        return todo;
      }
    }
    console.log('Found no todo with id ' + id);
  }
  updateTodo(todoId, todo) {
    console.log('Request to update todo with id ' + todoId);
    this.allTodos.forEach(todoIt => {
      if (todoIt.todoId == todoId) {
        console.log('Found toto');
        todoIt.title = todo.title;
        todoIt.description = todo.description;
        todoIt.state = todo.state;
      }
    });
    // todo: Macht es Sinn hier alle Todos nochmal neu zu laden?
  }
  deleteTodo(todo: Todo) {
    // todo: Request to delete the todo
  }
}
