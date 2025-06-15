import Sidebar from "./components/sidebar/Sidebar";
import Navbar from "./components/Navbar";
import MainContent from "./components/MainContent";
import { Route, Routes } from "react-router-dom";

import "./App.css";
import TopCompanies from "./pages/TopCompanies";
import JobTracker from "./pages/JobTracker";
import Documents from "./pages/Documents";

function App() {
  return (
    <>
      <Routes>
        <Route path="/">
          {/* <Route index element={<MainContent />} /> */}
          <Route path="top-companies" element={<TopCompanies />} />
          <Route path="job-tracker" element={<JobTracker />} />
          <Route path="documents" element={<Documents />} />
        </Route>
      </Routes>
      <Navbar />

      {/* Responsive Layout */}
      <div className="flex flex-col lg:flex-row min-h-screen bg-gray-100 p-8">
        {/* Sidebar wil hide on small screen */}
        <aside className="hidden lg:block lg:w-1/5">
          <Sidebar />
        </aside>

        {/* Main Content*/}
        <main className="w-full lg:w-4/5 pl-4 pt-2">
          <MainContent />
        </main>
      </div>
    </>
  );
}

export default App;
