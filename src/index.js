import './style.css';
import { saveToLocalStorage, loadLocalStorage } from './storage.js';

let toDoList = [];
let currentList = null;
let defaultList = [
    {name: 'Today', tasks:['Complete To Do List']},
    {name: 'Tomorrow', tasks:['Complete by tomorrow']},
    {name: 'Sometime', tasks:['Complete one day']}
];

const listContainer = document.getElementById('listContainer');
const taskContainer = document.getElementById('taskContainer');
const newListInput = document.getElementById('newListInput');
const createListBtn = document.getElementById('createListBtn');
const newTaskInput = document.getElementById('newTaskInput');
const addTaskBtn = document.getElementById('addTaskBtn');

document.addEventListener('DOMContentLoaded', () => {
    const storedData = loadLocalStorage();

    if (storedData) {
        toDoList = storedData;
        updateDisplay();
    }
})

function createList(name) {
    const newList = {name: name, tasks: []};
    toDoList.push(newList);
    saveToLocalStorage(toDoList);
    updateDisplay();
    
    const listButton = document.createElement('button');
    listButton.textContent = name;

    listButton.addEventListener('click', () => {
        selectList(name);
    })

    listContainer.appendChild(listButton);

}


function displayDefaultList() {
    defaultList.forEach(list => {
        createList(list.name, list.tasks);
    })
}

createListBtn.addEventListener('click', () => {
    const listName = newListInput.value;

    if (listName) {
        createList(listName);
        newListInput.value = '';
    }
})

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


        currentList.tasks.forEach((task, index)  => {
            const taskEntry = document.createElement('li');
            taskEntry.classList.add('task');
            
            const checkbox = document.createElement('input');
            checkbox.type = 'checkbox';
            checkbox.checked = task.completed;

            checkbox.addEventListener('change', () => {
                task.completed = checkbox.checked;
                updateTask(taskLabel, task.completed);
            })

            const taskLabel = document.createElement('label');
            taskLabel.textContent = task.description;

            updateTask(taskLabel, task.completed);

            const deleteBtn = document.createElement('button');
            deleteBtn.textContent = 'Delete';
            deleteBtn.classList.add('delete-btn');

            deleteBtn.addEventListener('click', () => {
                deleteTask(index);
            })

            taskEntry.appendChild(checkbox);
            taskEntry.appendChild(taskLabel);
            taskEntry.appendChild(deleteBtn);
            taskContainer.appendChild(taskEntry);
        })
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

    updateDisplay();
}

function addTask() {
    const taskDescription = newTaskInput.value;

    if (currentList && taskDescription) {
        currentList.tasks.push({description: taskDescription, completed: false});
        newTaskInput.value = '';
        updateDisplay();
    } else if (!currentList) {
        alert('Select a list to add to');
    } else {
        alert('What do you need to do?');
    }
    
}

addTaskBtn.addEventListener('click', addTask);
displayDefaultList();