import React, { useState } from "react";
import "./SignUpPopup.scss";

const SignUpPopup = ({ handleProceedToCheckout, showPopup, setShowPopup }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const [isNewUser, setIsNewUser] = useState(false);
  const [agreePolicy, setAgreePolicy] = useState(false);

  function handleFirstNameChange(event) {
    setFirstName(event.target.value);
  }

  function handleLastNameChange(event) {
    setLastName(event.target.value);
  }

  function handleEmailChange(event) {
    setEmail(event.target.value);
  }

  function handlePasswordChange(event) {
    setPassword(event.target.value);
  }

  function handleRepeatPasswordChange(event) {
    setRepeatPassword(event.target.value);
  }

  function handleRegistrationOptionChange(event) {
    setIsNewUser(event.target.checked);
  }

  function handleAgreePolicyChange(event) {
    setAgreePolicy(event.target.checked);
  }

  function handleLogin(event) {
    event.preventDefault();



    handleProceedToCheckout();
  }

  function handleRegister(event) {
    event.preventDefault();

   

    handleProceedToCheckout();
  }

  function handleClosePopup() {
    setShowPopup(false);
  }

  return (
    <div className="signup-popup">
      <div className="content">
     <div className="cancel"> <button  onClick={handleClosePopup}>X</button></div>
        <h2>{isNewUser ? "New Customer" : "Log In"}</h2>
        <form onSubmit={isNewUser ? handleRegister : handleLogin}>
          {isNewUser && (
            <>
              <div className="form-group">
                <label htmlFor="firstName">First Name:</label>
                <input
                  type="text"
                  id="firstName"
                  value={firstName}
                  onChange={handleFirstNameChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="lastName">Last Name:</label>
                <input
                  type="text"
                  id="lastName"
                  value={lastName}
                  onChange={handleLastNameChange}
                />
              </div>
            </>
          )}
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={handleEmailChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={handlePasswordChange}
            />
          </div>
          {isNewUser && (
            <div className="form-group">
              <label htmlFor="repeatPassword">Confirm Password:</label>
              <input
                type="password"
                id="repeatPassword"
                value={repeatPassword}
                onChange={handleRepeatPasswordChange}
              />
            </div>
          )}
          {isNewUser && (
            <div className="checkbox">
              <label>
                <input
                  type="checkbox"
                  checked={agreePolicy}
                  onChange={() => {
                    setAgreePolicy(!agreePolicy);
                  }}
                />
                <span>
                  {" "}
                  I agree that HUGSTORE may use my personal data to manage my
                  personal account in accordance with the Privacy{" "}
                  <a href="http://" target="_blank" rel="noopener noreferrer">
                    Policy
                  </a>
                </span>
              </label>
            </div>
          )}

          <div className="buttons">
            <a href="http://" target="_blank" rel="noopener noreferrer">Forgot your password?</a>
            <div>
              <button type="submit">{isNewUser ? "Register" : "Log In"}</button>
             
            </div>
          </div>
        </form>
        {!isNewUser && (
          <div className="register-option">
            <p>Don't have an account?</p>
            <button onClick={() => setIsNewUser(true)}>Register</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default SignUpPopup;
