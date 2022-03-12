const todoList = document.querySelector('.todo-list');
const addBtn = document.querySelector('.todo-btn');
const inputText = document.querySelector('.todo-input');

// FUNCTIONS
function createTodo(e){
    const text = inputText.value;
    if(text === ''){
        return;
    }
    const li = document.createElement('li');

    const checkbox = document.createElement('input');
    checkbox.classList.add('checkbox'); // add css 
    checkbox.type = 'checkbox';

    const paragraph = document.createElement('p');
    paragraph.classList.add('paragraph');
    paragraph.textContent = text;

    const remove = document.createElement('span');
    remove.classList.add('remove'); // add css
    remove.innerHTML = '&cross;';

    li.appendChild(checkbox);
    li.appendChild(paragraph);
    li.appendChild(remove);

    todoList.appendChild(li);

    inputText.value = '';
}

function removeTodo(e){
    e.parentElement.remove();
}


function toggleComplete(element){
    if(element.checked === false){
        element.nextSibling.classList.remove('complete'); // look at css
    }else{
        element.nextSibling.classList.add('complete');
    }
}

// LISTENERS
todoList.addEventListener('click', e => {
    if(e.target.tagName === 'SPAN'){
        removeTodo(e.target);
    }
});

todoList.addEventListener('change', e => {
    if(e.target.tagName === 'INPUT' && e.target.type === 'checkbox'){
        toggleComplete(e.target);
    }
});

addBtn.addEventListener('click', e => {
    e.preventDefault();
    createTodo();
});

addBtn.addEventListener('keypress', e => {
    e.preventDefault();
    if(e.key === 'Enter'){
        createTodo(e);
    }
});