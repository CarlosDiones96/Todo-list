//Selector
const todoInput = document.querySelector('.todo-input');
const todoBtn = document.querySelector('.todo-btn');
const todoList = document.querySelector('.todo-list');

//Event Listeners
todoBtn.addEventListener('click', addTodo);
todoList.addEventListener('click', deleteCheck);

//Functions
function addTodo(event){
    event.preventDefault();
    todoList.innerHTML+= 
            `<li class="todo">
                <span class="todo-text">
                ${todoInput.value}
                </span>
                <img class="check-icon" src="icons/check-mark.png">
                <img class="trash-icon" src="icons/trash-can.png">
            </li>`;
    todoInput.value = '';
}

function deleteCheck(event){
    const item = event.target;
} // to be continued => Beginner Vanilla JavaScript Project Tutorial 33:00 min