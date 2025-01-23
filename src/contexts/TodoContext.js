export class TodoContext {
    constructor() {
        this.todos = [] // todos array
        this.listeners = [] // array of functions
    }

    addTodo(todo) {
        this.todos.push({
            id: Math.random() * (9000 - 1000) + 1000,
            description: todo,
            completed: false
        })
        this.notifyListeners()
    }

    completeTodo(id) {
        this.todos = this.todos.map(todo =>
            todo.id === id ? { ...todo, completed: !todo.completed } : todo
        )
        this.notifyListeners()
    }

    deleteTodo(id) {
        this.todos = this.todos.filter(todo => todo.id !== id)
        this.notifyListeners()
    }

    subscribe(listener) {
        this.listeners.push(listener)
    }

    notifyListeners() {
        this.listeners.forEach(listener => listener(this.todos))
    }
}