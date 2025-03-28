interface SectionTitleProps {
  title: string;
  highlight: string;
  description: string;
}

const SectionTitle = ({ title, highlight, description }: SectionTitleProps) => {
  return (
    <div className="flex items-center justify-between w-full mb-12">
      <div className="flex flex-col gap-2">
        <h2 className="text-4xl font-extrabold">
          {title} <span className="text-primary">{highlight}</span>
        </h2>
        <p className="text-gray-500">{description}</p>
      </div>
    </div>
  );
};

export default SectionTitle;
