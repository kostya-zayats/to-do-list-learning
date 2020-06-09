import { Component, OnInit } from '@angular/core';
import { ToDoService } from './../to-do.service';

@Component({
  selector: 'app-to-do-action-add',
  templateUrl: './to-do-action-add.component.html',
  styleUrls: ['./to-do-action-add.component.scss']
})
export class ToDoActionAddComponent implements OnInit {

  public name;

  constructor(public toDoService: ToDoService) { }

  ngOnInit(): void {
  }

  addItem(newToDo){
    this.toDoService.addToDoItem(newToDo);
  }

}
