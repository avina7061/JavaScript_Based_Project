document.addEventListener("DOMContentLoaded", () => {
  const todoInput = document.getElementById("todo-input");
  const addTaskButton = document.getElementById("add-task-btn");
  const todoList = document.getElementById("todo-list");

  let tasks = [];  // Removed localStorage, tasks will now only live in memory

  // Render existing tasks if any (for future extensions, can be added back)
 

  addTaskButton.addEventListener("click", () => {
    const taskText = todoInput.value.trim();
    if (taskText === "") return;

    const newTask = {
      id: Date.now(),
      text: taskText,
      completed: false,
    };

    tasks.push(newTask);
    renderTask(newTask);
    todoInput.value = ""; // Clear input
    console.log(tasks);
  });

  function renderTask(task) {
    const li = document.createElement("li");
    li.setAttribute("data-id", task.id);
    if (task.completed) li.classList.add("completed");
    li.innerHTML = `
      <span>${task.text}</span>
      <button>delete</button>
    `;

    // Toggle task completion when clicking on the task (not the button)
    li.addEventListener("click", (e) => {
      if (e.target.tagName === "BUTTON") return; // Prevent toggling if it's the delete button
      task.completed = !task.completed;
      li.classList.toggle("completed");
    });

    // Handle task deletion when clicking the delete button
    li.querySelector("button").addEventListener("click", (e) => {
      e.stopPropagation(); // Prevent the toggle from firing
      tasks = tasks.filter((t) => t.id !== task.id); // Remove task from tasks array
      li.remove(); // Remove task from DOM
      console.log(tasks); // Show updated tasks array in the console
    });

    todoList.appendChild(li);
  }
});
