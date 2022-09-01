import "./App.css";
import React from "react";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AddAsk from "./Pages/AddAsk";
import Answer from "./Pages/Answer";
import Login from "./Pages/Login";
import SignUp from "./Pages/SignUp";
import Main from "./Pages/Main/Main";
import { useState, useEffect } from "react";
import { UserContext } from "./Pages/Main/UserContext";

function App() {
  const [isLogin ,setIslogin] = useState(false)

  return (
    <>
    <UserContext.Provider value = {{isLogin, setIslogin}}>
      <div className="container">
        <Router>
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/AddAsk" element={<AddAsk />} />
            <Route path="/Answer/:id" element={<Answer />} /> {/*path 속성 값으로 :id가 들어간다. 콜론(:)과 함께 작성된 path는 params에서 변수로 읽어 들이게 된다. 즉, 주소창이 http://localhost:3000/detail/3 일때, match.params(id) 의 값은 3*/}
            <Route path="/Login" element={<Login />} />
            <Route path="/SignUp" element={<SignUp />} />
          </Routes>
        </Router>
      </div>
      </UserContext.Provider>
    </>
    
  );
}
export default App;
