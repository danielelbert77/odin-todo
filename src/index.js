import {
    projectContainer,
    createTodo,
    addTodo,
    editTodo,
    createProject,
    addProject,
    editProject,
} from "./app.js";

import {
    renderProjects,
    renderTodos,
    renderTodoDropdown
} from "./dom.js";

import {
    saveItems,
    loadItems
} from "./storage.js";

import './styles.css';

// Load saved projects
const savedItems = loadItems();
projectContainer.push(...savedItems);

// Track the currently focused project and todo
let focusedTodo = null;
let focusedProject = null;

// Save the current projects and their todos
const persistItems = () => saveItems(projectContainer);

// Create default data only on the first launch
if (projectContainer.length === 0) {
    const defaultProject = createProject("Default");
    addProject(defaultProject);

    const defaultTodo = createTodo(
        "Learn JavaScript",
        "Default description for this example",
        "2025-09-10"
    );

    addTodo(defaultProject, defaultTodo);
}

// Initialize focused items
focusedProject = projectContainer[0];
focusedTodo = focusedProject.todos[0] ?? null;

// Save initial data
persistItems();

// Callback functions
const focusTodo = (todo) => {
    focusedTodo = todo;
};

const focusProject = (project) => {
    focusedProject = project;
    focusedTodo = project.todos[0] ?? null;

    renderTodos(focusedProject, focusTodo);
    renderProjects(focusProject, focusedProject);
};

// Initial rendering
renderProjects(focusProject, focusedProject);
renderTodos(focusedProject, focusTodo);


// Add a new project
const newProjectButton = document.querySelector(".new-project-button");
const projectDialog = document.querySelector(".project-dialog");
const projectForm = document.querySelector(".project-form");

newProjectButton.addEventListener("click", () => {
    projectDialog.showModal();
});

projectForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const projectName = document.querySelector("#project_name").value;

    const project = createProject(projectName);
    addProject(project);

    persistItems();

    renderProjects(focusProject, focusedProject);

    projectForm.reset();
    projectDialog.close();
});


// Add a new todo
const newTodoButton = document.querySelector(".new-todo-button");
const todoDialog = document.querySelector(".todo-dialog");
const todoForm = document.querySelector(".todo-form");

newTodoButton.addEventListener("click", () => {
    todoDialog.showModal();
    renderTodoDropdown();
});

todoForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const chosenProjectId = document.querySelector("#project_list").value;
    const todoName = document.querySelector("#todo_name").value;
    const todoDescription = document.querySelector("#todo_description").value;
    const todoDueDate = document.querySelector("#todo_duedate").value;

    const chosenProject = projectContainer.find(
        project => project.id === chosenProjectId
    );

    if (!chosenProject) return;

    const todo = createTodo(todoName, todoDescription, todoDueDate);
    addTodo(chosenProject, todo);

    persistItems();

    renderTodos(chosenProject, focusTodo);

    todoForm.reset();
    todoDialog.close();
});


// Edit an existing project
const projectEditForm = document.querySelector(".project-edit-form");
const projectEditDialog = document.querySelector(".project-edit-dialog");

projectEditForm.addEventListener("submit", (event) => {
    event.preventDefault();

    if (!focusedProject) return;

    const updatedTitle = document.querySelector(
        "#updated_project_title"
    ).value;

    editProject(focusedProject, updatedTitle);

    persistItems();

    renderProjects(focusProject, focusedProject);

    projectEditForm.reset();
    projectEditDialog.close();
});


// Edit an existing todo
const todoEditForm = document.querySelector(".todo-edit-form");
const todoEditDialog = document.querySelector(".todo-edit-dialog");

todoEditForm.addEventListener("submit", (event) => {
    event.preventDefault();

    if (!focusedTodo || !focusedProject) return;

    const updatedTitle = document.querySelector(
        "#updated_todo_title"
    ).value;

    const updatedDescription = document.querySelector(
        "#updated_todo_description"
    ).value;

    const updatedDueDate = document.querySelector(
        "#updated_todo_duedate"
    ).value;

    editTodo(
        focusedTodo,
        updatedTitle,
        updatedDescription,
        updatedDueDate
    );

    persistItems();

    renderTodos(focusedProject, focusTodo);

    todoEditForm.reset();
    todoEditDialog.close();
});