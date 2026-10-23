// app.ts
import { Task, TaskStatus, addTask, advanceTask, deleteTask, filterByStatus } from "./model.js";

let tasks: Task[] = [];
let currentFilter: "all" | TaskStatus = "all";

const titleInput = document.getElementById("title") as HTMLInputElement;
const statusSelect = document.getElementById("status") as HTMLSelectElement;
const addBtn = document.getElementById("add") as HTMLButtonElement;
const listEl = document.getElementById("list") as HTMLUListElement;
const filterBtns = document.querySelectorAll<HTMLButtonElement>(".filter-btn");

addBtn.onclick = () => {
  const title = titleInput.value.trim();
  const status = statusSelect.value as TaskStatus;
  if (!title) return;

  tasks = addTask(tasks, title, status);
  titleInput.value = "";
  render();
};

filterBtns.forEach((btn) => {
  btn.onclick = () => {
    filterBtns.forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");
    currentFilter = btn.dataset.filter as "all" | TaskStatus;
    render();
  };
});

function render() {
  listEl.innerHTML = "";
  const displayedTasks = currentFilter === "all" ? tasks : filterByStatus(tasks, currentFilter);

  displayedTasks.forEach((task) => {
    const li = document.createElement("li");
    li.className = "task";

    li.innerHTML = `
      <div class="task-left">
        <span class="badge ${task.status}">${task.status}</span>
        <span class="task-title">${task.title}</span>
      </div>
      <div class="actions">
        ${task.status !== "done" ? `<button class="btn-action btn-advance">Advance →</button>` : ""}
        <button class="btn-action btn-delete">✕</button>
      </div>
    `;

    const advanceBtn = li.querySelector(".btn-advance") as HTMLButtonElement | null;
    if (advanceBtn) {
      advanceBtn.onclick = () => {
        tasks = advanceTask(tasks, task.id);
        render();
      };
    }

    const deleteBtn = li.querySelector(".btn-delete") as HTMLButtonElement;
    deleteBtn.onclick = () => {
      tasks = deleteTask(tasks, task.id);
      render();
    };

    listEl.appendChild(li);
  });
}