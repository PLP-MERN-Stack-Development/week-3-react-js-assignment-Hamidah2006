import { useState, useEffect } from "react";

const TaskManager = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  useEffect(() => {
    const savedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
    setTasks(savedTasks);
  }, []);

  const addTask = () => {
    if (!newTask.trim()) return;
    const updatedTasks = [...tasks, { id: Date.now(), text: newTask, completed: false }];
    setTasks(updatedTasks);
    localStorage.setItem("tasks", JSON.stringify(updatedTasks));
    setNewTask("");
  };

  return (
    <div className="p-6 bg-gray-100 rounded-md">
      <input
        type="text"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
        className="border p-2 w-full"
      />
      <button onClick={addTask} className="mt-2 bg-blue-500 text-white px-4 py-2 rounded">
        Add Task
      </button>
      <ul className="mt-4">
        {tasks.map((task) => (
          <li key={task.id} className="border-b p-2">
            {task.text}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskManager;
