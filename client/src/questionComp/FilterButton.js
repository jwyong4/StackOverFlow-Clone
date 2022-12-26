import React from "react";
import styled from "styled-components";

import { IoFilterSharp } from "react-icons/io5";

const FilterBtn = styled.button`
  background-color: ${(props) => (props.isFilterOn ? "#b3d3ea" : "#e1ecf4")};
  color: ${(props) => (props.isFilterOn ? "#2c5877" : "#39739d")};
  font-size: 12px;
  padding: 7.5px;
  border: 1px solid #7aa7c7;
  border-radius: 5px;
  cursor: pointer;
  box-shadow: ${(props) => (props.isFilterOn ? null : "inset 0 1px 0 0 white")};

  &:hover {
    background-color: #b3d3ea;
    color: #2c5877;
  }
  &:active {
    box-shadow: none;
  }
  display: flex;
  align-items: flex-end;
  .filter__icon {
    margin-right: 7px;
    font-size: 17px;
  }
`;
const FilterButton = ({ handleFilterMenu, isFilterOn }) => {
  return (
    <div>
      <FilterBtn onClick={handleFilterMenu} isFilterOn={isFilterOn}>
        <IoFilterSharp className="filter__icon" />
        Filter
      </FilterBtn>
    </div>
  );
};
export default FilterButton;
