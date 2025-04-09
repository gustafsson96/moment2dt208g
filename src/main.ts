import './style.css';

interface Todo {
    task: string;
    completed: boolean;
    priority: 1 | 2 | 3;
}

class TodoList {
    private todos: Todo[] = [];

    constructor() {
        console.log("Todo list created!");
        // Collect from local storage here? From a separate class? 
    }

    addTodo(task: string, priority: 1 | 2 | 3): boolean {

    }

    markTodoCompleted(todoIndex: number): void {

    }

    getTodos(): Todo[] {
        return this.todos;
    }

    // Method saveToLocalStorage(): void

    // Method loadFromLocalStorage(): void 
}



// Separate class for todo localstorage? Check class 2 1:5 min in (utility-klass)

// Create separate files for interface/classes and use import/export? 

