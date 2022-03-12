const todoList = document.querySelector('.todo-list');
const addBtn = document.querySelector('.todo-btn');
const inputText = document.querySelector('.todo-input');

function createTodo(e){
    e.preventDefault();

    const text = inputText.value;
    if(text === ''){
        return;
    }
    const li = document.createElement('li');

    const checkbox = document.createElement('input');
    checkbox.classList.add('checkbox'); // add css 
    checkbox.type = 'checkbox';

    const paragraph = document.createElement('p');
    paragraph.classList.add('para');
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

addBtn.addEventListener('click', createTodo);
addBtn.addEventListener('keypress', e => {
    if(e.key === 'Enter'){
        createTodo(e);
    }
});
