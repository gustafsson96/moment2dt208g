import './style.css';

interface ValidationResult {
    isValid: boolean;
    errormessage?: string;
}

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



// Check if a task is inserted
function validateUserInput(task: string, priority: string): { isValid: boolean, errorMessage?: string } {


    if (!task.trim()) {
        return { isValid: false, errorMessage: "A task is required." };
    }

    const priorityNumber: number = Number(priority);

    if (![1, 2, 3].includes(priorityNumber)) {
        return { isValid: false, errorMessage: "Priority must be 1, 2, or 3." };
    }

    return {isValid: true};
}

const taskInput = document.getElementById('task') as HTMLInputElement;
const taskValue: string = taskInput.value;

const priorityInput = document.getElementById('priority') as HTMLInputElement;
const priorityValue: string = priorityInput.value;

const userInputValidation: ValidationResult = validateUserInput(taskValue, priorityValue);
