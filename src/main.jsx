import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./index.css";
import SignupPage from "./signIN/SignupPage.jsx";
import LoginPage from "./Login/LoginPage.jsx";
import UserPage from "./UserPage/UserPage.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<SignupPage />} />
        {/* <Route path="/login" element={<LoginPage />} /> */}
        {/* <Route path="/user" element={<UserPage />} /> */}
      </Routes>
    </Router>
  </StrictMode>
);
