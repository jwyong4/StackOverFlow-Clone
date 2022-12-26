import "./App.css";
import Nav from "./component/Nav";
import Footer from "./component/Footer";
import GlobalStyle from "./styles/GlobalStyle";
import Questions from "./pages/Questions";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import { BrowserRouter, Routes, Route, useParams } from "react-router-dom";
import { useState } from "react";
import Ask from "./component/Ask";
import useFetch from "./util/useFetch";
import Question from "./pages/Quesiton";
import Home from "./pages/Home";
import Mypage from "./pages/Mypage";
import Logout from "./pages/Logout";

function App() {
  const [loginSuccess, setLoginSuccess] = useState(
    localStorage.getItem("login")
  );
  const [userInfo, setUserInfo] = useState({
    name: "",
    id: "",
    password: "",
  });

  // console.log(loginSuccess);

  return (
    <div className="home">
      <BrowserRouter>
        <GlobalStyle />
        <Nav loginSuccess={loginSuccess} />
        <Routes>
          <Route
            path="/"
            element={
              <Home
                loginSuccess={loginSuccess}
                setLoginSuccess={setLoginSuccess}
                userInfo={userInfo}
                setUserInfo={setUserInfo}
              />
            }
          ></Route>
          <Route
            path="/questions"
            element={
              <Questions
                loginSuccess={loginSuccess}
                setLoginSuccess={setLoginSuccess}
                userInfo={userInfo}
                setUserInfo={setUserInfo}
              />
            }
          ></Route>
          <Route
            path="/login"
            element={
              <Login
                loginSuccess={loginSuccess}
                setLoginSuccess={setLoginSuccess}
                userInfo={userInfo}
                setUserInfo={setUserInfo}
              />
            }
          ></Route>
          <Route
            path="/signup"
            element={<Signup userInfo={userInfo} setUserInfo={setUserInfo} />}
          ></Route>
          <Route
            path="/logout"
            element={<Logout setLoginSuccess={setLoginSuccess} />}
          ></Route>
          <Route
            path="/mypage"
            element={<Mypage loginSuccess={loginSuccess} />}
          ></Route>
          <Route path="/ask" element={<Ask />}></Route>
          <Route
            path="/question/:id"
            element={<Question loginSuccess={loginSuccess} />}
          />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
