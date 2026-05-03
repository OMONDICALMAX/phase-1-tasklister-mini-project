//Here I decleared the variables as the first step
const form = document.getElementById("create-task-form");
const task = document.getElementById("new-task-description");
const output = document.getElementById("tasks");

//Here I added an event listener capture the user's input and display it on the tasks list.
form.addEventListener("submit", function (event) {
  event.preventDefault();

  const li = document.createElement("li");
  li.textContent = task.value;

  output.appendChild(li);
});
