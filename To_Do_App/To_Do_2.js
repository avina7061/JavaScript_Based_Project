document.querySelector('.button1').onclick = function () {
    // Check if the input field with class 'abc' is empty
    if (document.querySelector('.abc').value.length == 0) {
        alert("Please Enter a Task");
    } else {
        // Get the input value
        const a = document.querySelector('.abc');

        // Get the element where the task will be written
        const b = document.querySelector('.write');

        // Use innerHTML to append new HTML content as a string
        b.innerHTML += `
             <div class="round">
    <div class="write">
    ${a.value}
    </div>
    <button class="button2">Delete</button>
  </div>
        `;
       

        // Clear the input field after adding the task
        a.value = '';
    }
    
    var current_tasks = document.querySelectorAll(".button2");
    for (var i = 0; i < current_tasks.length; i++) {
        current_tasks[i].onclick = function () {
            this.parentNode.remove();
        }
    }
    var complete_tasks = document.querySelectorAll(".round .write");
    for (var i = 0; i < complete_tasks.length; i++) {
        complete_tasks[i].onclick = function () {
            this.classList.toggle('completed');
        }
    }
};
