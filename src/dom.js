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

const listPanel = document.querySelector(".list-panel");
const mainPanel = document.querySelector(".main-panel");


const renderProjects = () => {
    for (const project of projectContainer) {
        const newProject = document.createElement("div");
        newProject.textContent = project.title;
        newProject.id = project.id;

        listPanel.appendChild(newProject);
    };
};

const renderTodos = (project) => {
    for (const todo of project.todos) {
        const newTodo = document.createElement("div");
        newTodo.textContent = todo.title;
        newTodo.id = todo.id;

        const todoDescription = document.createElement("span");
        todoDescription.textContent = todo.description;
        const todoDueDate = document.createElement("span");
        todoDueDate.textContent = todo.dueDate;
        const todoPriority = document.createElement("span");
        todoPriority.textContent = todo.priority;
        const todoCompleted = document.createElement("span");
        todoCompleted.textContent = todo.completed;

        newTodo.appendChild(todoDescription);
        newTodo.appendChild(todoDueDate);
        newTodo.appendChild(todoPriority);
        newTodo.appendChild(todoCompleted);

        mainPanel.appendChild(newTodo);
    };
};

export {
    renderProjects,
    renderTodos
};