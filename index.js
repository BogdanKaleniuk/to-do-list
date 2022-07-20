import todoItemTemplete from './todoItemTemplete.js';
import mockData from './mockData.js';

const items = mockData;

const refs = {
  todoList: document.querySelector('.todo-list'),
};

const render = () => {
  const list = items.map(todoItemTemplete).join('');
  refs.todoList.innerHTML = '';
  refs.todoList.insertAdjacentHTML('beforeend', list);
};

const handleAddItem = () => {
  const newTodo = {
    id: uuid.v4(),
    text: 'asfasf fafasfa sa qwqwwdqwdqw',
    isDone: false,
  };

  items.push(newTodo);
  render();
};

const hendleRemoveItem = () => {
  items.shift();
  render();
};

render();

setTimeout(handleAddItem, 2000);
setTimeout(hendleRemoveItem, 4000);
