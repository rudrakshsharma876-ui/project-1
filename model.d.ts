export type TaskStatus = "todo" | "in-progress" | "done";
export interface Task {
    id: number;
    title: string;
    status: TaskStatus;
}
/**
 * 3. addTask: Appends a new task with status "todo" and a unique ID.
 */
export declare function addTask(tasks: Task[], title: string): Task[];
/**
 * 4. completeTask: Updates status to "done" for the task matching the given ID.
 */
export declare function completeTask(tasks: Task[], id: number): Task[];
/**
 * 5. filterByStatus: Returns tasks matching the provided status union.
 */
export declare function filterByStatus(tasks: Task[], status: TaskStatus): Task[];
/**
 * Custom Operation 1: deleteTask
 * Returns a new array with the task matching the given ID removed.
 */
export declare function deleteTask(tasks: Task[], id: number): Task[];
/**
 * Custom Operation 2: advanceTask
 * Advances a task step-by-step: "todo" -> "in-progress" -> "done"
 */
export declare function advanceTask(tasks: Task[], id: number): Task[];
/**
 * Custom Operation 3: countByStatus
 * Returns the total number of tasks matching a specific status.
 */
export declare function countByStatus(tasks: Task[], status: TaskStatus): number;
//# sourceMappingURL=model.d.ts.map