function loadLists() {

let toDoLists = [];
let currentList = null;

const newList = document.getElementById('newList');
const createList = document.getElementById('createListBtn');

createList.addEventListener('click', (event) => {
    const listValue = newList.value;

    if (listValue) {
        toDoLists.push(listValue);
        console.log(toDoLists);

        newList.value='';
    } else {
        console.log('Please name me');
    }
})

};

export { loadLists };