import { Component, OnInit } from '@angular/core';
import {Todo} from '../../domain/Todo';
import {ActivatedRoute, Router} from '@angular/router';
import {TodoService} from '../todo.service';
import {FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-todo-details',
  templateUrl: './todo-details.component.html',
  styleUrls: ['./todo-details.component.css']
})
export class TodoDetailsComponent implements OnInit {
  private todo: Todo;
  private isEditing = false;
  private todoForm;

  constructor(private todoService: TodoService, private activatedRoute: ActivatedRoute, private router: Router, private formBuilder: FormBuilder) {
  }

  ngOnInit() {
    const id = this.activatedRoute.snapshot.paramMap.get('todoId');
    this.todo = this.todoService.getTodoWithId(id);

    this.todoForm = this.formBuilder.group({
      title: this.todo.title,
      description: this.todo.description,
      state: this.todo.state,
    });
  }
  editTodo() {
    this.isEditing = true;
  }
  saveTodo(formData) {
    console.log('Changed Todo: ', formData);
    const changedTodo = {
      title: formData.title,
      description: formData.description,
      state: formData.state
    };
    this.todoService.updateTodo(this.todo.todoId, changedTodo).toPromise().then(() => {
      this.router.navigate(['/todo-list']);
    });
  }
  deleteTodo() {
    console.log('Delete todo');
    this.todoService.deleteTodo(this.todo).toPromise().then(() => {
      this.router.navigate(['/todo-list']);
    });
  }
}
