import React, { useContext } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
// import '@stackoverflow/stacks-editor/dist/styles.css';
import "@stackoverflow/stacks";
import "@stackoverflow/stacks/dist/css/stacks.css";
import useFetch from "../useFetch";
// import main_dummy from "../../dummy/main-dummy";
import { UserContext } from "./UserContext";
import Header from "./Header";
import Sidebar from "./Navbar";

const Style = styled.div`
  .main-container {
    display: flex;
    flex-direction: row;
    width: 100vw;
    height: 100vh;
    justify-content: center;
  }

  @media screen and (max-width: 800px) {
    .btn-grow {
      display: none;
    }
  }
  @media screen and (max-width: 665px) {
    .main-questions-header-filter {
      display: flex;
      flex-direction: column !important;
      /* justify-content: space-between; */
    }
    .main-questions-list {
      margin-top: 40px;
    }
    .filter-box {
      margin-top: 13px;
    }
  }

  .main-questions-container {
    width: 100vw;
    height: 100;
    padding-right: 20px;
  }
  .main-questions-header {
    width: 100%;
    height: 20%;
    padding-left: 20px;
    padding-right: 20px;
    padding-top: 20px;
  }
  .main-questions-header-text {
    display: flex;
    flex-direction: row;
    height: 50%;
    font-size: 20px;
    align-items: center;
    justify-content: space-between;
  }
  .main-questions-header-text > div {
    font-size: 30px;
    font-weight: 500;
  }
  .questions-button {
    text-decoration: none;
    color: white;
    background-color: #0995ff;
    border: none;
    border-radius: 5%;
    font-size: 13px !important;
    font-weight: 700;
    width: 100px;
    height: 40px;
    padding: 10.4px;
  }
  .main-questions-header-filter {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-top: 20px;
  }
  .main-questions-header-filter :nth-child(1) {
    font-size: 17px;
    font-weight: 500;
  }
  .filter-box {
    display: flex;
    flex-direction: row;
  }
  .filter-btn {
    background-color: white;
    border: #babfc3 solid 1.5px;
    width: 65.02px;
    height: 35.03px;
    border-radius: 5%;
    color: #838c95;
    font-weight: 700;
  }
  .filter-box :nth-last-child(1) {
    margin-left: 15px;
  }
  .filter-box-filterbtn {
    background-color: rgb(179, 211, 234);
    color: #39739c;
    border: #79a7c7 solid 1.5px;
  }
  .btn-grow {
    width: 91.3px;
  }
  .main-questions-list {
    border: solid #babfc3 1px;
    height: 80%;
  }
  .questions-list-container {
    border-bottom: solid #babfc3 1px;
    font-size: 13px;
    padding-left: 20px;
    padding-top: 20px;
    padding-bottom: 20px;
  }
  .list-title {
    font-size: 20px;
  }
  .list-content {
    font-size: 13px;
  }
  .list-tags {
    display: flex;
    flex-direction: row-reverse;
    justify-content: space-between;
  }
  .list-userinfo {
    align-content: right;
  }
`;

const Main = () => {
  const { isLogin } = useContext(UserContext);
  const { getdata  } = useFetch("http://localhost:3001/data")

  return (
    <>
      <Style>
        <Header></Header>
        <div className="main-container">
          <Sidebar></Sidebar>
          <article className="main-questions-container">
            <section className="main-questions-header">
              <div className="main-questions-header-text">
                {isLogin ? <div>Top Qusetions</div> : <div>All Questions</div>}
                <Link to="/AddAsk">
                  <button className="questions-button">Ask Question</button>
                </Link>
              </div>
              <div className="main-questions-header-filter">
                <div>{getdata.length} questions</div>
                <div className="filter-box">
                  <button className="filter-btn">Newest</button>
                  <button className="filter-btn">Active</button>
                  <button className="filter-btn btn-grow">Bountied</button>
                  <button className="filter-btn btn-grow">Unanswered</button>
                  <button className="filter-btn">More</button>
                  <button className="filter-btn filter-box-filterbtn">
                    Filter
                  </button>
                </div>
              </div>
            </section>
            <section className="main-questions-list">
              {getdata.map((el, idx) => {
                return (
                  <>
                    <div key={idx} className="questions-list-container">
                      <div>
                        {/* {el.votes} votes */}
                        {el.answers} answers
                        {el.questionView} views
                      </div>
                      <div className="list-title">
                        <Link to={"/Answer/"+ `${el.questionId}`}>{el.questionTitle}</Link>
                      </div>
                      <div className="list-content">
                        {typeof el.questionBody === "string"
                          ? `${el.questionBody.slice(0, 180)}...`
                          : "the content is not a string"}
                      </div>
                      <div className="list-tags">
                        {/* <div className="tags">
                          {el.tag.map((el, idx) => {
                            return <button key={idx}>{el}</button>;
                          })}
                        </div> */}
                        <div className="list-userinfo">
                          {el.member.username}
                          {el.createdAt}
                        </div>
                      </div>
                    </div>
                  </>
                );
              })}
            </section>
          </article>
        </div>
        {/* <Link to="/Answer">
        <div>Answer</div>
      </Link> */}
      </Style>
    </>
  );
};

export default Main;
