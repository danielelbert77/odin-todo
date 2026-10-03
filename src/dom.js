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
        newTodo.className = "new-todo";
        newTodo.id = todo.id;

        const todoCompletionToggle = document.createElement("input");
        todoCompletionToggle.type = "checkbox";

        const todoContent = document.createElement("div");
        todoContent.textContent = todo.title;
        todoContent.className = "todo";

        const todoDescription = document.createElement("span");
        todoDescription.textContent = todo.description;
        const todoDueDate = document.createElement("span");
        todoDueDate.textContent = todo.dueDate;

        todoContent.appendChild(todoDescription);
        todoContent.appendChild(todoDueDate);

        const todoDeleteButton = document.createElement("button");
        todoDeleteButton.type = "button";
        todoDeleteButton.className = "todo-delete-button";
        todoDeleteButton.id = todo.id;
        todoDeleteButton.textContent = "Delete";

        newTodo.appendChild(todoCompletionToggle);
        newTodo.appendChild(todoContent);
        newTodo.appendChild(todoDeleteButton);

        todoList.appendChild(newTodo);

        todoDeleteButton.addEventListener("click", () => {
            removeTodo(project, todoDeleteButton.id);

            renderTodos(project);
        });
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