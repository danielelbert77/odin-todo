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
    renderTodos
} from "./dom.js";


//console test
const defaultProject = createProject("Default");
addProject(defaultProject);

const todo = createTodo("Learn JavaScript", "Default description for this example", "9/10/2025");
addTodo(defaultProject, todo);

todoToggle(todo);
changePriority(todo, 1);

console.log(projectContainer);
renderProjects();
renderTodos(defaultProject);