import { Component } from "../common/Component.js";

export class TodoItem extends Component {
  constructor(props) {
    super(props)
    this.status = this.status.bind(this)
    this.handleDelete = this.handleDelete.bind(this)
  }

  status() {
    this.props.todoContext.completeTodo(this.props.item.id)
  }

  handleDelete() {
    this.props.todoContext.deleteTodo(this.props.item.id)
  }

  render() {
    const todoElement = document.createElement('li')
    todoElement.className = "todo-list"

    todoElement.innerHTML = `
      <span>${this.props.item.description}</span><div><button id="mark">${this.props.item.completed ? "Mark Complete" : "Mark Incomplete"}</button><button id="del">Delete</button></div>
    `
    todoElement.classList.add(`${this.props.item.completed ? 'completed' : 'not-completed'}`)

    todoElement.querySelector('#mark').addEventListener('click', this.status)
    todoElement.querySelector('#del').addEventListener('click', this.handleDelete)

    return todoElement;
  }
}