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

        const addList = document.createElement('button');
        addList.textContent = listValue;
        lists.appendChild(addList);

        newList.value='';
    } 
})

createTask.addEventListener('click', (event) => {
    const taskValue = newTask.value;

    if (taskValue) {
        toDoLists.push({task: taskValue});
        
        const addTask = document.createElement('li');
        addTask.textContent = taskValue;
        tasks.appendChild(addTask);
         currentList = toDoLists.find(tasks => tasks.task === taskValue);
    

        newTask.value='';
    } 
})

};

export { loadLists };