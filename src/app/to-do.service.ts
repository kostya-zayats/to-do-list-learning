export class ToDoService {

  constructor() { }

  todos = [ ];

  addToDoItem(newToDo) {
    this.todos.push({label: newToDo, date: Date()});
  }
}
