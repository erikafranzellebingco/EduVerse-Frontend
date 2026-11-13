import {
  Routes,
  Route,
  NavLink,
  Navigate,
  useLocation,
} from "react-router-dom";

import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import DashboardPage from "./pages/DashboardPage";
import TaskManagerPage from "./pages/TaskManagerPage";
import FocusModePage from "./pages/FocusModePage";
import StudyGroupsPage from "./pages/StudyGroupsPage";
import AchievementsPage from "./pages/AchievementsPage";
import ResearchHubPage from "./pages/ResearchHubPage";

function App() {
  const location = useLocation();
  const isAuthPage =
    location.pathname === "/login" || location.pathname === "/register";

  const navLinkClass = ({ isActive }) =>
    isActive
      ? "text-[#C8A887] font-semibold border-b-2 border-[#C8A887] pb-1"
      : "text-[#A8A29A] hover:text-[#EFE6DD] transition-colors pb-1";

  return (
    <div className="min-h-screen bg-[#181715] text-[#EFE6DD] flex flex-col">
      {/* hide navbar on login and register pages */}
      {!isAuthPage && (
        <header className="bg-[#211F1D] border-b border-[#33312D]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
            <span
              className="text-xl font-semibold text-[#EFE6DD] tracking-wide"
              style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
            >
              <span className="text-[#C8A887]">E / V</span> EduVerse
            </span>

            <nav className="flex items-center gap-6 text-xs overflow-x-auto">
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
              <div className="h-4 w-px bg-[#33312D] mx-1" />
              <NavLink to="/login" className={navLinkClass}>
                Logout
              </NavLink>
            </nav>
          </div>
        </header>
      )}

      {/* full-bleed wrapper for login and register pages, padded container for other app pages */}
      <main
        className={
          isAuthPage
            ? "flex-1 w-full"
            : "flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8"
        }
      >
        <Routes>
          <Route path="/" element={<Navigate to="/login" replace />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/tasks" element={<TaskManagerPage />} />
          <Route path="/focus" element={<FocusModePage />} />
          <Route path="/study-groups" element={<StudyGroupsPage />} />
          <Route path="/achievements" element={<AchievementsPage />} />
          <Route path="/research-hub" element={<ResearchHubPage />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
