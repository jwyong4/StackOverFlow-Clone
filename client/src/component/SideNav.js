import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const SideMenuDiv = styled.div`
  width: 164px;
  height: 100vh;
  margin-top: 47px;
  padding-top: 35px;
  .link {
    text-decoration-line: none;
  }
  @media screen and (max-width: 605px) {
    display: none;
  }
`;

const SideLinkHome = styled.div`
  width: 100%;
  height: 34px;
  padding: 4px 4px;
  display: flex;
  align-items: center;
  font-size: 13px;
  padding-left: 8px;
  text-decoration-line: none;

  background-color: ${(props) => (props.path === "home" ? "#f1f2f3" : "white")};
  border-right: ${(props) =>
    props.path === "home" ? "3px solid #f48225" : "none"};
  color: ${(props) => (props.path === "home" ? "#0c0d0e" : `#525960`)};

  &:hover {
    color: #0c0d0e;
    cursor: pointer;
  }
`;
const SideLinkQue = styled.div`
  width: 100%;
  height: 34px;
  padding: 4px 4px;
  display: flex;
  align-items: center;
  font-size: 13px;
  padding-left: 8px;

  background-color: ${(props) =>
    props.path === "questions" ? "#f1f2f3" : "white"};
  border-right: ${(props) =>
    props.path === "questions" ? "3px solid #f48225" : "none"};
  color: ${(props) => (props.path === "questions" ? "#0c0d0e" : `#525960`)};
  .icon__path {
    fill: ${(props) => (props.path === "questions" ? "#0c0d0e" : `#525960`)};
  }
  .question__text {
    padding-left: 4px;
  }

  &:hover {
    color: #0c0d0e;
    cursor: pointer;
    .icon__path {
      fill: #0c0d0e;
      cursor: pointer;
    }
  }
`;
const SideLinkMyPage = styled.div`
  width: 100%;
  height: 34px;
  padding: 4px 4px;
  display: flex;
  align-items: center;
  font-size: 13px;
  padding-left: 8px;
  text-decoration-line: none;

  background-color: ${(props) =>
    props.path === "mypage" ? "#f1f2f3" : "white"};
  border-right: ${(props) =>
    props.path === "mypage" ? "3px solid #f48225" : "none"};
  color: ${(props) => (props.path === "mypage" ? "#0c0d0e" : `#525960`)};

  &:hover {
    color: #0c0d0e;
    cursor: pointer;
  }
`;

const NavTitle = styled.nav`
  margin-top: 16px;
  margin-bottom: 4px;
  padding-left: 8px;
  font-size: 11px;
  width: 100%;
  color: #6a737c;
`;

const SideNav = ({ nowPath, loginSuccess }) => {
  return (
    <SideMenuDiv>
      <Link to={"/"} className="link">
        <SideLinkHome path={nowPath}>
          <span className="home__text">Home</span>
        </SideLinkHome>
      </Link>

      <NavTitle>PUBLIC</NavTitle>
      <Link to={"/questions"} className="link">
        <SideLinkQue path={nowPath}>
          <span className="icon">
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                className="icon__path"
                d="M8 0C3.64267 0 0 3.64267 0 8C0 12.3573 3.64266 16 8 16C12.3573 16 16 12.3573 16 8C16 3.64266 12.3573 0 8 0ZM7 14.32C5.26864 14.0438 3.68393 13.0332 2.70319 11.58C1.72245 10.1267 1.37828 8.27893 1.77 6.57L6 10.68V11.48C6 12.36 6.12 12.8 7 12.8V14.32ZM12.72 12.32C12.52 11.66 11.72 11 11 11H10V9C10 8.56 9.44 8 9 8H5V6H6C6.44 6 7 5.44 7 5V4H9C9.88 4 10.4 3.28 10.4 2.4V2.07C12.3216 2.85114 13.7733 4.56167 14.2317 6.5847C14.69 8.60773 14.1173 10.7769 12.72 12.31V12.32Z"
                fill="#6a737c"
              />
            </svg>
          </span>
          <span className="question__text">Questions</span>
        </SideLinkQue>
      </Link>
      {loginSuccess ? (
        <Link to={"/mypage"} className="link">
          <SideLinkMyPage path={nowPath}>
            <span className="mypage__text">MyPage</span>
          </SideLinkMyPage>
        </Link>
      ) : null}
    </SideMenuDiv>
  );
};

export default SideNav;
