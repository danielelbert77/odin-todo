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

//variables for use later, taken from the html template
const projectList = document.querySelector(".project-list");
const todoList = document.querySelector(".todo-list");
const dropdown = document.querySelector("#project_list");


const renderProjects = (onSelectProject) => { //onSelectProject is essentially the callback function "focusProject"
    projectList.replaceChildren(); //clears the list of projects from the DOM tree so that it doesn't render duplicates

    for (const project of projectContainer) {
        const newProject = document.createElement("div");

        newProject.textContent = project.title;
        newProject.id = project.id;
        newProject.className = "project";

        newProject.addEventListener("click", () => {
            onSelectProject(project); //same as focusProject(project), which renders the todos of the focused project
        });

        projectList.appendChild(newProject);
    };
};

const renderTodos = (project) => {
    todoList.replaceChildren(); //clears the list of todos from the DOM tree so that it doesn't render duplicates

    for (const todo of project.todos) {
        const newTodo = document.createElement("div"); //creates todo div, which encompasses all of the below
        newTodo.className = "new-todo";
        newTodo.id = todo.id;

        const todoCompletionToggle = document.createElement("input"); //creates the checkbox to mark completion/delete todos
        todoCompletionToggle.className = "todo-completion-toggle";
        todoCompletionToggle.type = "checkbox";

        const todoContent = document.createElement("div"); //creates the div which will contain the title, desc., due date, etc
        todoContent.className = "todo";

        const todoTitle = document.createElement("span");
        todoTitle.textContent = todo.title;
        const todoDescription = document.createElement("span");
        todoDescription.textContent = todo.description;
        const todoDueDate = document.createElement("span");
        todoDueDate.textContent = `Due: ${todo.dueDate}`;

        todoContent.appendChild(todoTitle);
        todoContent.appendChild(todoDescription);
        todoContent.appendChild(todoDueDate);

        const todoDeleteButton = document.createElement("button");
        todoDeleteButton.type = "button";
        todoDeleteButton.className = "todo-delete-button";
        todoDeleteButton.id = todo.id;
        todoDeleteButton.textContent = "Delete";
        todoDeleteButton.style.display = "none";

        newTodo.appendChild(todoCompletionToggle);
        newTodo.appendChild(todoContent);
        newTodo.appendChild(todoDeleteButton);

        todoList.appendChild(newTodo);

        
        todoCompletionToggle.addEventListener("change", () => {
            todoDeleteButton.style.display = todoCompletionToggle.checked ? "inline-block" : "none";
            todo.completed = todoCompletionToggle.checked ? true : false;
        });

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