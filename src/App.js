import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import LandingPage from "./Landing";
import Homepage from "./Homepage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/homepage" element={<Homepage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
