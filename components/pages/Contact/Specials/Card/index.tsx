interface CardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const Card = ({ title, description, icon }: CardProps) => {
  return (
    <div className="bg-sky-50 backdrop-blur-sm border border-sky-100 shadow-lg duration-300 rounded-3xl p-6 group cursor-pointer relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      <div className="flex flex-col items-start gap-6 relative">
        <div className="bg-primary/10 p-4 rounded-2xl text-primary">
          {icon}
        </div>
        <div className="space-y-3">
          <h3 className="text-2xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
            {title}
          </h3>
          <p className="text-gray-500 leading-relaxed text-sm">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
