import { Todo } from './interfaces';
import { loadTodosFromLocalStorage } from './localstorage';

export class TodoList {
    private todos: Todo[] = [];

    constructor() {
        console.log("Todo list created!");
        this.todos = loadTodosFromLocalStorage();
    }

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

    markTodoCompleted(todoIndex: number): void {
        const todo = this.todos[todoIndex];
        if (todo) {
            todo.completed = !todo.completed;
        }
    }

    getTodos(): Todo[] {
        return this.todos;
    }

    loadFromLocalStorage(data: Todo[]): void {
        this.todos = data;
    }

    saveToLocalStorage(): string {
        return JSON.stringify(this.todos);
    }
}
