import React, { useState } from "react";
import Header from "./Main/Header";
import styled from "styled-components";
import "@stackoverflow/stacks";
import "@stackoverflow/stacks/dist/css/stacks.css";
var shortid = require("shortid");
//test

const Signup = styled.div`
  .signup-container {
    height: 100vh;
    width: 100vw;
    background-color: #f1f2f3;
  }
  .flex-container {
    display: flex;
    flex-direction: row;
    padding: 24px;
    width: 100%;
    height: 100%;
  }
  .signup-intro {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 50vw;
  }
  .intro-imgs-box {
    display: flex;
    flex-direction: row;
    align-items: center;
  }
  .signup-intro :nth-child(1) {
    font-size: 27px;
    margin-bottom: 32px;
    font-weight: 600;
  }
  .signup-intro :nth-last-child(2) {
    margin-bottom: 0;
  }
  .signup-intro > div {
    font-size: 15px;
    margin-bottom: 24px;
    font-weight: 500;
  }
  .intro-imgs {
    width: 30px;
    height: 30px;
    margin-right: 4px;
  }
  .signup-hidden {
    font-size: 21px;
    margin-bottom: 24px;
    width: 421.33px;
    text-align: center;
    font-weight: 500;
  }

  @media screen and (min-width: 806px) {
    .signup-hidden {
      display: none;
    }
  }

  @media screen and (max-width: 806px) {
    .flex-container {
      justify-content: center;
    }
    .signup-intro {
      display: none;
      width: 0;
    }
    .signup-inputbox {
      width: 100vw;
      flex-grow: 1;
    }
  }
  .signup-inputbox {
    width: 50vw;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .signup-with-btns {
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 137.8px;
    width: 316px;
    margin-bottom: 16px;
  }
  .signup-with-google {
    background-color: rgb(248, 249, 249) !important;
    color: rgb(35, 38, 41) !important;
  }
  .signup-with-facebook {
    background-color: rgb(56, 84, 153) !important;
    color: rgb(255, 255, 255) !important;
  }

  .signup-with-btns :nth-child(1) {
    background-color: rgb(248, 249, 249);
  }
  .signup-with-btns :nth-child(2) {
    background-color: rgb(47, 51, 55);
    color: rgb(255, 255, 255);
  }
  .signup-with-btns :nth-child(3) {
    background-color: rgb(56, 84, 153);
    color: rgb(255, 255, 255);
  }
  .signup-with-btn {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    height: 37.8px;
    width: 316px;
    margin-bottom: 6px;
    font-size: 15px;
    font-weight: 600;
    border: #babfc3 solid 1px;
    border-radius: 2%;
  }
  .signup-imgs {
    height: 20px;
    width: 20px;
    margin-right: 4px;
  }
  .signup-inputs {
    width: 316px;
    height: 658.42px;
    border: #babfc3 solid 1px;
    padding: 24px;
    background-color: white;
    border-radius: 2%;
  }
  .signup-input {
    width: 100%;
    height: 32.59px;
  }
  .signup-false-input {
    width: 100%;
    height: 32.59px;
    border: red solid 2px;
  }
  .inputs-info {
    font-size: 15px;
    margin-top: 6px;
    margin-bottom: 2px;
    font-weight: 700;
  }
  .help-box {
    display: flex;
    flex-direction: row;
  }
  .help-box :nth-child(1) {
    margin-right: 4px;
  }
  .help-box :nth-child(2) {
    font-size: 11px;
    font-weight: 600;
  }
  .help-box :nth-child(2) {
    margin-left: 4px;
  }
  .signup-btn {
    width: 100%;
    background-color: #0995fe;
    color: white;
    height: 37.8px;
    border: #babfc3 solid 1px;
    margin-top: 3px;
    margin-bottom: 3px;
    font-size: 15px;
  }
  .valid-inputs {
    color: red;
  }
`;

