import { Todo } from './interfaces';

// Key to store todos in local storage
const LOCAL_STORAGE_KEY = "myTodos";

// Function to save todo list to local storage
export function saveTodosToLocalStorage(todos: Todo[]): void {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos));
}

// Function to load todos from local storage
export function loadTodosFromLocalStorage(): Todo[] {
    const savedTodos = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (!savedTodos) return [];

    try {
        return JSON.parse(savedTodos) as Todo[];
    } catch (error) {
        console.error("Error parsing todos from localStorage", error);
        return [];
    }
}