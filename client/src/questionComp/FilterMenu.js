import React from "react";
import styled from "styled-components";

const Menu = styled.div`
  height: 300px;
  width: 100%;
  background-color: #f1f2f3;
  margin-bottom: 13px;
  border: 1px solid rgba(106, 115, 124, 0.3);
  border-radius: 10px;
`;

const FilterMenu = () => {
  return (
    <div>
      <Menu></Menu>
    </div>
  );
};
export default FilterMenu;