const SignUp = () => {
  const [display, setDisplay] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [validDisplay, setvalidDisplay] = useState(true);
  const [validEmail, setvalidEmail] = useState(true);
  const [validPassword, setvalidPassword] = useState(true);

  const handleDisplayName = (e) => {
    if (e.target.value.length < 8) {
      setDisplay(e.target.value);
      setvalidDisplay(false);
    } else {
      setDisplay(e.target.value);
      setvalidDisplay(true);
    }
  };

  const handleEmail = (e) => {
    if (e.target.value.includes("@") && e.target.value.includes("com")) {
      setEmail(e.target.value);
      setvalidEmail(true);
    } else {
      setEmail(e.target.value);
      setvalidEmail(false);
    }
  };

  const handlePassword = (e) => {
    let regex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    if (regex.test(e.target.value)) {
      setPassword(e.target.value);
      setvalidPassword(true);
    } else {
      setPassword(e.target.value);
      setvalidPassword(false);
    }
  };

  const reqPost = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      id: shortid.generate(),
      member: {
        //   // userId: shortid.generate(),
        userPw: password,
        username: display,
        email: email,
      },
    }),
  };

  const handleSignUp = (e) => {
    if (
      validDisplay === true &&
      validEmail === true &&
      validPassword === true
    ) {
      fetch("http://localhost:3001/data", reqPost).then((res) => res.json());
    }
  };

  return (
    <>
      <Header></Header>
      <Signup>
        <article className="signup-container">
          <div className="flex-container">
            <section className="signup-intro">
              <div>Join the Stack Overflow community</div>
              <div className="intro-imgs-box">
                <img
                  className="intro-imgs"
                  src={require("../imgs/question.png")}
                ></img>
                <div>Get unstuck — ask a question</div>
              </div>
              <div className="intro-imgs-box">
                <img
                  className="intro-imgs"
                  src={require("../imgs/voting.png")}
                ></img>
                <div>Unlock new privileges like voting and commenting</div>
              </div>
              <div className="intro-imgs-box">
                <img
                  className="intro-imgs"
                  src={require("../imgs/tags.png")}
                ></img>
                <div>Save your favorite tags, filters, and jobs</div>
              </div>
              <div className="intro-imgs-box">
                <img
                  className="intro-imgs"
                  src={require("../imgs/reputation.png")}
                ></img>
                <div>Earn reputation and badges</div>
              </div>
              <p>
                Collaborate and share knowledge with a private group for FREE.
              </p>
              <p>Get Stack Overflow for Teams free for up to 50 users.</p>
            </section>
            <section className="signup-inputbox">
              <div className="signup-hidden">
                Create your Stack Overflow account. It’s free and only takes a
                minute.
              </div>
              <div className="signup-with-btns">
                <button className="signup-with-btn">
                  <img
                    className="signup-imgs"
                    src={require("../imgs/google.png")}
                  ></img>
                  <div className="signup-with-google">Sign up with Google</div>
                </button>
                <button className="signup-with-btn">
                  <img
                    className="signup-imgs"
                    src={require("../imgs/github.png")}
                  ></img>
                  <div className="signup-with-github">Sign up with GitHub</div>
                </button>
                <button className="signup-with-btn">
                  <img
                    className="signup-imgs"
                    src={require("../imgs/facebook.png")}
                  ></img>
                  <div className="signup-with-facebook">
                    Sign up with Facebook
                  </div>
                </button>
              </div>
              <div className="signup-inputs">
                <div className="input-infobox">
                  <div className="inputs-info">Display name</div>
                  <textarea
                    className={
                      validDisplay ? "signup-input" : "signup-false-input"
                    }
                    onChange={(e) => handleDisplayName(e)}
                    value={display}
                  />
                  {validDisplay ? null : (
                    <span className="valid-inputs">Contain at least 8.</span>
                  )}
                </div>
                <div className="input-emailbox">
                  <div className="inputs-info">Email</div>
                  <textarea
                    className={
                      validEmail ? "signup-input" : "signup-false-input"
                    }
                    onChange={(e) => handleEmail(e)}
                    value={email}
                  />
                  {validEmail ? null : (
                    <span className="valid-inputs">Unvalid e-mail form.</span>
                  )}
                </div>
                <div className="input-passwordbox">
                  <div className="inputs-info">Password</div>
                  <textarea
                    className={
                      validPassword ? "signup-input" : "signup-false-input"
                    }
                    onChange={(e) => handlePassword(e)}
                    value={password}
                  />
                </div>
                <p className={validPassword ? null : "valid-inputs"}>
                  Passwords must contain at least eight characters except
                  special characters, including at least 1 letter and 1 number.
                </p>
                <div className="help-box">
                  <input type="checkbox" />
                  <p>
                    Opt-in to receive occasional product updates, user research
                    invitations, company announcements, and digests.
                  </p>
                  <input type="checkbox" />
                </div>
                <button className="signup-btn" onClick={(e) => handleSignUp(e)}>
                  Sign up
                </button>
                <p>
                  By clicking “Sign up”, you agree to our terms of service,
                  privacy policy and cookie policy
                </p>
              </div>
              <div>Already have an account? Log in</div>
              <div>Are you an employer? Sign up on Talent </div>
            </section>
          </div>
        </article>
      </Signup>
    </>
  );
};

export default SignUp;
