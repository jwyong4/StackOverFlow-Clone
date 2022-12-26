import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Pagination = ({ numberPosts, page, handlePageChange, perPage }) => {
  const numPage = Math.ceil(numberPosts / perPage); // API로 전체 게시물 갯수 받아오면 이걸로 수정
  let exceptNum = 3;
  if (numPage === 7 && page === 4) {
    exceptNum = 2;
  }

  return (
    <PageNav disabled={numPage <= 1}>
      <Button onClick={() => handlePageChange(page - 1)} disabled={page === 1}>
        Prev
      </Button>
      {Array(numPage)
        .fill()
        .map((_, i) => (
          <PageNumNav key={i + 1}>
            {/* tail : 페이지 ... 버튼 나타나는 구간 설정 */}
            {i === numPage - 1 && numPage !== 6 && numPage !== 5 ? (
              <Break disabled={page >= numPage - exceptNum}>...</Break>
            ) : null}
            <Button
              onClick={() => handlePageChange(i + 1)}
              aria-current={page === i + 1 ? "page" : null}
            >
              {i + 1}
              {/* front : 페이지 ... 버튼 나타나는 구간 설정 */}
            </Button>
            {i === 0 && numPage !== 6 && numPage !== 5 ? (
              <Break disabled={page <= 4}>...</Break>
            ) : null}
          </PageNumNav>
        ))
        .filter((_, i) => {
          if (page === 1) {
            if (
              i + 1 === page ||
              i + 1 === page + 1 ||
              i + 1 === page + 2 ||
              i + 1 === page + 3 ||
              i + 1 === page + 4 ||
              i + 1 === numPage
            ) {
              return true;
            }
          } else if (page === 2) {
            if (
              i + 1 === page ||
              i + 1 === page - 1 ||
              i + 1 === page + 1 ||
              i + 1 === page + 2 ||
              i + 1 === page + 3 ||
              i + 1 === numPage
            ) {
              return true;
            }
          } else if (page === 4) {
            if (
              i + 1 === page ||
              i + 1 === page - 1 ||
              i + 1 === page - 2 ||
              i + 1 === page - 3 ||
              i + 1 === page + 1 ||
              i + 1 === numPage
            ) {
              return true;
            }
          } else if (page === numPage - 1) {
            if (
              i + 1 === 1 ||
              i + 1 === page ||
              i + 1 === page - 1 ||
              i + 1 === page - 2 ||
              i + 1 === page - 3 ||
              i + 1 === page + 1 ||
              i + 1 === numPage
            ) {
              return true;
            }
          } else if (page === numPage - 2) {
            if (
              i + 1 === 1 ||
              i + 1 === page ||
              i + 1 === page - 1 ||
              i + 1 === page - 2 ||
              i + 1 === page + 1 ||
              i + 1 === numPage
            ) {
              return true;
            }
          } else if (page === numPage - 3) {
            if (
              i + 1 === 1 ||
              i + 1 === page ||
              i + 1 === page - 1 ||
              i + 1 === page + 2 ||
              i + 1 === page + 1 ||
              i + 1 === numPage
            ) {
              return true;
            }
          } else if (page === numPage) {
            if (
              i + 1 === 1 ||
              i + 1 === page ||
              i + 1 === page - 1 ||
              i + 1 === page - 2 ||
              i + 1 === page - 3 ||
              i + 1 === page - 4 ||
              i + 1 === numPage
            ) {
              return true;
            }
          } else {
            if (
              i + 1 === 1 ||
              i + 1 === numPage ||
              i + 1 === page - 2 ||
              i + 1 === page - 1 ||
              i + 1 === page ||
              i + 1 === page + 1 ||
              i + 1 === page + 2
            ) {
              return true;
            }
          }

          return;
        })}
      <Button
        onClick={() => handlePageChange(page + 1)}
        disabled={page === numPage}
      >
        Next
      </Button>
    </PageNav>
  );
};

const PageNav = styled.nav`
  width: 100%;

  padding: 50px 0 100px 25px;
  display: flex;
  justify-content: flex-start;
  &[disabled] {
    display: none;
  }
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

  &[disabled] {
    display: none;
  }

  &[aria-current] {
    pointer-events: none;
    color: white;
    border: 1px solid #f48225;

    background-color: #f48225;
  }
`;

const Break = styled.span`
  padding: 0 7px;
  font-size: 1rem;
  margin: 0 2px;
  &[disabled] {
    display: none;
  }
`;
const PageNumNav = styled.div`
  display: flex;
`;
export default Pagination;
