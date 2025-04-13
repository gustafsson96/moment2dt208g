import { Todo } from './interfaces';
import { loadTodosFromLocalStorage } from './localstorage';

// Class for a list of todos
export class TodoList {
    private todos: Todo[] = [];

    constructor() {
        this.todos = loadTodosFromLocalStorage();
    }

    // Add todo after validation
    addTodo(task: string, priority: 1 | 2 | 3): boolean {
        if (!task.trim() || ![1, 2, 3].includes(priority)) {
            return false;
        }

        const newTodo: Todo = {
            task,
            completed: false,
            priority
        };

        this.todos.push(newTodo);
        return true;
    }

    // Remove a todo
    removeTodo(todoIndex: number): void {
        this.todos.splice(todoIndex, 1); 
    }

    // Toggle status of todo
    markTodoCompleted(todoIndex: number): void {
        const todo = this.todos[todoIndex];
        if (todo) {
            todo.completed = !todo.completed;
        }
    }

    // Return list of todos
    getTodos(): Todo[] {
        return this.todos;
    }

    // Get todos from local storage
    loadFromLocalStorage(data: Todo[]): void {
        this.todos = data;
    }

    // Return todos as JSON string for saving
    saveToLocalStorage(): string {
        return JSON.stringify(this.todos);
    }
}
