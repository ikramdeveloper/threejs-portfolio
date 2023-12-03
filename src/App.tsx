import "./index.css";
import "react-toastify/dist/ReactToastify.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { AboutPage, ContactPage, HomePage, ProjectsPage } from "@/pages";
import { Navbar } from "@/components/_shared";

export const App = () => {
  return (
    <main className="bg-slate-300/20">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </BrowserRouter>
      <ToastContainer position="top-center" />
    </main>
  );
};
