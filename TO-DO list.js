const todoInput = document.getElementById('todo-input');
const addBtn = document.getElementById('add-btn');
const todoList = document.getElementById('todo-list');

addBtn.addEventListener('click', () => {
  const todoText = todoInput.value.trim();

  if (todoText !== '') {
    const li = document.createElement('li');
    li.textContent = todoText;
    li.classList.add('todo-item');

    // Add a click event listener to toggle completion
    li.addEventListener('click', () => {
      li.classList.toggle('completed');
    });

    // Append the new list item to the list
    todoList.appendChild(li);

    // Clear the input field
    todoInput.value = '';
  }
});