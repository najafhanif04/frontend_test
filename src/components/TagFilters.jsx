const TagFilters = () => {
  const tags = ["Frontend", "Backend", "Graphic Designer"];

  return (
    <div className="flex gap-3 mt-4 flex-wrap items-center">
      <span className="text-gray-500 font-medium">Similar:</span>
      {tags.map((tag, index) => (
        <button
          key={index}
          className="border border-gray-400 px-4 py-1 rounded-lg text-sm text-gray-700 font-medium hover:bg-gray-100"
        >
          {tag}
        </button>
      ))}
    </div>
  );
};

export default TagFilters;
