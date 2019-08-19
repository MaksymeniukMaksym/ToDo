import { TodoService } from '../services/todo.service';
import { Component, OnInit } from '@angular/core';
import {Todo} from "../todo";

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {

  tasks:Todo[] = [];

  constructor(private todoService: TodoService) {
   }

  ngOnInit() {
    this.todoService.source.subscribe((value:Todo[]) =>{
      this.tasks = value;   
    });
  }

}
