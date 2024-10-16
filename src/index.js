import './style.css';
import { saveToLocalStorage, loadLocalStorage } from './storage.js';

let toDoList = [];
let currentList = null;

let defaultList = [
    { name: 'Today', tasks: [{ description: 'Complete To Do List', completed: false }] },
    { name: 'Tomorrow', tasks: [{ description: 'Complete by tomorrow', completed: false }] },
    { name: 'Sometime', tasks: [{ description: 'Complete one day', completed: false }] }
];

const listContainer = document.getElementById('listContainer');
const taskContainer = document.getElementById('taskContainer');
const newListInput = document.getElementById('newListInput');
const createListBtn = document.getElementById('createListBtn');
const newTaskInput = document.getElementById('newTaskInput');
const addTaskBtn = document.getElementById('addTaskBtn');

document.addEventListener('DOMContentLoaded', () => {
    const storedData = loadLocalStorage();
    
    if (storedData && storedData.length > 0) {
        toDoList = storedData;
        selectList(toDoList[0].name);
    } else {
        displayDefaultList();
    }
    displayListButtons();  
});

function createList(name, tasks = []) {
    const newList = { name, tasks };
    toDoList.push(newList);
    saveToLocalStorage(toDoList);
    displayListButtons();
}

function displayListButtons() {
    listContainer.innerHTML = '';
    toDoList.forEach(list => {
        const listButton = document.createElement('button');
        listButton.textContent = list.name;
        listButton.addEventListener('click', () => {
            selectList(list.name);
        });
        listContainer.appendChild(listButton);
    });
}

function displayDefaultList() {
    defaultList.forEach(list => {
        createList(list.name, list.tasks);
    });
    saveToLocalStorage(toDoList);
}

function selectList(listName) {
    currentList = toDoList.find(list => list.name === listName);
    updateDisplay();
}

function updateDisplay() {
    taskContainer.innerHTML = '';

    if (currentList) {
        const listTitle = document.createElement('h2');
        listTitle.textContent = currentList.name;
        taskContainer.appendChild(listTitle);

        currentList.tasks.forEach((task, index) => {
            const taskEntry = document.createElement('li');
            taskEntry.classList.add('task');

            const checkbox = document.createElement('input');
            checkbox.type = 'checkbox';
            checkbox.checked = task.completed;

            checkbox.addEventListener('change', () => {
                task.completed = checkbox.checked;
                saveToLocalStorage(toDoList);  // Save updated task status
                updateTask(taskLabel, task.completed);
            });

            const taskLabel = document.createElement('label');
            taskLabel.textContent = task.description;
            updateTask(taskLabel, task.completed);

            const deleteBtn = document.createElement('button');
            deleteBtn.textContent = 'Delete';
            deleteBtn.classList.add('delete-btn');

            deleteBtn.addEventListener('click', () => {
                deleteTask(index);
            });

            taskEntry.appendChild(checkbox);
            taskEntry.appendChild(taskLabel);
            taskEntry.appendChild(deleteBtn);
            taskContainer.appendChild(taskEntry);
        });
    }
}

function updateTask(taskLabel, isCompleted) {
    if (isCompleted) {
        taskLabel.classList.add('completed');
    } else {
        taskLabel.classList.remove('completed');
    }
}

function deleteTask(taskIndex) {
    currentList.tasks.splice(taskIndex, 1);
    saveToLocalStorage(toDoList);
    updateDisplay();
}

function addTask() {
    const taskDescription = newTaskInput.value;

    if (currentList && taskDescription) {
        currentList.tasks.push({ description: taskDescription, completed: false });
        newTaskInput.value = '';
        saveToLocalStorage(toDoList);
        updateDisplay();
    } else if (!currentList) {
        alert('Select a list to add tasks');
    } else {
        alert('What do you need to do?');
    }
}

addTaskBtn.addEventListener('click', addTask);

createListBtn.addEventListener('click', () => {
    const listName = newListInput.value;

    if (listName) {
        createList(listName); 
        newListInput.value = '';
    }
});

