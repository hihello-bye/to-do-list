export function saveToLocalStorage(data) {
    localStorage.setItem('toDoList', JSON.stringify(data));
}

export function loadLocalStorage() {
    const storedList = localStorage.getItem('toDolist');
    
    if (storedList) {
        return JSON.parse(storedList);
    }
    return null
}