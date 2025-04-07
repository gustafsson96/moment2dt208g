import './style.css';

interface Todo {
    task: string;
    completed: boolean;
    priority: 1 | 2 | 3;
}

class TodoList implements Todo {
    task: string;
    completed: boolean;
    priority: 1 | 2 | 3;

    constructor(task: string, completed: boolean, priority: 1 | 2 | 3) {
        this.task = task;
        this.completed = completed;
        this.priority = priority;
    }

    // Method addTodo(task: string, priority: number): boolean

    // Method markTodoCompleted(todoIndex: number): void

    // Method getTodos(): Todo[] 

    // Method saveToLocalStorage(): void

    // Method loadFromLocalStorage(): void 
}

// Separate class for todo localstorage? Check class 2 1:5 min in (utility-klass)

// Create separate files for interface/classes and use import/export? 