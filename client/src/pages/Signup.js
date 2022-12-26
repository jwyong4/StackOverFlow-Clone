import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";

const StyledSignup = styled.div`
  width: 100%;
  height: 100vh;
  background-color: hsl(210, 8%, 95%);
  display: flex;
  align-items: center;
  padding-top: 100px;
  justify-content: center;
  padding: 20px;
  .right__container {
    padding-top: 200px;
  }
`;
const StyledLeftContainer = styled.div`
  margin-right: 100px;
  h1 {
    font-weight: 400;
    font-size: 30px;
    text-align: left;
  }
  @media screen and (max-width: 900px) {
    display: none;
  }
`;
const StyledLeftList = styled.ul`
  padding: 0;
  li {
    display: flex;
    align-items: center;
    margin: 10px 0;
    font-size: 17px;
    .logo1 {
      background: url("./img/logo1.svg");
    }
  }
  img {
    width: 30px;
    margin-right: 5px;
  }
`;
const StyledRightContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 320px;
  height: 550px;
  background: white;
  border-radius: 10px;
  box-shadow: 0px 1px 1px 1px rgba(237, 226, 223, 1);
  .box {
    width: 260px;
  }
  .name,
  .email,
  .password {
    display: flex;
    flex-direction: column;
    padding: 10px 0 5px 0;
    > p {
      font-size: 13px;
      color: hsl(210, 8%, 45%);
      margin: 4px 0;
      text-align: left;
    }
    > span {
      font-size: 12px;
      font-weight: 500;
      margin-top: 5px;
      color: hsl(358, 68%, 59%);
    }
  }
  .password > span {
    margin-bottom: 10px;
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
    :focus {
      border: 1px solid #38a9f0;
      box-shadow: 0px 0px 3px 2px rgba(56, 169, 240, 0.75);
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
const StyledRightGetConsent = styled.div`
  display: flex;
  margin-top: 30px;
  input {
    width: 12px;
    margin: 0 5px;
    margin-bottom: auto;
    cursor: pointer;
  }
  .consent {
    font-size: 14px;
    text-align: left;
  }
`;
const StyledBtn = styled.button`
  background: hsl(206, 100%, 52%);
  border: 1px solid hsl(206, 85%, 57.5%);
  color: white;
  width: 260px;
  height: 40px;
  border-radius: 4px;
  margin: 20px 0;
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
    cursor: pointer;
  }
`;

const Signup = ({ userInfo, setUserInfo }) => {
  // 유효성 검증 메세지
  const [emailValid, setEmailValid] = useState("");
  const [passwordValid, setPasswordValid] = useState("");
  const navigate = useNavigate();

  const signupInputHandler = (e) => {
    const copy = { ...userInfo };
    if (e.target.type === "text") {
      copy["name"] = e.target.value;
    }
    if (e.target.type === "email") {
      copy["id"] = e.target.value;
    }
    if (e.target.type === "password") {
      copy["password"] = e.target.value;
    }
    setUserInfo(copy);
  };

  const signupSubmitHandler = (e) => {
    const userEmail = userInfo.id;
    const userPassword = userInfo.password;

    // 유효성 검증
    e.preventDefault();
    const validEmail =
      /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g.test(
        userEmail
      );
    const validPassword = /(?=.*\d)(?=.*[a-zA-ZS]).{8,}/.test(userPassword);
    const validPasswordNum = /(?=.*\d)/.test(userPassword);
    const validPasswordStr = /(?=.*[a-zA-ZS])/.test(userPassword);
    const validPasswordTextLength = userPassword.length;

    if (!userEmail) {
      setEmailValid("Email cannot be empty.");
    } else if (!validEmail) {
      setEmailValid(`${userEmail} is not a valid email address.`);
    } else {
      setEmailValid(null);
    }
    if (!userPassword) {
      setPasswordValid("Password cannot be empty.");
    } else {
      if (validPassword) {
        setPasswordValid(null);
      } else if (!validPasswordNum && !validPasswordStr) {
        setPasswordValid(
          "Please add 'numbers' and 'letters' to make your password stronger "
        );
      } else if (!validPasswordNum) {
        setPasswordValid(
          "Please add 'numbers' to make your password stronger."
        );
      } else if (!validPasswordStr) {
        setPasswordValid(
          "Please add 'letters' to make your password stronger."
        );
      } else if (validPasswordTextLength < 8) {
        setPasswordValid(
          `Must contain at least ${8 - validPasswordTextLength} more character.`
        );
      }
    }
    // 서버통신 (회원가입 정보 전달)
    if (validEmail && validPassword) {
      fetch(`${process.env.REACT_APP_URL}/members/signup`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          memberName: userInfo.name,
          memberEmail: userInfo.id,
          memberPassword: userInfo.password,
        }),
        redirect: "follow",
      })
        .then((response) => response.json())
        .then((result) => {
          // console.log(result);
          // console.log(result.status);
          if (result.status === 500) {
            e.preventDefault();
            setEmailValid("The email or display name already exists");
          } else if (result.status === 400) {
            e.preventDefault();
          } else {
            alert("회원가입이 완료되었습니다!");
            navigate("/login");
          }
        })
        .catch((error) => console.log("error", error));
    }
  };

  return (
    <StyledSignup>
      <StyledLeftContainer>
        <h1>Join the Stack Overflow community</h1>
        <StyledLeftList>
          <li>
            <img src="./img/logo1.svg" alt="logo" />
            <div>Get unstuck — ask a question</div>
          </li>
          <li>
            <img src="./img/logo2.svg" alt="logo" />
            <div>Unlock new privileges like voting and commenting</div>
          </li>
          <li>
            <img src="./img/logo3.svg" alt="logo" />
            <div>Save your favorite tags, filters, and jobs</div>
          </li>
          <li>
            <img src="./img/logo4.svg" alt="logo" />
            <div>Earn reputation and badges</div>
          </li>
        </StyledLeftList>
      </StyledLeftContainer>
      <div className="right__container">
        <StyledRightContainer onSubmit={signupSubmitHandler}>
          <div className="box">
            <div className="name">
              <label>Display name</label>
              <input
                type="text"
                value={userInfo.name}
                onChange={signupInputHandler}
              />
            </div>
            <div className="email">
              <label>Email</label>
              <input
                type="email"
                className={emailValid ? "valid" : ""}
                value={userInfo.id}
                onChange={signupInputHandler}
              />
              <span>{emailValid}</span>
            </div>
            <div className="password">
              <label>Password</label>
              <input
                type="password"
                className={passwordValid ? "valid" : ""}
                value={userInfo.password}
                onChange={signupInputHandler}
              />
              <span>{passwordValid}</span>
              <p>
                Passwords must contain at least eight characters, including at
                least 1 letter and 1 number.
              </p>
            </div>
            <StyledRightGetConsent>
              <input type="checkbox" />
              <span className="consent">
                Opt-in to receive occasional product updates, user research
                invitations, company announcements, and digests.
              </span>
            </StyledRightGetConsent>
            <StyledBtn>Sign up</StyledBtn>
          </div>
        </StyledRightContainer>
        <StyledAccount>
          <span>Already have an account?</span>
          <Link to="/login">
            <span>Log in</span>
          </Link>
        </StyledAccount>
      </div>
    </StyledSignup>
  );
};

export default Signup;
