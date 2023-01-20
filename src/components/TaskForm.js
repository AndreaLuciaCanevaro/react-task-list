import { useState, useContext } from "react";
import { TaskContext } from "../context/TaskContext";

function TaskForm() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const { createTask } = useContext(TaskContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    /* const newTask = {
      title,
      id          //en principio lo borro porque no le puedo asignar un nuevo id a cada task agregado
    };
   createTask(newTask)*/
    createTask({
      title,
      description,
    });
    /* una vez que se carga la nueva tarea, limpiar el formulario */
    setTitle("");
    setDescription("");
  };
  return (
    <div className="max-w-md mx-auto">
      <form className="bg-slate-800 p-10 mb-4" onSubmit={handleSubmit}>
        <h1 className="text-2xl font-bold text-white mb-3">Create your task</h1>
        <input
          className="bg-slate-300 p-3 w-full mb-2"
          placeholder="Insert your task"
          onChange={(e) => {
            setTitle(e.target.value);
          }}
          value={title}
          autoFocus
        />
        <textarea
          className="bg-slate-300 p-3 w-full mb-2"
          placeholder="Task description"
          onChange={(e) => setDescription(e.target.value)}
          value={description}
        ></textarea>
        <button className="bg-indigo-500 px-3 py-1 text-white">Save</button>
      </form>
    </div>
  );
}

export default TaskForm;
