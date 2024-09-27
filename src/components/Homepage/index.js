import axios from "axios";
import React, { useEffect, useState } from "react";
import { toast } from "sonner";
import { useLocation, useNavigate } from "react-router-dom";

function Homepage() {
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState(null);

  const navigate = useNavigate();
  const location = useLocation();

  const handleLogout = () => {
    axios
      .get(process.env.REACT_APP_API_URL + "/logout", {
        withCredentials: true,
      })
      .then((res) => {
        toast.success(res.data.message);
        localStorage.removeItem("authToken");
      })
      .catch((err) => {
        toast(err.response.data.message);
      });
    navigate("/");
  };

  const fetchCurrentUser = async (token) => {
    setLoading(true);
    axios
      .get(process.env.REACT_APP_API_URL + "/current_user", {
        withCredentials: true,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        setUser(res.data);
        navigate("/homepage");
      })
      .catch((err) => {
        console.log("Error fetching current user:", err);
        navigate("/");
        localStorage.removeItem("token");
      });
    setLoading(false);
  };

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const token = params.get("token") || localStorage.getItem("authToken");
    if (token) {
      localStorage.setItem("authToken", token);
      fetchCurrentUser(token);
    } else {
      navigate("/");
    }
  }, []);

  return (
    <>
      {loading ? (
        <div className="loader-container">
          <div className="loader"></div>
        </div>
      ) : (
        <div className="flex flex-col min-h-screen">
          <header className="bg-blue-600 text-white p-6">
            <h1 className="text-3xl font-bold text-center">Welcome!</h1>
          </header>
          <main className="flex-grow flex flex-col items-center justify-center p-8">
            <h2 className="text-2xl font-semibold">Your Details:</h2>
            <p className="mt-4">Email: {user?.email}</p>
            <p className="mt-2">User ID: {user?.id}</p>
            <p className="mt-2">Facebook ID: {user?.facebookId}</p>
            <p className="mt-2">Name: {user?.name}</p>
            <button
              onClick={handleLogout}
              className="mt-6 bg-red-600 text-white px-6 py-3 rounded hover:bg-red-700 transition"
            >
              Logout
            </button>
          </main>
          <footer className="bg-gray-800 text-white p-4 text-center">
            <p>
              &copy; {new Date().getFullYear()} EasyLogin App. All rights
              reserved.
            </p>
          </footer>
        </div>
      )}
    </>
  );
}

export default Homepage;
