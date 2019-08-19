import { Component, OnInit } from "@angular/core";
import { TodoService } from "../services/todo.service";

@Component({
  selector: "app-input-todo",
  templateUrl: "./input-todo.component.html",
  styleUrls: ["./input-todo.component.scss"]
})
export class InputTodoComponent implements OnInit {
  isInputValid = false;

  description = "";

  constructor(private todoService: TodoService) {}

  validateInput(event) {
    this.isInputValid = event.target.value !== "" ? true : false;
  }

  createTodoOnEnter(event) {
    if (event.which === 13) {
      this.createTodo();
      this.description = "";
    }
  }

  createTodo() {
    if (this.description.trim() !== "") {
      this.todoService.create(this.description);
      this.description = "";
    }
  }

  ngOnInit() {}
}
