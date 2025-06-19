import Card from "../components/Card";

const Home = () => {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">Welcome to MyApp</h1>
      <Card title="React + Tailwind CSS App">
        <p className="text-gray-700">
          This is a lightweight, modular, and scalable front-end application built with React, Tailwind CSS, and Vite.
        </p>
        <p className="mt-2 text-sm text-gray-500">
          Navigate through the app using the navbar above to explore features like task management and API fetching.
        </p>
      </Card>
    </div>
  );
};

export default Home;
