import JobCard from "./JobCard";

const JobSection = ({ title, jobs , linkText }) => {
  return (
    <div className="mt-8">
      <div className="flex items-center mb-4">
        <h2 className="text-lg font-semibold text-gray-800 mr-3">{title}</h2>
        <a href="#" className="text-primary font-medium text-sm hover:underline">
          {linkText}
        </a>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {jobs.map((job, index) => (
          <JobCard key={index} {...job} />
        ))}
      </div>
    </div>
  );
};

export default JobSection;
