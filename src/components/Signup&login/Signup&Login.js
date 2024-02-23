import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import PersonIcon from "@mui/icons-material/Person";
import MailIcon from "@mui/icons-material/Mail";
import LockSharpIcon from "@mui/icons-material/LockSharp";
import "../style.css";

function SignupLogin() {
  const [action, setaction] = useState("Sign Up");
  const [showSignup, setShowSignup] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (showSignup) {
      navigate("/home");
    }
  }, [showSignup, navigate]);
  return (
    <div className="container">
      <div className="header">
        <div className="text">{action}</div>
        <div className="underline"></div>
      </div>
      <div className="inputs">
        {action === "Login" ? (
          <div></div>
        ) : (
          <div className="input">
            <PersonIcon className="icons" />
            <input type="text" placeholder="Name" />
          </div>
        )}
        <div className="input">
          <MailIcon className="icons" />
          <input type="email" placeholder="Email" />
        </div>
        <div className="input">
          <LockSharpIcon className="icons" />
          <input type="password" placeholder="Password" />
        </div>
      </div>
      {action === "Login" && (
        <div className="forgot-password">
          forgot password?<span>click here!</span>{" "}
        </div>
      )}
      {action === "Sign Up" && (
        <div className="forgot-password">
          Have an account?{" "}
          <span
            onClick={() => {
              setaction("Login");
            }}
          >
            Log in
          </span>
        </div>
      )}
      <div className=" submit-container">
        <div
          className={action === "Login" ? "submit gray" : "submit"}
          onClick={() => {
            if (action === "Sign Up") {
              setShowSignup(true);
              navigate("/home");
            } else {
              setaction("Sign Up");
            }
          }}
        >
          Sign Up
        </div>
        <div
          className={action === "Sign Up" ? "submit gray" : "submit"}
          onClick={() => {
            if (action === "Login") {
              setShowSignup(true);
              navigate("/home");
            } else {
              setaction("Login");
            }
          }}
        >
          Login
        </div>
      </div>
    </div>
  );
}

export default SignupLogin;
