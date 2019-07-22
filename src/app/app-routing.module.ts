import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {TodoListComponent} from './todo-list/todo-list.component';
import {TodoDetailsComponent} from './todo-details/todo-details.component';
import {Todo} from '../domain/Todo';


const routes: Routes = [
  {path: '', redirectTo: 'todo-list', pathMatch: 'full'},
  {path: 'todo-list', component: TodoListComponent},
  {path: 'todos/:todoId', component: TodoDetailsComponent, data: Todo}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
