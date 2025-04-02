import blogs from "@/models/blogs.json";

const Categories = () => {
  const categoryCount = blogs.reduce(
    (acc: { [key: string]: number }, blog: any) => {
      acc[blog.category] = (acc[blog.category] || 0) + 1;
      return acc;
    },
    {}
  );

  const categories = Object.entries(categoryCount).map(([name, count]) => ({
    name,
    count,
  }));

  return (
    <div className="bg-white rounded-xl border border-gray-200 p-6">
      <h2 className="text-xl font-bold mb-4">Kategoriler</h2>
      <div className="space-y-2">
        {categories.map((category, index) => (
          <button
            key={index}
            className="w-full text-left py-2 px-4 rounded-lg hover:bg-gray-50 transition-colors flex items-center justify-between"
          >
            <span>{category.name}</span>
            <span className="text-sm text-gray-500">({category.count})</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default Categories;
