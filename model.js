// model.ts
let nextId = 1;
export function addTask(tasks, title, status = "todo") {
    const newTask = { id: nextId++, title, status };
    return [...tasks, newTask];
}
export function completeTask(tasks, id) {
    return tasks.map((t) => (t.id === id ? { ...t, status: "done" } : t));
}
export function filterByStatus(tasks, status) {
    return tasks.filter((t) => t.status === status);
}
export function advanceTask(tasks, id) {
    return tasks.map((t) => {
        if (t.id !== id)
            return t;
        if (t.status === "todo")
            return { ...t, status: "in-progress" };
        if (t.status === "in-progress")
            return { ...t, status: "done" };
        return t;
    });
}
export function deleteTask(tasks, id) {
    return tasks.filter((t) => t.id !== id);
}
