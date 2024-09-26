import { Route, Routes, useNavigate } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { Toaster } from "sonner";
import LandingPage from "./components/Landing";
import Homepage from "./components/Homepage";
import { UserContext } from "./context/user-context";
import "./App.css";

function App() {
  const navigate = useNavigate();
  const { setUser } = useContext(UserContext);
  const [loading, setLoading] = useState(true);

  const fetchCurrentUser = async () => {
    setLoading(true);
    axios
      .get(process.env.REACT_APP_API_URL + "/current_user", {
        withCredentials: true,
      })
      .then((res) => {
        setUser(res.data);
        navigate("/homepage");
      })
      .catch((err) => {
        navigate("/");
        console.log(err);
      });
    setLoading(false);
  };

  useEffect(() => {
    fetchCurrentUser();
  }, []);

  return (
    <div className="App">
      {loading ? (
        <div className="loader-container">
          <div className="loader"></div>
        </div>
      ) : (
        <>
          <Toaster position="top-right" richColors />
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/homepage" element={<Homepage />} />
          </Routes>
        </>
      )}
    </div>
  );
}

export default App;
