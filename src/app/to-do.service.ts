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

  getToDoList() {
    return this.todos;
  }

  addToDoItem(newToDo) {
    this.todos.push({label: newToDo});
    console.log(this.todos);
  }
}
