import React from "react";
import styled from "styled-components";
import Header from "./Main/Header";
// import "bootstrap/dist/css/bootstrap.css";
// import GoogleLogin from "react-google-login";

const LoginStyle = styled.div`
  #content {
    margin-top: 150px;
  }
`;

const Login = () => {
  return (
    <>
      <LoginStyle>
        <Header></Header>
        <div class="container">
          <div id="content" class="d-flex flex__center snippet-hidden">
            <div class="flex--item">
              <div class="ta-center fs-title mx-auto mb24">
                <a href="http://localhost:3000/">
                  <svg
                    aria-hidden="true"
                    class="native svg-icon iconLogoGlyphMd"
                    width="32"
                    height="37"
                    viewBox="0 0 32 37"
                  >
                    <path d="M26 33v-9h4v13H0V24h4v9h22Z" fill="#BCBBBB"></path>
                    <path
                      d="m21.5 0-2.7 2 9.9 13.3 2.7-2L21.5 0ZM26 18.4 13.3 7.8l2.1-2.5 12.7 10.6-2.1 2.5ZM9.1 15.2l15 7 1.4-3-15-7-1.4 3Zm14 10.79.68-2.95-16.1-3.35L7 23l16.1 2.99ZM23 30H7v-3h16v3Z"
                      fill="#F48024"
                    ></path>
                  </svg>{" "}
                </a>
              </div>
              <div
                id="openid-buttons"
                class="mx-auto d-flex flex__fl-grow1 fd-column gs8 gsy mb16 wmx3"
              >
                {/* <GoogleLogin>clientId={clientId}</GoogleLogin> */}
                <button
                  class="flex--item s-btn s-btn__icon s-btn__google bar-md ba bc-black-100"
                  // data-provider="google"
                  // data-oauthserver="https://accounts.google.com/o/oauth2/auth"
                  // data-oauthversion="2.0"
                >
                  <svg
                    aria-hidden="true"
                    class="native svg-icon iconGoogle"
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                  ></svg>
                  Log in with Google{" "}
                </button>
                <button
                  class="flex--item s-btn s-btn__icon s-btn__github bar-md ba bc-black-100"
                  // data-provider="github"
                  // data-oauthserver="https://github.com/login/oauth/authorize"
                  // data-oauthversion="2.0"
                >
                  <svg
                    aria-hidden="true"
                    class="svg-icon iconGitHub"
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                  ></svg>
                  Log in with GitHub{" "}
                </button>
                <button
                  class="flex--item s-btn s-btn__icon s-btn__facebook bar-md"
                  // data-provider="facebook"
                  // data-oauthserver="https://www.facebook.com/v2.0/dialog/oauth"
                  // data-oauthversion="2.0"
                >
                  <svg
                    aria-hidden="true"
                    class="svg-icon iconFacebook"
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                  ></svg>
                  Log in with Facebook{" "}
                </button>
              </div>
              <div
                id="formContainer"
                class="mx-auto mb24 p24 wmx3 bg-white bar-lg bs-xl mb24"
              >
                <form
                  id="login-form"
                  class="d-flex fd-column gs12 gsy"
                  // action="서버로 보낼 때 해당 데이터가 도착할 URL"
                  method="POST"
                >
                  <div class="d-flex fd-column gs4 gsy js-auth-item">
                    <label class="flex--item s-label" for="email">
                      Email
                    </label>
                    <div class="d-flex ps-relative">
                      <input
                        class="s-input"
                        id="email"
                        type="email"
                        size="30"
                        max_length="100"
                        name="email"
                      />
                    </div>
                  </div>
                  <div>
                    <div class="d-flex ai-center ps-relative jc-space-between">
                      <label class="flex--item s-label" for="password">
                        Password
                      </label>

                      <a
                        class="flex--item s-link fs-caption"
                        href="/users/account-recovery"
                      >
                        Forgot password?
                      </a>
                    </div>
                    <div class="d-flex ps-relative js-password">
                      <input
                        class="flex--item s-input"
                        type="password"
                        autocomplete="off"
                        name="password"
                        id="password"
                      />
                    </div>
                  </div>
                  <div class="d-flex gs4 gsy fd-column js-auth-item ">
                    <button
                      class="flex--item s-btn s-btn__primary"
                      id="submit-button"
                      name="submit-button"
                    >
                      Log in
                    </button>
                    <p class="flex--item s-input-message js-error-message d-none"></p>
                  </div>
                </form>
              </div>
              <div class="mx-auto ta-center fs-body1 p16 pb0 mb24 w100 wmx3">
                Don’t have an account?{" "}
                <a href="http://localhost:3000/SignUp">Sign up</a>
                <div class="mt12">
                  Are you an employer?{" "}
                  <a
                    href="https://careers.stackoverflow.com/employer/login"
                    name="talent"
                  >
                    Sign up on Talent{" "}
                    <svg
                      aria-hidden="true"
                      class="va-text-bottom sm:d-none svg-icon iconShareSm"
                      width="14"
                      height="14"
                      viewBox="0 0 14 14"
                    ></svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </LoginStyle>
    </>
  );
};

export default Login;
