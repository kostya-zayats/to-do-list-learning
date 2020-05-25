import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ToDoService {

  constructor() { }

  todos = [
    {
      label: "show objects in array"
    },
    {
      label: "add object to array"
    },
    {
      label: "???"
    }
  ];

  getToDos() {
    return this.todos;
  }

  addToDo(newToDo) {
    this.todos.push(newToDo);
  }
}
