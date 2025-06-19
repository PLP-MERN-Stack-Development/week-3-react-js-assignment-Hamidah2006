const Card = ({ title, children }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-4 max-w-md mx-auto">
      {title && <h2 className="text-lg font-semibold mb-2">{title}</h2>}
      <div>{children}</div>
    </div>
  );
};

export default Card;
