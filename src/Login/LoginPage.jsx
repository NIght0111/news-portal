// import React from "react";
// import { Link } from "react-router-dom";
// import { FaGoogle, FaFacebookF, FaApple } from "react-icons/fa"; // import icons
// import "./LoginPage.css";

// const LoginPage = () => {
//   return (
//     <div className="login-container">
//       <div className="login-box">
//         <h1 className="logo">SAMASTA KHABAR</h1>
//         <h2 className="heading">LOGIN TO YOUR ACCOUNT</h2>
//         <p className="subtext">Sign In to Get the Latest Updates</p>

//         <div className="login-content">
//           <div className="login-left">
//             <input type="text" placeholder="Email / Phone" className="input" />
//             <input type="password" placeholder="Password" className="input" />
//             <button className="login-button">Login to Your Account →</button>
//           </div>

//           <div className="login-right">
//             <button className="social-button">
//               <FaGoogle className="social-icon" /> Sign in with Gmail
//             </button>
//             <button className="social-button">
//               <FaFacebookF className="social-icon" /> Sign in with Facebook
//             </button>
//             <button className="social-button">
//               <FaApple className="social-icon" /> Sign in with Apple
//             </button>
//           </div>
//         </div>

//         <div className="extras">
//           <p className="forgot">Forgot Passcode?</p>
//           <p className="signup-prompt">Don’t have an account?</p>
//           <Link to="/signup" className="signup-button">
//             Sign up
//           </Link>
//         </div>

//         <div className="footer">
//           <p>Privacy Policy | Terms & Conditions</p>
//           <p>© All copyright reserved by Samasta Khabar</p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default LoginPage;
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaGoogle, FaFacebookF, FaApple } from "react-icons/fa";
import "./LoginPage.css";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    const storedUser = JSON.parse(localStorage.getItem("userData"));

    if (!storedUser) {
      alert("No user found. Please sign up first.");
      return;
    }

    if (email === storedUser.email && password === storedUser.password) {
      alert("Login successful!");
      navigate("/user"); // redirect to user page
    } else {
      alert("Invalid email or password!");
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h1 className="logo">SAMASTA KHABAR</h1>
        <h2 className="heading">LOGIN TO YOUR ACCOUNT</h2>
        <p className="subtext">Sign In to Get the Latest Updates</p>

        <div className="login-content">
          <div className="login-left">
            <input
              type="text"
              placeholder="Email / Phone"
              className="input"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              placeholder="Password"
              className="input"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button className="login-button" onClick={handleLogin}>
              Login to Your Account →
            </button>
          </div>

          <div className="login-right">
            <button className="social-button">
              <FaGoogle className="social-icon" /> Sign in with Gmail
            </button>
            <button className="social-button">
              <FaFacebookF className="social-icon" /> Sign in with Facebook
            </button>
            <button className="social-button">
              <FaApple className="social-icon" /> Sign in with Apple
            </button>
          </div>
        </div>

        <div className="extras">
          <p className="forgot">Forgot Passcode?</p>
          <p className="signup-prompt">Don’t have an account?</p>
          <Link to="/signup" className="signup-button">
            Sign up
          </Link>
        </div>

        <div className="footer">
          <p>Privacy Policy | Terms & Conditions</p>
          <p>© All copyright reserved by Samasta Khabar</p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
