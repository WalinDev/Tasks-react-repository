import { useContext } from "react";
import { TaskContext } from "../context/TaskContext";
import TaskCard from "./TaskCard"

function TaskList() {
  const {tasks}=useContext(TaskContext)
  if (tasks.length === 0) {

    return <h1 className="text-white text-4x1 font-bold text-center">No hay tareas aun</h1>;
  }
  return (
    <div className="grid grid-cols-4 gap-2">
      {tasks.map((tasks) => (
        <TaskCard key={tasks.id} task={tasks} />
      ))}
    </div>
  );
}

export default TaskList;
