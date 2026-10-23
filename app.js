// app.ts
import { addTask, advanceTask, deleteTask, filterByStatus } from "./model.js";
let tasks = [];
let currentFilter = "all";
const titleInput = document.getElementById("title");
const statusSelect = document.getElementById("status");
const addBtn = document.getElementById("add");
const listEl = document.getElementById("list");
const filterBtns = document.querySelectorAll(".filter-btn");
addBtn.onclick = () => {
    const title = titleInput.value.trim();
    const status = statusSelect.value;
    if (!title)
        return;
    tasks = addTask(tasks, title, status);
    titleInput.value = "";
    render();
};
filterBtns.forEach((btn) => {
    btn.onclick = () => {
        filterBtns.forEach((b) => b.classList.remove("active"));
        btn.classList.add("active");
        currentFilter = btn.dataset.filter;
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
        const advanceBtn = li.querySelector(".btn-advance");
        if (advanceBtn) {
            advanceBtn.onclick = () => {
                tasks = advanceTask(tasks, task.id);
                render();
            };
        }
        const deleteBtn = li.querySelector(".btn-delete");
        deleteBtn.onclick = () => {
            tasks = deleteTask(tasks, task.id);
            render();
        };
        listEl.appendChild(li);
    });
}
