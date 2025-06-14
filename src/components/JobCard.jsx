import { Clock, MapPin, Bookmark } from "lucide-react";

const JobCard = ({ logo, title, company, location, time, applicants, isPromoted }) => {
  return (
    <div className="w-full max-w-xs rounded-lg border border-gray-200 bg-white p-4 shadow-sm">
      {isPromoted && (
        <span className="mb-1 inline-block text-xs font-semibold text-gray-600">
          Promoted
        </span>
      )}

      <div className="mb-2 flex items-center gap-2">
        <div className="rounded bg-gray-100 p-2">
          <img src={logo} alt="Company Logo" className="w-6 h-6 object-contain" />
        </div>
        <div>
          <h3 className="text-sm font-medium text-black">{title}</h3>
          <p className="text-xs font-medium text-black">{company}</p>
        </div>
      </div>

      <div className="flex items-center text-xs text-gray font-medium space-x-1 space-y-1">
        <MapPin className="h-4 w-4" />
        <span>{location}</span>
      </div>

      <div className="mt-1 flex items-center text-xs text-gray font-medium space-x-1">
        <Clock className="h-4 w-4" />
        <span>{time}</span>
        <span className="mx-2 text-gray-300">|</span>
        <span className="font-medium text-primary">{applicants}</span>
      </div>

      <div className="mt-4 flex items-center">
        <button className="mr-4 w-full rounded-md bg-primary px-4 py-1.5 text-sm font-medium text-white hover:bg-blue-700">
          Apply Now
        </button>
        <Bookmark className="h-6 w-6 cursor-pointer text-gray-400 hover:text-blue-600" />
      </div>
    </div>
  );
};

export default JobCard;
