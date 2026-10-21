
import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import AboutPage from "./pages/About";

import RegistrationForm from "./components/RegistrationForm";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutPage />} />
        <Route
          path="/register"
          element={<RegistrationForm />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;