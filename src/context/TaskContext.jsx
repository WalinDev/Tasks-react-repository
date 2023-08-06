import { createContext, useState, useEffect } from "react"
import { tareas as data } from "../components/data/task";
export const TaskContext=createContext();

export function TaskContextProvider(props) {
    

    let value="";

    const [tasks, setTasks] = useState([]);
    useEffect(() => {
        setTasks(data);
      }, []);    
    
    const createTask = (task) => {
        setTasks([
          ...tasks,
          {
            title: task.title,
            id: tasks.length,
            description: task.description,
          },
        ]);
      };
      if(tasks.length==0){
        value="bg-zinc-900 h-screen"
      }else{
        value="bg-zinc-900"
      }

      const deleteTask = (taskId) => {
        setTasks(tasks.filter((task) => task.id !== taskId));
      };
    

  return (
   <TaskContext.Provider value={{
    tasks,
    deleteTask,
    createTask,
    value
}} style={value}>
        {props.children}
   </TaskContext.Provider>
  );
}
