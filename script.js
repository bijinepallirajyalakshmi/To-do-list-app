const addTaskBtn = document.getElementById('addTaskBtn');
const taskInput = document.getElementById('taskInput');
const taskList = document.getElementById('taskList');

// Add Task
addTaskBtn.addEventListener('click', () => {
  const taskText = taskInput.value.trim();
  if (taskText === '') return;

  const li = document.createElement('li');
  li.innerHTML = `${taskText} <button class="delete-btn">X</button>`;
  
  // Mark task as complete
  li.addEventListener('click', (e) => {
    if (e.target.tagName !== 'BUTTON') {
      li.classList.toggle('completed');
    }
  });

  // Delete task
  li.querySelector('.delete-btn').addEventListener('click', () => {
    li.remove();
  });

  taskList.appendChild(li);
  taskInput.value = '';
});
