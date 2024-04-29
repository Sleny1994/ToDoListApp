import { TodoItems } from "../types/TodoItems";

const LOCAL_STORAGE_KEY = "todoLists";

export function saveTodoList(todoLists:Array<TodoItems>){
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todoLists));
}

export function readTodoList(){
    return JSON.parse(JSON.stringify(localStorage.getItem(LOCAL_STORAGE_KEY)) || '[]');
}