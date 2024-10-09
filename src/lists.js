function loadLists() {

let toDoLists = [];
let currentList = null;

const newList = document.getElementById('newList');
const createList = document.getElementById('createListBtn');
const lists = document.getElementById('lists');
const newTask = document.getElementById('newTask');
const createTask = document.getElementById('addTaskBtn');
const tasks = document.getElementById('tasks');

createList.addEventListener('click', (event) => {
    const listValue = newList.value;

    if (listValue) {
        toDoLists.push({name: listValue});

        const switchList = document.createElement('button');
        switchList.textContent = listValue;
        lists.appendChild(switchList);

        switchList.addEventListener('click', (event) => {
            currentList = toDoLists.find(list => list.name === listValue);
        })

        newList.value='';
    } 
})

createTask.addEventListener('click', (event) => {
    const taskValue = newTask.value;

    if (taskValue) {
        toDoLists.push({task: taskValue});
        
        const addTask = document.createElement('button');
        addTask.textContent = taskValue;
        tasks.appendChild(addTask);

        addTask.addEventListener('click', (event) => {
            currentList = toDoLists.find(tasks => tasks.task === taskValue);
        })

        newTask.value='';
    } 
})

};

export { loadLists };