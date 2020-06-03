export class ToDoService {

  constructor() { }

  todos = [
    {
      label: "show objects in array",
      time: "22:00 15.05.2020"
    },
    {
      label: "add object to array",
      time: "22:00 15.06.2020"
    },
    {
      label: "???",
      time: "22:00 04.03.2020"
    }
  ];

  addToDoItem(newToDo) {
    this.todos.push({label: newToDo, time: "10"});
  }
}
