function loadLists() {

let toDoLists = [];
let currentList = null;

const newList = document.getElementById('newList');
const createList = document.getElementById('createListBtn');
const lists = document.getElementById('lists');

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

};

export { loadLists };