document.getElementById('taskForm').addEventListener('submit', function (e) {
    e.preventDefault();
    const taskInput = document.getElementById('taskInput');
    const taskList = document.getElementById('taskList');
    if (taskInput.value.trim() === '') {
      alert('Please enter a task before adding!');
      return;
    }
    const li = document.createElement('li');
    li.innerHTML = `
      <span>${taskInput.value}</span>
      <div class="button-group">
        <button class="edit">Edit</button>
        <button class="delete">Delete</button>
      </div>
    `;
    taskList.appendChild(li);
    taskInput.value = '';
  });
  
  document.getElementById('taskList').addEventListener('click', function (e) {
    if (e.target.classList.contains('delete')) {
      if (confirm('Are you sure you want to delete this task?')) {
        e.target.parentElement.parentElement.remove();
      }
    }
    if (e.target.classList.contains('edit')) {
      const taskText = e.target.parentElement.parentElement.querySelector('span');
      const newTask = prompt('Edit task', taskText.innerText);
      if (newTask) {
        taskText.innerText = newTask;
      }
    }
  });



  
  