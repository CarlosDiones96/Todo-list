//Selector
const todoInput = document.querySelector('.todo-input');
const todoBtn = document.querySelector('.todo-btn');
const todoList = document.querySelector('.todo-list');

const checkElement = '<img class="check-icon" src="icons/check-mark.png">';
const deleteElement = '<img class="trash-icon" src="icons/trash-can.png">';

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
                ${checkElement}
                ${deleteElement}
            </li>`;
    todoInput.value = '';
}

function deleteCheck(e){
    const item = e.target;
    if(item.classList[0] === 'todo-list' ||
     item.classList[0] === 'todo-container'){
        return;
    }
    if(item){
        item.remove();
    }
} 
// Fix the bugs and improve the app. ==> Beginner Vanilla JavaScript Project Tutorial 39:00" 