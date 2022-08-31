import "@stackoverflow/stacks";
import "@stackoverflow/stacks/dist/css/stacks.css";
import { Link } from "react-router-dom";
import { UserContext } from "./UserContext";
import styled from "styled-components";
import React, { useContext } from "react";

const HeaderStyle = styled.div`
  .top-bar {
    display: flex;
    justify-content: space-around;
    width: 100%;
    flex-direction: row;
  }
  .topbar--name-prv {
    font-size: 20px;
    color: black;
  }
  .topbar--name-next {
    font-size: 20px;
    font-weight: bold;
    color: black;
  }
  .s-topbar--logo {
    width: 60px;
    height: 50px;
    padding-right: 0px;
  }
  @media screen and (max-width: 763px) {
    .hidden-btn {
      display: none;
    }
    .s-topbar--logo {
      display: none;
    }
    .s-topbar--searchbar--input-group {
      width: 60vw;
      margin-left: 20px;
    }
    .s-topbar-title {
      margin-left: 20px;
    }
  }

  .s-topbar--content {
    margin-top: 10px;
  }
  .s-topbar--searchbar--input-group {
    width: 90vw;
  }
  .s-btn {
    width: 60px;
    height: 35px;
  }
  .topbar-btnbox {
    width: 300px;
    display: flex;
    flex-direction: row;
  }
  .topbar-btn {
    padding: 0px;
  }
`;

const Header = () => {
  const { isLogin, setIslogin } = useContext(UserContext);

  const handleIslogin = () => {
    setIslogin(!isLogin);
  };

  return (
    <HeaderStyle>
      <header className="s-topbar">
        {/* <a href="…" className="s-topbar--menu-btn">
        <i className="fa-solid fa-bars"></i>
      </a> */}
        <img
          className="s-topbar--logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/Stack_Overflow_icon.svg/768px-Stack_Overflow_icon.svg.png"
        />

        <div className="s-topbar-title">
          <Link to="/">
            <span className="topbar--name-prv">Stack</span>
            <span className="topbar--name-next">Overflow</span>
          </Link>
        </div>

        <a href="#" className="s-topbar--notice is-unread hidden-btn">
          Product
        </a>
        <ol className="s-navigation">
          <li>
            <a href="…" className="s-navigation--item hidden-btn">
              About
            </a>
          </li>
        </ol>
        <div class="s-topbar--searchbar--input-group">
          <input
            type="text"
            placeholder="Search…"
            value=""
            class="s-input s-input__search"
          />
        </div>

        <ol class="s-topbar--content">
          {isLogin ? (
            <li>
              <button onClick={handleIslogin}>로그아웃</button>
            </li>
          ) : (
            <>
              <div className="topbar-btnbox">
                <li>
                  <Link to="/Login">
                    <a
                      class="s-topbar--item s-topbar--item__unset s-btn s-btn__filled topbar-btn"
                      onClick={handleIslogin}
                    >
                      Log in
                    </a>
                  </Link>
                </li>
                <li>
                  <Link to="/SignUp">
                    <a class="s-topbar--item s-topbar--item__unset ml4 s-btn s-btn__primary topbar-btn">
                      Sign up
                    </a>
                  </Link>
                </li>
              </div>
            </>
          )}
        </ol>
        {/* <ol class="s-topbar--content">
        <li>
          <a href="…" class="s-topbar--item s-user-card s-user-card__small">
            …
          </a>
        </li>
        <li>
          <a href="…" class="s-topbar--item" aria-label="Inbox">
            @Svg.Inbox <span class="s-activity-indicator">…</span>
          </a>
        </li>
        <li>
          <a href="…" class="s-topbar--item">
            …
          </a>
        </li>
      </ol> */}
      </header>
    </HeaderStyle>
  );
};

export default Header;
