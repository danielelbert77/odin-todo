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

const projectList = document.querySelector(".project-list");
const todoList = document.querySelector(".todo-list");
const dropdown = document.querySelector("#project_list");


const renderProjects = () => {
    projectList.replaceChildren();

    for (const project of projectContainer) {
        const newProject = document.createElement("div");

        newProject.textContent = project.title;
        newProject.id = project.id;
        newProject.className = "project";

        projectList.appendChild(newProject);
    };
};

const renderTodos = (project) => {
    todoList.replaceChildren();

    for (const todo of project.todos) {
        const newTodo = document.createElement("div");
        newTodo.textContent = todo.title;
        newTodo.id = todo.id;
        newTodo.className = "todo"

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

        todoList.appendChild(newTodo);
    };
};

const renderTodoDropdown = () => {
    dropdown.replaceChildren();

    for (const project of projectContainer) {
        const option = document.createElement("option");

        option.value = project.id;
        option.textContent = project.title;

        dropdown.appendChild(option);
    }
}

export {
    renderProjects,
    renderTodos,
    renderTodoDropdown
};