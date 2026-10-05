import {
    projectContainer,
    createTodo,
    addTodo,
    editTodo,
    createProject,
    addProject,
} from "./app.js";

import {
    renderProjects,
    renderTodos,
    renderTodoDropdown
} from "./dom.js";

import './styles.css';

//callback functions, only runs when the event listener in renderProjects/renderTodos triggers from the click
const focusTodo = (todo) => {
    focusedTodo = todo;
};

const focusProject = (project) => {
    focusedProject = project;
    renderTodos(focusedProject, focusTodo);
    renderProjects(focusProject, focusedProject);
};

//Creating a default project, a default todo, and rendering it upon startup
const defaultProject = createProject("Default");
addProject(defaultProject);

const defaultTodo = createTodo("Learn JavaScript", "Default description for this example", "9/10/2025");
addTodo(defaultProject, defaultTodo);

renderTodos(defaultProject, focusTodo);

let focusedTodo = defaultTodo;
let focusedProject = defaultProject;

//functions receiving the callback, so that when the focused project is clicked it can use the focusProject callback
renderProjects(focusProject, focusedProject);
renderTodos(focusedProject, focusTodo)

//functionality for adding a new project to projectContainer
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

    renderProjects(focusProject, focusedProject);

    projectForm.reset();
    projectDialog.close();
});

//functionality for adding a new todo to a project
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

    const todo = createTodo(todoName, todoDescription, todoDueDate);
    addTodo(chosenProject, todo);

    renderTodos(chosenProject, focusTodo);

    todoForm.reset();
    todoDialog.close();
});

//functionality for editing an existing todo in a project

const todoEditForm = document.querySelector(".todo-edit-form");
const todoEditDialog = document.querySelector(".todo-edit-dialog");

todoEditForm.addEventListener("submit", (event) => {
    event.preventDefault();

    //Figure out how to make it know which todo you're editing
    const updatedToto = focusedTodo;
    const updatedTitle = document.querySelector("#updated_todo_title").value;
    const updatedDescription = document.querySelector("#updated_todo_description").value;
    const updatedDueDate = document.querySelector("#updated_todo_duedate").value;

    editTodo(updatedToto, updatedTitle, updatedDescription, updatedDueDate);
    renderTodos(focusedProject, focusTodo);

    todoEditForm.reset();
    todoEditDialog.close();
});