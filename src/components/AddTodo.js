import { Component } from "../common/Component.js";

export class AddTodo extends Component {
  constructor(props) {
    super(props)
    this.handleAdd = this.handleAdd.bind(this)
  }

  handleAdd(todo) {
    this.props.todoContext.addTodo(todo)
  }

  render() {
    const addElement = document.createElement('div')
    addElement.className = "add-todo"
    addElement.innerHTML = `
      <input type="text" id="todo-input" placeholder="Enter task details...">
      <button id="todo-add-btn">Add To Do</button>
    `
    const input = addElement.querySelector('#todo-input')
    const addButton = addElement.querySelector('#todo-add-btn')

    addButton.addEventListener('click', () => {
      this.handleAdd(input.value)
      input.value = ''
    })

    return addElement
  }
}