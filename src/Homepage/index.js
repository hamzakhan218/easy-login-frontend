import axios from "axios";
import React from "react";

function Homepage() {
  const [user, setUser] = React.useState({
    name: "Guest",
    email: "",
    id: "",
  });

  const onLogout = () => {
    axios
      .get(process.env.REACT_APP_API_URL + "/logout", {
        withCredentials: true,
      })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-blue-600 text-white p-6">
        <h1 className="text-3xl font-bold text-center">
          Welcome, {user.name}!
        </h1>
      </header>
      <main className="flex-grow flex flex-col items-center justify-center p-8">
        <h2 className="text-2xl font-semibold">Your Details:</h2>
        <p className="mt-4">Email: {user.email}</p>
        <p className="mt-2">User ID: {user.id}</p>
        <button
          onClick={onLogout}
          className="mt-6 bg-red-600 text-white px-6 py-3 rounded hover:bg-red-700 transition"
        >
          Logout
        </button>
      </main>
      <footer className="bg-gray-800 text-white p-4 text-center">
        <p>
          &copy; {new Date().getFullYear()} EasyLogin App. All rights reserved.
        </p>
      </footer>
    </div>
  );
}

export default Homepage;
