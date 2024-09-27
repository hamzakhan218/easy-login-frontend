import { Route, Routes, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { Toaster } from "sonner";
import LandingPage from "./components/Landing";
import Homepage from "./components/Homepage";
import "./App.css";

function App() {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("authToken");
    if (token) {
      navigate("/homepage");
    }
  }, []);

  return (
    <div className="App">
      <Toaster position="top-right" richColors />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/homepage" element={<Homepage />} />
      </Routes>
    </div>
  );
}

export default App;
