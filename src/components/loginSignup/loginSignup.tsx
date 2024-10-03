import React, { useState } from "react";
import "./LoginSignup.css";
import "bootstrap/dist/css/bootstrap.min.css";

const LoginSignup: React.FC = () => {
  const [action, setAction] = useState("Sign Up");
  return (
    <div className="container">
      <div className="header">
        <div className="text">{action}</div>
        <div className="underline"></div>
      </div>
      <div className="inputs">
        {action === "login" ? (
          <div></div>
        ) : (
          <div className="input">
            {/* Provide a valid image source or remove this line */}
            <img src="path_to_image" alt="Icon" />
            <input type="text" placeholder="Enter your user name" />
          </div>
        )}

        <div className="input">
          {/* Provide a valid image source or remove this line */}
          <img src="path_to_image" alt="Icon" />
          <input type="email" placeholder="Enter email" />
        </div>
        <div className="input">
          {/* Provide a valid image source or remove this line */}
          <img src="path_to_image" alt="Icon" />
          <input type="phone number" placeholder="phone number" />
        </div>
        <div className="input">
          {/* Provide a valid image source or remove this line */}
          <img src="path_to_image" alt="Icon" />
          <input type="location" placeholder="Enter your current location" />
        </div>
        <div className="input">
          {/* Provide a valid image source or remove this line */}
          <i class="bi bi-geo-alt"></i>
          <input type="password" placeholder="password" />
        </div>
      </div>
      {action === "Sign Up" ? (
        <div></div>
      ) : (
        <div ClassName="forgot-password">
          forgot password?<span>Click here</span>
        </div>
      )}

      <div ClassName="submit-container">
        <div
          className={action === "login" ? "submit gray" : "submit"}
          onClick={() => {
            setAction("Sign Up");
          }}
        >
          Sign Up
        </div>
        <div
          className={action === "Sign Up" ? "submit gray" : "submit"}
          onClick={() => {
            setAction("login");
          }}
        >
          login
        </div>
      </div>
    </div>
  );
};

export default LoginSignup;
