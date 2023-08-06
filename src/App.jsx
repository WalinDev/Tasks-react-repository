import TaskList from "./components/TaskList";
import { TaskForm } from "./components/TaskForm";
import { TaskContext } from "./context/TaskContext";
import { useContext } from "react";


function App() {
    const {value}=useContext(TaskContext);  
    
  
  ///////////////////////////////////////////////////////////////

  return (
    <main className={value}>
      <div className="container  mx-auto p-10">
        <TaskForm />
        <TaskList />
      </div>
    </main>
  );
}
export default App;
