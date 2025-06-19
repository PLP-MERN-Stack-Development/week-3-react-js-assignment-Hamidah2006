import { useState, useEffect } from "react";

const Tasks = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos?_limit=10")
      .then((res) => res.json())
      .then((tasks) => {
        setData(tasks);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading...</p>;

  return (
    <div className="p-6">
      <h2 className="text-xl font-bold">Fetched Tasks</h2>
      <ul>
        {data.map((task) => (
          <li key={task.id} className="border p-2">
            {task.title}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Tasks;
