import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";

const StyledLogin = styled.div`
  width: 100%;
  height: 100vh;
  background-color: hsl(210, 8%, 95%);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const StyledIcon = styled.div`
  .icon {
    margin: 5px 0;
  }
  img {
    width: 60px;
  }
`;
const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 320px;
  height: 280px;
  background: white;
  border-radius: 10px;
  box-shadow: 0px 1px 1px 1px rgba(237, 226, 223, 1);
  .login,
  .password {
    display: flex;
    flex-direction: column;
    padding: 10px 0 5px 0;
    > span {
      font-size: 12px;
      font-weight: 500;
      margin-top: 5px;
      color: hsl(358, 68%, 59%);
    }
  }
  label {
    margin: 4px auto 4px 0;
    font-weight: 600;
  }
  input {
    padding: 8px;
    width: 260px;
    outline: none;
    border-radius: 4px;
    border: 1px solid #dfdfdf;
    background-size: 13px;
    :focus {
      border: 1px solid #38a9f0;
      box-shadow: 0px 0px 0px 4px rgba(179, 220, 252, 0.5);
    }
  }
  .valid {
    border: 1px solid hsl(358, 68%, 59%);
    background-image: url("./img/alert.png");
    background-repeat: no-repeat;
    background-size: 20px;
    background-position: 230px center;
    :focus {
      border: 1px solid hsl(358, 68%, 59%);
      box-shadow: 0px 0px 0px 4px rgba(249, 210, 211, 0.5);
    }
  }
`;
const StyledBtn = styled.button`
  background: hsl(206, 100%, 52%);
  border: 1px solid hsl(206, 85%, 57.5%);
  color: white;
  width: 260px;
  height: 40px;
  border-radius: 4px;
  margin-top: 20px;
  font-size: 15px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  :hover {
    background: hsl(209, 100%, 37.5%);
  }
`;
const StyledAccount = styled.div`
  display: flex;
  align-items: center;
  padding: 30px;
  span:first-child {
    font-size: 14px;
    font-weight: 500;
  }
  span:last-child {
    color: hsl(209, 100%, 37.5%);
    font-size: 15px;
    font-weight: 500;
    margin-left: 6px;
  }
`;

const Login = ({ loginSuccess, setLoginSuccess, userInfo, setUserInfo }) => {
  // 유효성 검증 메세지
  const [emailValid, setEmailValid] = useState(null);
  const [passwordValid, setPasswordValid] = useState(null);
  const navigate = useNavigate();

  const loginInputHandler = (e) => {
    const copy = { ...userInfo };
    if (e.target.type === "email") {
      copy["id"] = e.target.value;
    }
    if (e.target.type === "password") {
      copy["password"] = e.target.value;
    }
    setUserInfo(copy);
  };

  const loginSubmitHandler = (e) => {
    e.preventDefault();
    // 서버통신
    fetch(`${process.env.REACT_APP_URL}/members/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        memberEmail: userInfo.id,
        memberPassword: userInfo.password,
      }),
      redirect: "follow",
    })
      .then((response) => response.json())
      .then((result) => {
        if (result.status === 500) {
          e.preventDefault();
          setEmailValid("The email or password is incorrect.");
        }
        localStorage.setItem("memberId", result.data.memberId);
        setLoginSuccess(result.data.loginOk);
        localStorage.setItem("login", result.data.loginOk);
        localStorage.setItem("name", result.data.memberName);
      })
      .catch((error) => console.log("error", error));

    // 유효성 검사
    const userEmail = userInfo.id;
    const userPassword = userInfo.password;
    const validEmail =
      /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;

    if (!userEmail) {
      setEmailValid("Email cannot be empty.");
    } else {
      setEmailValid(null);
    }

    if (!userPassword) {
      setPasswordValid("Password cannot be empty.");
    } else {
      setPasswordValid(null);
    }

    if (userEmail && userPassword) {
      if (!validEmail.test(userEmail)) {
        setEmailValid("The email is not a valid email address.");
      } else if (!validEmail) {
        setEmailValid("The email or password is incorrect.");
      } else if (loginSuccess) {
        setEmailValid(null);
      }
    }
  };

  useEffect(() => {
    // 로그인 성공시 홈으로 이동
    if (loginSuccess) {
      navigate("/");
    }
  }, [loginSuccess]);

  return (
    <StyledLogin>
      <StyledIcon>
        <img src="./img/stackoverflow.png" alt="icon" />
      </StyledIcon>
      <StyledForm onSubmit={loginSubmitHandler}>
        <div className="login">
          <label>Email</label>
          <input
            type="email"
            className={emailValid ? "valid" : ""}
            value={userInfo.memberEmail}
            onChange={loginInputHandler}
          />
          <span>{emailValid}</span>
        </div>
        <div className="password">
          <label>Password</label>
          <input
            type="password"
            className={passwordValid ? "valid" : ""}
            value={userInfo.memberPassword}
            onChange={loginInputHandler}
          />
          <span>{passwordValid}</span>
        </div>
        <StyledBtn>Log in</StyledBtn>
      </StyledForm>
      <StyledAccount>
        <span>Don't have an account?</span>
        <Link to="/signup">
          <span>Sign up</span>
        </Link>
      </StyledAccount>
    </StyledLogin>
  );
};

export default Login;
