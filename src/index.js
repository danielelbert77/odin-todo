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
    renderProjectForm
} from "./dom.js";

import './styles.css';


//test
const defaultProject = createProject("Default");
addProject(defaultProject);

const todo = createTodo("Learn JavaScript", "Default description for this example", "9/10/2025");
addTodo(defaultProject, todo);

todoToggle(todo);
changePriority(todo, 1);

console.log(projectContainer);
renderProjects();
renderTodos(defaultProject);


const newButton = document.querySelector(".new-button");
const projectDialog = document.querySelector(".project-dialog");

newButton.addEventListener("click", () => {
    renderProjectForm();
    projectDialog.showModal();
});