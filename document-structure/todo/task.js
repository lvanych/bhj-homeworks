let button = document.getElementById("tasks__add");
let inputTask = document.getElementById("task__input");
let tasksList = document.getElementById("tasks__list");

function addTask(evt) {
  evt.preventDefault();
  let text = inputTask.value.trim();
  if (!text) {
    return;
  }
  let task = document.createElement("div");
  task.classList.add("task");
  let taskTitle = document.createElement("div");
  taskTitle.classList.add("task__title");
  taskTitle.textContent = text;
  tasksList.appendChild(task);
  task.appendChild(taskTitle);
  task.insertAdjacentHTML(
    "beforeend",
    '<a href="#" class="task__remove">&times;</a>'
  );
  inputTask.value = "";
  let remove = task.querySelector(".task__remove");

  remove.addEventListener("click", () => {
    task.remove();
  });
}

button.addEventListener("click", addTask);
