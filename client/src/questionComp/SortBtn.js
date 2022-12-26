import React from "react";
import styled from "styled-components";
import { AiFillCaretDown } from "react-icons/ai";

const BtnDiv = styled.div`
  > button {
    background-color: white;
    color: #6a737c;
    font-size: 12px;
    padding: 9px;
    margin: 0px -1px -1px 0px;
    border: 1px solid #6a737c;
    cursor: pointer;

    :first-child {
      border-radius: 3px;
      border-top-right-radius: 0px;
      border-bottom-right-radius: 0px;
    }
    :last-child {
      border-radius: 3px;
      border-top-left-radius: 0px;
      border-bottom-left-radius: 0px;
    }
    &:hover {
      color: #40434a;
    }

    &:active {
      color: #40434a;
      background-color: #e9e9e9;
    }
  }
`;

// handleMoreModal,
//   isMoreOn,
const SortBtn = () => {
  return (
    <BtnDiv>
      <button>Newest</button>
      <button>Votes</button>
    </BtnDiv>
  );
};
export default SortBtn;
