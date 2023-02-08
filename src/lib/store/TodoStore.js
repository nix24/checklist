import { v4 as uuidv4 } from 'uuid';
import { writable } from 'svelte/store';
import { browser } from '$app/environment'; //test to see if we are in the browser

/* Checking to see if we are in the browser, if we are it will parse the local storage and if not it
will return an empty array. */
const data = browser ? JSON.parse(window.localStorage.getItem('u-todo-list')) ?? [] : [];

// Creating a writable store
export const todos = new writable(data);

/* Subscribing to the store and if we are in the browser it will set the local storage to the value of
the store. */
todos.subscribe((value) => {
  if (browser) {
    window.localStorage.setItem('u-todo-list', JSON.stringify(value));
  }
})



// Function to add a todo
export const addTodo = (title, text) => {
  todos.update((currentTodos) => {
    return [...currentTodos, {
      id: uuidv4(),
      title: title,
      text: text,
      completed: false
    }]
  });
}

// Function to remove a todo
export const deleteTodo = (id) => {
  todos.update((currentTodos) => {
    return currentTodos.filter((todo) => todo.id !== id);
  });
}

export const deleteAll = () => {
  // completely clear the store
  todos.set([]);
}

// func to toggle complete
export const toggleComplete = (id) => {
  todos.update((currentTodos) => {
    return currentTodos.map((todo) => todo.id === id ? { ...todo, completed: !todo.completed } : todo);
  });
}


//edit func
export const editTodo = (id, text) => {
  todos.update((currentTodos) => {
    return currentTodos.map((todo) => todo.id === id ? { ...todo, text } : todo);
  });
}

//get todo title and text by id
export const getTodo = (id) => {
  let todo;
  todos.subscribe((value) => {
    todo = value.find((todo) => todo.id === id);
  });
  return todo;
}

