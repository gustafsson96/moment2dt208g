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

    saveToLocalStorage(): string {
        return JSON.stringify(this.todos);
    }

    loadFromLocalStorage(data: Todo[]): void {
        this.todos = data;
    } 
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

// Create key for local storage
const LOCAL_STORAGE_KEY = "myTodos";

// Get form and input elements
const form = document.getElementById('todo-form') as HTMLFormElement;
const taskInput = document.getElementById('task') as HTMLInputElement;
const priorityInput = document.getElementById('priority') as HTMLInputElement;
const todoContainer = document.getElementById('todo-container') as HTMLDivElement;

const savedTodos = localStorage.getItem(LOCAL_STORAGE_KEY);
if (savedTodos) {
    try {
        const parsed = JSON.parse(savedTodos);
        todoList.loadFromLocalStorage(parsed);
        renderTodos();
    } catch (error) {
        console.error("Error parsing saved todos: ", error)
    }
}

form.addEventListener('submit', (e) => {
    e.preventDefault(); // Prevent form sumbmission


    const taskValue: string = taskInput.value;
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

    // Save and update todos list
    saveTodos();
    renderTodos();

    // Reset form
    form.reset();

});

function saveTodos() {
    const todosJSON = todoList.saveToLocalStorage();
    localStorage.setItem(LOCAL_STORAGE_KEY, todosJSON);
}

function renderTodos() {
    const todos = todoList.getTodos();
    todoContainer.innerHTML = '';

    if (todos.length === 0) {
        todoContainer.innerHTML = "<p>No todos to show right now.</p>";
        return;
    }

    todos.forEach((todo, index) => {
        const div = document.createElement('div');
        div.className = 'todo';
        div.innerHTML = `
         <p><strong>${todo.task}</strong> (Priority: ${todo.priority}) - ${todo.completed ? 'YES' : 'NO'}</p>
        `;
        todoContainer.appendChild(div);
    });
}