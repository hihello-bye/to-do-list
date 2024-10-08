let toDoLists = [];
let currentList = null;

const lists = document.getElementById('newList').addEventListener('click', (event) => {
    const listValue = lists.value;
    toDoLists.push(listValue);
    console.log(toDoLists);
})

export { toDoLists, currentList, lists };