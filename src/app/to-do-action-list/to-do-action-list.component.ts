import { Component, OnInit } from '@angular/core';
import { ToDoService } from './../to-do.service'

@Component({
  selector: 'app-to-do-action-list',
  templateUrl: './to-do-action-list.component.html',
  styleUrls: ['./to-do-action-list.component.scss'],
  providers: [ToDoService]
})
export class ToDoActionListComponent implements OnInit {

  public toDoList;
  constructor(public toDoService: ToDoService) { }

  ngOnInit(): void {
    this.toDoList = this.toDoService.getToDos();
  }
}
