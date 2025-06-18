const Button = ({ variant = "primary", children, onClick }) => {
  const baseStyles = "px-4 py-2 rounded focus:outline-none";
  const variantStyles = {
    primary: "bg-blue-500 text-white hover:bg-blue-600",
    secondary: "bg-gray-500 text-white hover:bg-gray-600",
    danger: "bg-red-500 text-white hover:bg-red-600",
  };

  return (
    <button className={`${baseStyles} ${variantStyles[variant]}`} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
