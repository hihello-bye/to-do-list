let toDoList = [];
let currentList = null;

const listContainer = document.getElementById('listContainer');
const taskContainer = document.getElementById('taskContainer');
const newListInput = document.getElementById('newListInput');
const createListBtn = document.getElementById('createListBtn');
const newTaskInput = document.getElementById('newTaskInput');
const addTaskBtn = document.getElementById('addTaskBtn');

function createList(name) {
    const newList = {name: name, tasks: []};
    toDoList.push(newList);

    const listButton = document.createElement('button');
    listButton.textContent = name;

    listButton.addEventListener('click', () => {
        selectList(name);
    })

    listContainer.appendChild(listButton);

}

createListBtn.addEventListener('click', () => {
    const listName = newListInput.value;

    if (listName) {
        createList(name);
        newListInput.value = '';
    }
})

function selectList(listName) {
    currentList = toDoList.find(list => list.name === listName);
}