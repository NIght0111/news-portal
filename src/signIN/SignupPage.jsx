// import React from "react";
// import { Link } from "react-router-dom";
// import "./SignupPage.css";

// const SignupPage = () => {
//   return (
//     <div className="signup-container">
//       <div className="signup-box">
//         <h1 className="logo">SAMASTA KHABAR</h1>
//         <h2 className="heading">CREATE AN ACCOUNT</h2>
//         <p className="subtext">
//           Already have an account? <Link to="/login">Log in</Link>
//         </p>

//         <div className="signup-form">
//           <div className="form-row">
//             <input type="text" placeholder="First name" className="input" />
//             <input type="text" placeholder="Last name" className="input" />
//           </div>
//           <input type="email" placeholder="Email address" className="input" />
//           <div className="form-row">
//             <input type="password" placeholder="Password" className="input" />
//             <input
//               type="password"
//               placeholder="Confirm your password"
//               className="input"
//             />
//           </div>

//           <div className="account-type">
//             <label>Create an Account as:</label>
//             <div className="radio-options">
//               <label>
//                 <input type="radio" name="role" /> User
//               </label>
//               <label>
//                 <input type="radio" name="role" /> News Reporter
//               </label>
//             </div>
//           </div>

//           <button className="signup-button">Create an account</button>
//         </div>

//         <div className="footer">
//           <p>Privacy Policy | Terms & Conditions</p>
//           <p>© All copyright reserved by Samasta Khabar</p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SignupPage;
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./SignupPage.css";

const SignupPage = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [role, setRole] = useState("");
  const navigate = useNavigate();

  const handleSignup = () => {
    if (!email || !password || !confirmPassword || !role) {
      alert("Please fill all fields!");
      return;
    }

    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    const userData = {
      firstName,
      lastName,
      email,
      password,
      role,
    };

    localStorage.setItem("userData", JSON.stringify(userData));

    alert("Account created successfully!");
    navigate("/login"); // Redirect to login after signup
  };

  return (
    <div className="signup-container">
      <div className="signup-box">
        <h1 className="logo">SAMASTA KHABAR</h1>
        <h2 className="heading">CREATE AN ACCOUNT</h2>
        <p className="subtext">
          Already have an account? <Link to="/login">Log in</Link>
        </p>

        <div className="signup-form">
          <div className="form-row">
            <input
              type="text"
              placeholder="First name"
              className="input"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
            <input
              type="text"
              placeholder="Last name"
              className="input"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>
          <input
            type="email"
            placeholder="Email address"
            className="input"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <div className="form-row">
            <input
              type="password"
              placeholder="Password"
              className="input"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <input
              type="password"
              placeholder="Confirm your password"
              className="input"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>

          <div className="account-type">
            <label>Create an Account as:</label>
            <div className="radio-options">
              <label>
                <input
                  type="radio"
                  name="role"
                  value="User"
                  onChange={(e) => setRole(e.target.value)}
                />{" "}
                User
              </label>
              <label>
                <input
                  type="radio"
                  name="role"
                  value="News Reporter"
                  onChange={(e) => setRole(e.target.value)}
                />{" "}
                News Reporter
              </label>
            </div>
          </div>

          <button className="signup-button" onClick={handleSignup}>
            Create an account
          </button>
        </div>

        <div className="footer">
          <p>Privacy Policy | Terms & Conditions</p>
          <p>© All copyright reserved by Samasta Khabar</p>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;
