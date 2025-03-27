const SquareCard = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => {
  return (
    <div className="p-6 border border-gray-200 rounded-lg flex flex-col gap-4">
      <h3 className="text-xl font-bold">{title}</h3>
      <p className="text-gray-600 leading-relaxed">{description}</p>
    </div>
  );
};

export default SquareCard;
