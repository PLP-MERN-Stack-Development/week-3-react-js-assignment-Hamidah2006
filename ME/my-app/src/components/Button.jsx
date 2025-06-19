const variantStyles = {
  primary: "bg-blue-500 hover:bg-blue-600 text-white",
  secondary: "bg-gray-300 hover:bg-gray-400 text-black",
  danger: "bg-red-500 hover:bg-red-600 text-white",
};

const Button = ({ children, variant = "primary", onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 rounded font-medium ${variantStyles[variant]}`}
    >
      {children}
    </button>
  );
};

export default Button;
