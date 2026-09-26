const projectContainer = []; // to complete

const createTodo = (title) => {
    return {
        title,
        completed: false
    };
};

const todoToggle = (todo) => {
    todo.completed = !todo.completed; // putting return here would be redundant unless you need it to return T/F somewhere
};

const addTodo = () // to complete

const removeTodo = () // to complete


const createProject = (title) => {
    return {
        title,
        todos: []
    };
};

const addProject = () // to complete

const removeProject = () // to complete
