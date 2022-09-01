import styled from "styled-components";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Nav = styled.div`
  .main-sidebar {
    width: 20vw;
    border: solid #babfc3 1px;
    padding-top: 20px;
    font-size: 12px;
  }
  @media screen and (max-width: 665px) {
    .main-sidebar {
      display: none;
    }
  }
  ul,
  li {
    list-style: none;
  }
  .main-sidebar-lists {
    margin-left: 5px;
  }
  .main-sidebar-lists :nth-child(1) {
    margin-bottom: 20px;
  }
  .main-sidebar-lists > :nth-last-child(2) {
    border-bottom: solid 1px #babfc3;
  }
  .main-sidebar-lists > ul {
    margin-bottom: 20px;
  }
  .main-sidebar-subtitle {
    margin-bottom: 6px;
  }
  .main-sidebar-imgbox {
    display: flex;
    flex-direction: row;
    height: 30px;
    font-size: 15px;
    font-weight: 500;
    margin-top: 10px;
  }
  .sidebar-question {
    margin-left: 23px;
    margin-bottom: 10px;
  }
  .first-question {
    margin-bottom: 0px !important;
  }
  .sidebar-imgs {
    width: 20px;
    height: 20px;
    margin-right: 2px;
  }

  ol:nth-last-child() {
    margin-right: 20px;
  }
  .main-sidebar--public {
    margin-left: 0px;
    font-size: 15px;
  }

  .main-sidebar--team {
    margin-left: 0px;
    font-size: 13px;
  }
  .main-sidebar--team :nth-child(1) {
    font-weight: 700;
  }

  .main-sidebar--team > button {
    background-color: #f48224;
    color: white;
    border: none;
  }
  .teams {
    margin-top: 40px;
  }
`;

const Sidebar = () => {
  return (
    <>
      <Nav>
        <nav className="main-sidebar">
          <ul className="main-sidebar-lists">
            <li>Home</li>
            <li className="main-sidebar-subtitle">PUBLIC</li>
            <ul className="main-sidebar--public">
              <li className="main-sidebar-imgbox first-question">
                <div className="sidebar-imgs">
                  <FontAwesomeIcon icon={faGlobe} />
                </div>
                <div>Questions</div>
              </li>
              <li className="sidebar-question">Tags</li>
              <li className="sidebar-question">Users</li>
              <li className="sidebar-question">Companies</li>
            </ul>
            <li className="main-sidebar-subtitle">
              COLLECTIVES
              <div className="main-sidebar-imgbox">
                <img
                  className="sidebar-imgs"
                  src={require("../../imgs/collective.png")}
                ></img>
                <div>Explore COLLECTIVES</div>
              </div>
            </li>

            <li className="main-sidebar-subtitle teams">TEAMS</li>
            <ul className="main-sidebar--team">
              <span>Stack Overflow for Teams</span>{" "}
              <span>
                – Start collaborating and sharing organizational knowledge.
              </span>
              <img src="https://cdn.sstatic.net/Img/teams/teams-illo-free-sidebar-promo.svg?v=47faa659a05e" />
              <button>Create a free Team</button>
              <li>why Teams?</li>
            </ul>
          </ul>
        </nav>
      </Nav>
    </>
  );
};

export default Sidebar;
