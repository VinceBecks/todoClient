import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormBuilder} from '@angular/forms';
import {TodoService} from '../../todo.service';

@Component({
  selector: 'app-new-todo',
  templateUrl: './new-todo.component.html',
  styleUrls: ['./new-todo.component.css']
})
export class NewTodoComponent implements OnInit {
  private newTodoForm;
  @Output() tweetCreatedRequest = new EventEmitter();

  constructor(private formBuilder: FormBuilder, private todoService: TodoService) {
    this.newTodoForm = this.formBuilder.group({
      title: '',
      description: ''
    });
  }

  ngOnInit() {
  }
  createTodo(formData) {
    console.log('Create new todo');
    let newTodo = {
      title: formData.title,
      description: formData.description,
    };
    this.todoService.createNewTodo(newTodo).subscribe(value => {
      console.log('New tweet created', value);
      this.tweetCreatedRequest.emit();
    });
  }
}
