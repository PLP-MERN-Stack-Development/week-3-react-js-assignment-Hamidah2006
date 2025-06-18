import { useState, useEffect } from "react";
import Button from "./Button";

const TaskManager = () => {
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    const savedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
    setTasks(savedTasks);
  }, []);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = () => {
    const taskInput = document.getElementById("taskInput").value;
    if (taskInput.trim()) {
      setTasks([...tasks, { text: taskInput, completed: false }]);
      document.getElementById("taskInput").value = "";
    }
  };

  const toggleTask = (index) => {
    setTasks(tasks.map((task, i) => (i === index ? { ...task, completed: !task.completed } : task)));
  };

  const deleteTask = (index) => setTasks(tasks.filter((_, i) => i !== index));

  const filteredTasks = tasks.filter((task) => {
    if (filter === "active") return !task.completed;
    if (filter === "completed") return task.completed;
    return true;
  });

  return (
    <div className="max-w-md mx-auto p-4 bg-gray-100 rounded shadow">
      <input type="text" id="taskInput" className="border p-2 w-full mb-2" placeholder="Add a new task..." />
      <Button variant="primary" onClick={addTask}>Add Task</Button>

      <div className="mt-4 flex gap-2">
        <Button onClick={() => setFilter("all")}>All</Button>
        <Button onClick={() => setFilter("active")}>Active</Button>
        <Button onClick={() => setFilter("completed")}>Completed</Button>
      </div>

      <ul className="mt-4">
        {filteredTasks.map((task, index) => (
          <li key={index} className="flex justify-between p-2 border">
            <span className={task.completed ? "line-through" : ""}>{task.text}</span>
            <div>
              <Button variant="secondary" onClick={() => toggleTask(index)}>Toggle</Button>
              <Button variant="danger" onClick={() => deleteTask(index)}>Delete</Button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskManager;
