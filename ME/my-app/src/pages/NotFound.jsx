import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="p-10 text-center">
      <h1 className="text-4xl font-bold text-red-600 mb-4">404 - Page Not Found</h1>
      <p className="text-gray-600 mb-4">
        Oops! The page you're looking for doesn't exist.
      </p>
      <Link
        to="/"
        className="inline-block px-6 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded"
      >
        Go Home
      </Link>
    </div>
  );
};

export default NotFound;
