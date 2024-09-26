import React from "react";

function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-blue-600 text-white p-6">
        <h1 className="text-3xl font-bold text-center">Welcome to EasyLogin</h1>
        <p className="text-center mt-2">
          Log in seamlessly with your Facebook account
        </p>
      </header>
      <main className="flex-grow flex flex-col items-center justify-center p-8">
        <h2 className="text-2xl font-semibold text-center">Why Choose Facebook Login?</h2>
        <ul className="mt-4 text-center list-disc list-inside">
          <li>🔒 Secure Authentication</li>
          <li>⚡ Quick and Easy Login</li>
          <li>📱 Access on Any Device</li>
        </ul>
        <button className="mt-6 bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700 transition">
          Login with Facebook
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

export default LandingPage;
