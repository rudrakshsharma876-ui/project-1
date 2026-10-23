// model.ts
let nextId = 1;
/**
 * 3. addTask: Appends a new task with status "todo" and a unique ID.
 */
export function addTask(tasks, title) {
    const newTask = {
        id: nextId++,
        title,
        status: "todo",
    };
    return [...tasks, newTask];
}
/**
 * 4. completeTask: Updates status to "done" for the task matching the given ID.
 */
export function completeTask(tasks, id) {
    return tasks.map((task) => task.id === id ? { ...task, status: "done" } : task);
}
/**
 * 5. filterByStatus: Returns tasks matching the provided status union.
 */
export function filterByStatus(tasks, status) {
    return tasks.filter((task) => task.status === status);
}
// ==========================================
// EXTRA TYPED OPERATIONS (Originality Requirement)
// ==========================================
/**
 * Custom Operation 1: deleteTask
 * Returns a new array with the task matching the given ID removed.
 */
export function deleteTask(tasks, id) {
    return tasks.filter((task) => task.id !== id);
}
/**
 * Custom Operation 2: advanceTask
 * Advances a task step-by-step: "todo" -> "in-progress" -> "done"
 */
export function advanceTask(tasks, id) {
    return tasks.map((task) => {
        if (task.id !== id)
            return task;
        if (task.status === "todo")
            return { ...task, status: "in-progress" };
        if (task.status === "in-progress")
            return { ...task, status: "done" };
        return task;
    });
}
/**
 * Custom Operation 3: countByStatus
 * Returns the total number of tasks matching a specific status.
 */
export function countByStatus(tasks, status) {
    return filterByStatus(tasks, status).length;
}
