import './App.css';
import Sidebar from './components/layout/Sidebar';
import AboutPage from "./components/pages/AboutPage";
import ProjectsPage from "./components/pages/ProjectsPage";
import ContactPage from "./components/pages/ContactPage";
import HomePage from './components/pages/HomePage';
import ExperiencePage from "./components/pages/ExperiencePage";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import DvdJack from "./components/layout/JackFloat";


function App() {

  return (
    <>
      <DvdJack />

      <BrowserRouter>
        <Sidebar />

        <main className="main-content">
          <Routes>
            <Route path="/" element={<Navigate to="/home" replace />} />
            <Route path="/home" element={<HomePage/>} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/experience" element={<ExperiencePage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </main>
      </BrowserRouter>
    </>
  );
}

export default App;
