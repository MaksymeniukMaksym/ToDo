import { TimeTrackService } from '../time-track.service';
import { TodoService } from '../todo.service';
import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material';
import { Todo } from '../../../models/todo';
import { FormControl } from '@angular/forms';


@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent  {
  
  serializedDate = new FormControl(Date());
  serializedTime = new FormControl(Date());

  constructor(
    public timeTrackService: TimeTrackService,
    private todoService: TodoService,
    @Inject(MAT_DIALOG_DATA) public data: Todo
  ) { }

 
  saveChages(newName){
    const Deadline = new Date(+this.serializedDate.value + this.timeTrackService.convertHours(this.serializedTime.value));
    this.data.deadLine = Deadline;
    this.data.title = newName.value;
    this.todoService.update(this.data.id,this.data)
    this.todoService.dialog.closeAll()   
  }
}
