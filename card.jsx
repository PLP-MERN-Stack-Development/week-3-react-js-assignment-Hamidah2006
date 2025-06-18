const Card = ({ title, children }) => {
  return (
    <div className="p-4 border rounded shadow-md bg-white">
      <h3 className="text-lg font-bold">{title}</h3>
      <div>{children}</div>
    </div>
  );
};

export default Card;
