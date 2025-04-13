import './style.css';
import { TodoList } from './classes';
import { saveTodosToLocalStorage } from './localstorage';

// Create a TodoList instance
const todoList = new TodoList();
renderTodos();

// Get form and input elements
const form = document.getElementById('todo-form') as HTMLFormElement;
const taskInput = document.getElementById('task') as HTMLInputElement;
const priorityInput = document.getElementById('priority') as HTMLInputElement;

// Event listener for form submission
form.addEventListener('submit', (e) => {
    e.preventDefault(); // Prevent form sumbmission

    const taskValue: string = taskInput.value;
    const priorityValue: string = priorityInput.value;

    // Call add todo method
    const wasAdded = todoList.addTodo(taskValue, Number(priorityValue) as 1 | 2 | 3);

    if (!wasAdded) {
        alert("Incorrect user input. Insert a task and a priority between 1 and 3.");
        return;
    }

    // Save and update todos list
    saveTodosToLocalStorage(todoList.getTodos());
    renderTodos();

    // Reset form
    form.reset();

});

// Render todos in DOM 
function renderTodos() {
    const todoContainer = document.getElementById('todo-container') as HTMLTableSectionElement;
    todoContainer.innerHTML = ''; // Clear the current list of todo

    const todos = todoList.getTodos();
    if (todos.length === 0) {
        const noTodosRow = document.createElement('tr');
        const noTodosCell = document.createElement('td');
        noTodosCell.colSpan = 5;
        noTodosCell.innerText = "No todos to show right now.";
        noTodosRow.appendChild(noTodosCell);
        todoContainer.appendChild(noTodosRow);
        return;
    }

    // Loop through each todo and add a row to the table
    todos.forEach((todo, index) => {
        const row = document.createElement('tr');

        // Create the cells for each todo property
        const taskCell = document.createElement('td');
        taskCell.innerText = todo.task;

        const priorityCell = document.createElement('td');
        priorityCell.innerText = `${todo.priority}`;

        const statusCell = document.createElement('td');
        statusCell.innerText = todo.completed ? 'Completed' : 'Not completed';

        // Create the actions cell with checkbox
        const actionsCell = document.createElement('td');
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.checked = todo.completed;
        checkbox.addEventListener('change', () => {
            todoList.markTodoCompleted(index);
            saveTodosToLocalStorage(todoList.getTodos());
            renderTodos();
        });

        actionsCell.appendChild(checkbox);

        // Create cell for the remove btn
        const removeCell = document.createElement('td');
        const removeButton = document.createElement('button');
        removeButton.classList.add('remove-button');
        removeButton.innerText = 'Remove';
        removeButton.addEventListener('click', () => {
            todoList.removeTodo(index);
            saveTodosToLocalStorage(todoList.getTodos());
            renderTodos();
        });

        removeCell.appendChild(removeButton);

        // Append cells to row
        row.appendChild(taskCell);
        row.appendChild(priorityCell);
        row.appendChild(statusCell);
        row.appendChild(actionsCell);
        row.appendChild(removeCell);

        // Append row to the tbody section
        todoContainer.appendChild(row);
    });
}

