# EduVerse Frontend

The official client-side web application for **EduVerse**, a gamified campus learning and focus platform designed to combat academic procrastination and streamline student workflows.

---

## Tech Stack

- **Framework:** React (v18+)
- **Build Tool:** Vite
- **Styling:** Tailwind CSS
- **Routing:** React Router DOM

---

## Core Pages & Features

The frontend implements the following core modules:

1. **Login Page:** User authentication and role-based entry.
2. **Register Page:** Account creation supporting student/admin profiles.
3. **Dashboard Page:** Overview of user progress, stats, and gamification tracking.
4. **Task Manager Page:** Manual task organization, priority ranking, and milestone tracking.
5. **Focus Mode Page:** Pomodoro-style focus timer with interactive state tracking.
6. **Study Groups Page:** Collaborative campus spaces for peer learning and support.
7. **Achievements Page:** Badge tracking, unlockable milestones, and reward displays.
8. **Research Exchange Hub Page:** Collaborative portal for academic resource sharing and project exchange.

---

## Getting Started Locally

### Prerequisites

Make sure you have **Node.js** (v18+ recommended) installed on your machine.

### Installation Steps

1. Clone the repository:
   ```bash
   git clone [https://github.com/erikafranzellebingco/EduVerse-Frontend.git](https://github.com/erikafranzellebingco/EduVerse-Frontend.git)
   ```
2. Navigate into the project directory:
   ```bash
   cd EduVerse-Frontend
   ```
3. Install dependencies:
   ```bash
   npm install tailwindcss @tailwindcss/vite
   ```
4. Run the development server:
   npm run dev

---

## Project Directory Structure

src/
├── components/ # Reusable UI components (cards, navigation, etc.)
├── pages/ # Core views (Login, Register, Dashboard, TaskManager, FocusMode, StudyGroups, Achievements, ResearchHub)
├── App.jsx # Main application routing configuration
├── main.jsx # Application entry point with BrowserRouter wrapper
└── index.css # Tailwind CSS global styles
"# EduVerse-Frontend" 
