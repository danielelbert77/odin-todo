import {
    projectContainer,
    createTodo,
    addTodo,
    createProject,
    addProject,
} from "./app.js";

import {
    renderProjects,
    renderTodos,
    renderTodoDropdown
} from "./dom.js";

import './styles.css';

//Creating a default project, a default todo, and rendering it upon startup
const defaultProject = createProject("Default");
addProject(defaultProject);

const todo = createTodo("Learn JavaScript", "Default description for this example", "9/10/2025");
addTodo(defaultProject, todo);

renderTodos(defaultProject);

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

    renderTodos(chosenProject);

    todoForm.reset();
    todoDialog.close();
});


let focusedProject = defaultProject;

//callback function, only runs when the event listener in renderProjects triggers from the click
const focusProject = (project) => {
    focusedProject = project;
    renderTodos(focusedProject);
    renderProjects(focusProject, focusedProject);
};

//function receiving the callback, so that when the focused project is clicked it can use the focusProject callback
renderProjects(focusProject, focusedProject);