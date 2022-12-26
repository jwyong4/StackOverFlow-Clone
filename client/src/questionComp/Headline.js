import React from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import Login from "../pages/Login";

const Head = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  vertical-align: top;
  justify-content: space-between;
  padding-right: 25px;
  margin: 47px 0 25px 25px;

  .question__btn {
    width: 100px;
    height: 38px;
    background-color: hsl(206, 100%, 52%);
    color: hsl(0, 0%, 100%);
    border-radius: 5px;
    border: 1px solid transparent;
    outline: none;
    font-weight: normal;
    text-align: center;
    position: relative;
    cursor: pointer;
    box-shadow: inset 0 1px 0 0 hsl(0deg 0% 100% / 40%);
    &:hover {
      background-color: hsl(206, 100%, 40%);
    }
    &:active {
      box-shadow: none;
    }
  }

  > h1 {
    margin-top: 0;
    /* margin-bottom: 20px; */
    font-size: 27px;
    font-weight: 300;
    vertical-align: top;
  }
`;

// const Alert = () => {
//   return alert("You must be logged in to ask a question on Stack Overflow")
// }

const Headline = ({ conectQuestion, loginSuccess }) => {
  let navigate = useNavigate();

  return (
    <Head>
      {conectQuestion ? <h1>All Questions</h1> : <h1>Top Questions</h1>}
      <button
        className="question__btn"
        onClick={() => {
          if (loginSuccess) navigate("/ask");
          else {
            alert("You must be logged in to ask a question on Stack Overflow");
            navigate("/login");
          }
        }}
      >
        Ask Question
      </button>
    </Head>
  );
};
export default Headline;
