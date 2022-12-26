import React from "react";
import styled from "styled-components";
import FilterButton from "./FilterButton";
import SortBtn from "./SortBtn";

const Btnlist = styled.div`
  width: 100%;
  height: 47px;
  margin-left: 25px;
  padding-right: 25px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  @media screen and (max-width: 605px) {
    height: 94px;
    flex-direction: column;
    align-items: flex-start;
  }
`;
const Sort = styled.div`
  width: 200px;
  display: flex;
  flex-direction: row;
  justify-content: end;
  align-items: center;
  margin: 0 0 12px 0;

  @media screen and (max-width: 770px) {
    width: 260px;
  }
  @media screen and (max-width: 605px) {
    width: 100%;
  }
`;

const PostSort = ({ postcnt, handleMoreModal, isMoreOn }) => {
  return (
    <Btnlist>
      <div>
        <p>{postcnt} questions</p>
      </div>
      <Sort>
        {/* <SortBtn
          className="sort__btn"
          handleMoreModal={handleMoreModal}
          isMoreOn={isMoreOn}
        /> */}
        {/* <FilterButton
          handleFilterMenu={handleFilterMenu}
          isFilterOn={isFilterOn}
        /> */}
      </Sort>
    </Btnlist>
  );
};

export default PostSort;
