import { Component, OnInit } from '@angular/core';
import { ToDoService } from './../to-do.service';

@Component({
  selector: 'app-to-do-action-list',
  templateUrl: './to-do-action-list.component.html',
  styleUrls: ['./to-do-action-list.component.scss']
})
export class ToDoActionListComponent implements OnInit {

  public checkSort = false;
  public date = Date.now();
  public toDoList = this.toDoService.todos;
  constructor(public toDoService: ToDoService) { }

  ngOnInit(): void {
  }

  sortLowDate() {
    return this.toDoList.sort((a, b) => {
      return <any>new Date(b.date) - <any>new Date(a.date);
    });
  }

  sortUpDate() {
    return this.toDoList.sort((a, b) => {
      return <any>new Date(a.date) - <any>new Date(b.date);
    });
  }
}
