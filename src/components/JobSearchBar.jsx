import search from '../assets/search.png';

const JobSearchBar = () => {
  return (
    <div className="bg-white mt-6 p-5 rounded-lg shadow-sm flex flex-col md:flex-row gap-3 md:items-center">
      <input
        type="text"
        placeholder="Job Title, Company, or Keywords"
        className="p-2 w-full md:w-[60%] focus:outline-none border-gray-200 border-r-1 font-medium"
      />
      <select className="p-2 rounded w-full md:w-[15%] font-medium text-gray outline-none">
        <option>Select Location</option>
        <option value="US">US</option>
      </select>
      <select className="p-2 rounded w-full md:w-[10%] border-gray-200 border-l-1 font-medium text-gray outline-none">
        <option>Job Type</option>
        <option value="Remote">Remote</option>
        <option value="On-Site">On Site</option>
      </select>
      <button className="bg-primary font-medium text-white px-4 py-2 rounded-lg flex items-center justify-center w-full md:w-[15%]">
       <img className='mr-3' src={search} /> Search
      </button>
    </div>
  );
};

export default JobSearchBar;
