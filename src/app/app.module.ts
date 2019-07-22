import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { SearchBarComponent } from './todo-list/search-bar/search-bar.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { TodoDetailsComponent } from './todo-details/todo-details.component';
import {HttpClientModule} from '@angular/common/http';
import { NewTodoComponent } from './todo-list/new-todo/new-todo.component';

@NgModule({
  declarations: [
    AppComponent,
    TodoListComponent,
    SearchBarComponent,
    TodoDetailsComponent,
    NewTodoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
