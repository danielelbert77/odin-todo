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
const projectDialog = document.querySelector(".project-dialog");


const renderProjects = () => {
    listPanel.replaceChildren();
    
    for (const project of projectContainer) {
        const newProject = document.createElement("div");
        newProject.textContent = project.title;
        newProject.id = project.id;
        newProject.className = "project";

        listPanel.appendChild(newProject);
    };
};

const renderTodos = (project) => {
    mainPanel.replaceChildren();

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

        mainPanel.appendChild(newTodo);
    };
};

const renderProjectForm = () => {
    const newForm = document.createElement("form");
    // newForm.action = "/signup";
    // newForm.method = "post";

    const formGroup = document.createElement("div");
    formGroup.className = "project-form-group";
    
    const formFields = document.createElement("div");
    formFields.className = "project-form-fields";
    
    const projectLabel = document.createElement("label");
    projectLabel.htmlFor = "project_name";
    projectLabel.textContent = "New Project Name:";
    
    const projectInput = document.createElement("input");
    projectInput.type = "text";
    projectInput.name = "project_name";
    projectInput.id = "project_name";

    const projectButton = document.createElement("button");
    projectButton.type = "submit";
    projectButton.textContent = "Save";
    
    formFields.appendChild(projectLabel);
    formFields.appendChild(projectInput);
    formFields.appendChild(projectButton);
    formGroup.appendChild(formFields);
    newForm.appendChild(formGroup);

    projectDialog.appendChild(newForm);
};

export {
    renderProjects,
    renderTodos,
    renderProjectForm
};

// Form syntax reference
//    <form action="/signup" method="post">
//         <div class="form-group">
//             <div class="form-group-title">Let's do this!</div>
//             <div class="form-row">
//                 <div class="form-field">
//                     <label for="first_name">FIRST NAME</label>
//                     <input type="text" name="first_name" id="first_name">
//                 </div>
//                 <div class="form-field">
//                     <label for="last_name">LAST NAME</label>
//                     <input type="text" name="last_name" id="last_name">
//                 </div>
//             </div>