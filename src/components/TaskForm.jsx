import { useState, useContext } from "react"
import { TaskContext } from "../context/TaskContext"
export function TaskForm() {
    const [title, setTitle] = useState("")
    const [description, setDescirpcion] = useState("")
    const {createTask}= useContext(TaskContext);
 
    const handleSubmit=(e)=>{
        e.preventDefault();
       createTask({
           title,
           description
       });
    }
    return (
         
      <div className="max-w-md mx-auto">
            <form action="" onSubmit={handleSubmit} className="bg-slate-800 p-10 mb-4"
        
            >
                <h1 className="text-2x1 font-bold text-white mb-3 ">Crea tu tarea</h1>
            <input type="text" placeholder='Escribe tu tarea'className="bg-slate-300 p-3 w-full mb-2" onChange={(e)=>{
                setTitle(e.target.value)
            }}/>
            <textarea name="" id="" cols="30" rows="10" placeholder="Escribe la descripcin de la tarea" className="bg-slate-300 p-3 w-full mb-2" onChange={(e)=>{
                setDescirpcion(e.target.value);
            }}></textarea>
            <button
            className="bg-indigo-500 px-3 py-1 text-white"
            >Guardar</button>
        </form>
      </div>
  )
}

export default TaskForm