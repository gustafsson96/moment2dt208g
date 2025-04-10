import './style.css';

interface ValidationResult {
    isValid: boolean;
    errorMessage?: string;
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

    markTodoCompleted(todoIndex: number): void {
        if(this.todos[todoIndex]) {
            this.todos[todoIndex].completed = true;
        }
    }

    getTodos(): Todo[] {
        return this.todos;
    }

    // Method saveToLocalStorage(): void

    // Method loadFromLocalStorage(): void 
}



// Separate class for todo localstorage? Check class 2 1:5 min in (utility-klass)

// Create separate files for interface/classes and use import/export? 



// Validate user input
function validateUserInput(task: string, priority: string): ValidationResult {

    if (!task.trim()) {
        return { isValid: false, errorMessage: "A task is required." };
    }

    const priorityNumber: number = Number(priority);

    if (![1, 2, 3].includes(priorityNumber)) {
        return { isValid: false, errorMessage: "Priority must be 1, 2, or 3." };
    }

    return { isValid: true };
}

// Create a TodoList instance
const todoList = new TodoList();

// Get the form element
const form = document.getElementById('todo-form') as HTMLFormElement;

form.addEventListener('submit', (e) => {
    e.preventDefault(); // Prevent form sumbmission


    const taskInput = document.getElementById('task') as HTMLInputElement;
    const taskValue: string = taskInput.value;

    const priorityInput = document.getElementById('priority') as HTMLInputElement;
    const priorityValue: string = priorityInput.value;

    const userInputValidation: ValidationResult = validateUserInput(taskValue, priorityValue);

    if (!userInputValidation.isValid) {
        alert(userInputValidation.errorMessage);
        return;
    }

    // Call addTodo method
    const wasAdded = todoList.addTodo(taskValue, Number(priorityValue) as 1 | 2 | 3);

    if(!wasAdded) {
        alert("Failed to add todo. Please try again")
        return;
    }

    // Reset form and display current list
    taskInput.value = '';
    priorityInput.value = '';
    console.log("Current todos:", todoList.getTodos());

});
