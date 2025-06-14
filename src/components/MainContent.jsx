import WelcomeHeader from "./WelcomeHeader";
import JobSearchBar from "./JobSearchBar";
import TagFilters from "./TagFilters";
import JobSection from "./JobSection";
import teams from "../assets/teams.png";

const MainContent = () => {
  const featuredJobs = [
    {
      logo: teams,
      title: "Frontend Developer",
      company: "Teams",
      location: "Remote",
      time: "2 days ago",
      applicants: "35 applicants",
      isPromoted: true,
    },
    {
      logo: teams,
      title: "UI/UX Designer",
      company: "Meta",
      location: "Seattle, USA (Remote)",
      time: "5 hours ago",
      applicants: "18 applicants",
      isPromoted: true,
    },
    {
      logo: teams,
      title: "UI/UX Designer",
      company: "Teams",
      location: "Seattle, USA (Remote)",
      time: "5 hours ago",
      applicants: "18 applicants",
      isPromoted: true,
    },
    {
      logo: teams,
      title: "UI/UX Designer",
      company: "Meta",
      location: "Seattle, USA",
      time: "5 hours ago",
      applicants: "18 applicants",
      isPromoted: true,
    },
    {
      logo: teams,
      title: "UI/UX Designer",
      company: "Meta",
      location: "Seattle, USA (Remote)",
      time: "5 hours ago",
      applicants: "18 applicants",
      isPromoted: true,
    },
    
  ];

  const recommendedJobs = [
    {
      logo: teams,
      title: "Frontend Developer",
      company: "Google",
      location: "Mountain View, USA",
      time: "2 days ago",
      applicants: "35 applicants",
      isPromoted: false,
    },
    {
      logo: teams,
      title: "UI/UX Designer",
      company: "Meta",
      location: "Remote",
      time: "1 day ago",
      applicants: "22 applicants",
      isPromoted: false,
    },
    {
      logo: teams,
      title: "UI/UX Designer",
      company: "Meta",
      location: "Remote",
      time: "1 day ago",
      applicants: "22 applicants",
      isPromoted: false,
    },
    {
      logo: teams,
      title: "UI/UX Designer",
      company: "Meta",
      location: "Remote",
      time: "1 day ago",
      applicants: "22 applicants",
      isPromoted: false,
    },
    {
      logo: teams,
      title: "UI/UX Designer",
      company: "Meta",
      location: "Remote",
      time: "1 day ago",
      applicants: "22 applicants",
      isPromoted: false,
    },
  ];

  const latestJobs = [
    {
      logo: teams,
      title: "Backend Developer",
      company: "Amazon",
      location: "Seattle, USA",
      time: "3 hours ago",
      applicants: "5 applicants",
      isPromoted: false,
    },
    {
      logo: teams,
      title: "Product Manager",
      company: "Netflix",
      location: "Remote",
      time: "6 hours ago",
      applicants: "18 applicants",
      isPromoted: false,
    },
    {
      logo: teams,
      title: "Product Manager",
      company: "Netflix",
      location: "Remote",
      time: "6 hours ago",
      applicants: "18 applicants",
      isPromoted: false,
    },
  ];

  return (
    <div className="p-2 min-h-screen">
      <WelcomeHeader />
      <JobSearchBar />
      <TagFilters />

      <JobSection
        title="Featured Jobs"
        jobs={featuredJobs}
        linkText="See Featured Jobs"
      />
      <JobSection
        title="Recommended Jobs"
        jobs={recommendedJobs}
        linkText="See Recommended Jobs"
      />
      <JobSection
        title="Latest Jobs"
        jobs={latestJobs}
        linkText="See Latest Jobs"
      />
    </div>
  );
};

export default MainContent;
