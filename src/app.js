const projectContainer = [];

const createTodo = (title, description, dueDate) => {
    return {
        id: crypto.randomUUID(),
        title,
        description,
        dueDate,
        priority: 3,
        completed: false
    };
};

const todoToggle = (todo) => {
    todo.completed = !todo.completed; // putting return here would be redundant unless you need it to return T/F somewhere
};

const addTodo = (project, todo) => {
    project.todos.push(todo);
};

const editTodo = (todo, title, description, dueDate) => {
    todo.title = title;
    todo.description = description;
    todo.dueDate = dueDate;
}

const removeTodo = (project, todoId) => {
    const index = project.todos.findIndex(todo => todo.id === todoId);
    
    if(index !== -1) { // if the todo provided doesn't exist, it returns -1, so we want to account for that
        project.todos.splice(index, 1);
    };
};


const createProject = (title) => {
    return {
        id: crypto.randomUUID(),
        title,
        todos: []
    };
};

const addProject = (project) => {
    projectContainer.push(project);
};

const editProject = (project, title) => {
    project.title = title;
};

const removeProject = (projectId) => {
    const index = projectContainer.findIndex(project => project.id === projectId);
    
    if(index !== -1) { // if the project provided doesn't exist, it returns -1, so we want to account for that
        projectContainer.splice(index, 1);
    };
};

const changePriority = (todo, priority) => {
    if(priority >= 1 && priority <= 3) {
        todo.priority = priority;
    };
};

export {
    projectContainer,
    createTodo,
    todoToggle,
    addTodo,
    editTodo,
    removeTodo,
    createProject,
    addProject,
    editProject,
    removeProject,
    changePriority
};