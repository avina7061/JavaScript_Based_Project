document.querySelector('#push').addEventListener('click', function() {
    const taskInput = document.querySelector('#newtask input');
    if (taskInput.value.length === 0) {
        alert("Please Enter a Task");
    } else {
        // Create new task element and add it to the task list
        const task = document.createElement('div');
        task.classList.add('task');
        task.innerHTML = `
            <span id="taskname">${taskInput.value}</span>
            <button class="delete">
                <i class="far fa-trash-alt"></i>
            </button>
        `;
        
        document.querySelector('#tasks').appendChild(task);
        
        // Clear input field
        taskInput.value = "";

        // Add event listener for delete button
        const deleteButton = task.querySelector('.delete');
        deleteButton.addEventListener('click', function() {
            task.remove();
        });

        // Add event listener for task click (toggle 'completed' class)
        task.addEventListener('click', function() {
            task.classList.toggle('completed');
        });
    }
});
