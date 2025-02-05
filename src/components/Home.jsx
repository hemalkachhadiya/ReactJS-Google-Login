import React, { useContext, useState, useEffect } from "react";
import { auth, googleProvider } from "../config/firebaseConfig";
import { signInWithPopup, signOut, onAuthStateChanged } from "firebase/auth";
import ActiveContext from "../Context/DemoContextProvider";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const { user, setUser } = useContext(ActiveContext);
  const navigate = useNavigate();

  // Listen for auth state changes (page refresh handling)
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser); // Set user to context when logged in
      } else {
        setUser(null); // Clear user context when logged out
      }
    });

    // Cleanup the listener on unmount
    return () => unsubscribe();
  }, [setUser]);

  // Handle Logout
  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigate("/");
      setUser(null); // Clear the user from context after logout
    } catch (error) {
      console.error("Error signing out:", error);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-zinc-950 text-white">
      <div className="w-full max-w-sm p-6 bg-white/10 backdrop-blur-md shadow-lg rounded-lg">
        {/* If user is logged in, show details */}
        {user && (
          <div className="flex flex-col items-center text-center">
            {/* Profile Image */}
            <img
              src={user?.photoURL}
              alt="User"
              className="w-20 h-20 rounded-full border-4 border-blue-500 shadow-md"
            />
            <h2 className="mt-4 text-2xl font-semibold">{user?.displayName}</h2>
            <p className="text-gray-300">{user?.email}</p>

            {/* Logout Button */}
            <button
              onClick={handleLogout}
              className="mt-5 w-full bg-red-600 hover:bg-red-700 text-white font-medium py-2 rounded-lg transition-all duration-300"
            >
              Logout
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
