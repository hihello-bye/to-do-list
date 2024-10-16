export function saveToLocalStorage(data) {
    localStorage.setItem('toDoList', JSON.stringify(data));
}