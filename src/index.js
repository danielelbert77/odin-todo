import {
    projectContainer,
    createTodo,
    todoToggle,
    addTodo,
    removeTodo,
    createProject,
    addProject,
    removeProject,
    changePriority
} from "./app.js";

import {
    renderProjects,
    renderTodos,
    renderTodoDropdown
} from "./dom.js";

import './styles.css';


const defaultProject = createProject("Default");
addProject(defaultProject);

const todo = createTodo("Learn JavaScript", "Default description for this example", "9/10/2025");
addTodo(defaultProject, todo);

todoToggle(todo);
changePriority(todo, 1);

renderProjects();
renderTodos(defaultProject);


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

    renderProjects();

    projectForm.reset();
    projectDialog.close();
});

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