import { Routes, Route, NavLink, Navigate } from "react-router-dom";

import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import DashboardPage from "./pages/DashboardPage";
import TaskManagerPage from "./pages/TaskManagerPage";
import FocusModePage from "./pages/FocusModePage";
import StudyGroupsPage from "./pages/StudyGroupsPage";
import AchievementsPage from "./pages/AchievementsPage";
import ResearchHubPage from "./pages/ResearchHubPage";

function App() {
  // Helper function for active link styling in Tailwind
  const navLinkClass = ({ isActive }) =>
    isActive
      ? "text-indigo-600 font-semibold border-b-2 border-indigo-600 pb-1"
      : "text-gray-600 hover:text-indigo-600 transition-colors pb-1";

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 flex flex-col">
      {/* Navigation Bar */}
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <span className="text-xl font-bold text-indigo-600 tracking-tight">
            EduVerse
          </span>

          <nav className="flex items-center gap-6 text-sm overflow-x-auto">
            <NavLink to="/dashboard" className={navLinkClass}>
              Dashboard
            </NavLink>
            <NavLink to="/tasks" className={navLinkClass}>
              Task Manager
            </NavLink>
            <NavLink to="/focus" className={navLinkClass}>
              Focus Mode
            </NavLink>
            <NavLink to="/study-groups" className={navLinkClass}>
              Study Groups
            </NavLink>
            <NavLink to="/achievements" className={navLinkClass}>
              Achievements
            </NavLink>
            <NavLink to="/research-hub" className={navLinkClass}>
              Research Hub
            </NavLink>
            <div className="h-4 w-px bg-gray-300 mx-1" />
            <NavLink to="/login" className={navLinkClass}>
              Login
            </NavLink>
            <NavLink to="/register" className={navLinkClass}>
              Register
            </NavLink>
          </nav>
        </div>
      </header>

      {/* Main Page Content Area */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Routes>
          {/* Default redirect to Login */}
          <Route path="/" element={<Navigate to="/login" replace />} />

          {/* Auth Routes */}
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />

          {/* Core Application Routes */}
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/tasks" element={<TaskManagerPage />} />
          <Route path="/focus" element={<FocusModePage />} />
          <Route path="/study-groups" element={<StudyGroupsPage />} />
          <Route path="/achievements" element={<AchievementsPage />} />
          <Route path="/research-hub" element={<ResearchHubPage />} />

          {/* Catch-all 404 Fallback */}
          <Route
            path="*"
            element={
              <div className="text-center py-20">
                <h2 className="text-2xl font-bold text-gray-800">
                  404 - Page Not Found
                </h2>
                <p className="text-gray-500 mt-2">
                  The page you are looking for does not exist.
                </p>
              </div>
            }
          />
        </Routes>
      </main>
    </div>
  );
}

export default App;
