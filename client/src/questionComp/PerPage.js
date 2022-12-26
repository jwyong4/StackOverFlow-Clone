import React from "react";
import styled from "styled-components";
const PerPage = ({ handlePerPageChange, perPage, setPage }) => {
  const perPageArr = [15, 30, 50];
  return (
    <PerPageBody>
      <BtnBody>
        {perPageArr.map((el, i) => (
          <Button
            key={i}
            onClick={() => {
              handlePerPageChange(el);
              setPage(1);
            }}
            aria-current={perPage === el ? "page" : null}
          >
            {el}
          </Button>
        ))}
      </BtnBody>
      <TextBody>per page</TextBody>
    </PerPageBody>
  );
};

const PerPageBody = styled.div`
  padding: 50px 0 100px 25px;
  display: flex;
  flex-direction: row;
  .select__page {
    display: flex;
    flex-direction: row;
  }
`;

const BtnBody = styled.div`
  display: flex;
  flex-direction: row;
`;
const TextBody = styled.div`
  width: 70px;
  padding: 5px;
  font-size: 13px;
  color: #232629;
  display: flex;
  text-align: center;
  align-items: center;
`;

const Button = styled.button`
  background-color: white;
  border-radius: 3px;
  padding: 5px 8px;
  margin: 0 2px;
  color: black;
  font-size: 13px;
  border: 1px solid hsl(210, 8%, 85%);
  display: flex;
  justify-content: flex-start;

  &:hover {
    color: #0c0d0e;
    background: #d6d8dc;
    cursor: pointer;
  }

  &[aria-current] {
    pointer-events: none;
    color: white;
    border: 1px solid #f48225;

    background-color: #f48225;
  }
`;

export default PerPage;
