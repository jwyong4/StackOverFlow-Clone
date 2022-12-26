import React, { useState } from "react";
import styled from "styled-components";
import FilterMenu from "../questionComp/FilterMenu";
import Headline from "../questionComp/Headline";
import Pagination from "../questionComp/Pagination";
import PostSort from "../questionComp/PostSort";
import QuestionList from "../questionComp/QuestionList";
import SidebarWidget from "../questionComp/SidebarWidget";
import SideNav from "../component/SideNav";
import useFetch from "../util/useFetch";
import PerPage from "../questionComp/PerPage";

const HomeDiv = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  .home {
    max-width: 1700px;
  }
`;

const QuestionHomeDiv = styled.div`
  padding: 35px 20px 20px 0px;
  height: 100%;

  margin-right: 66px;
  border-left: 1px solid rgba(106, 115, 124, 0.3);

  display: flex;
  flex-direction: row;
  justify-items: center;

  @media screen and (max-width: 1080px) {
    margin-right: 0;
    flex-direction: column;
  }

  @media screen and (max-width: 605px) {
    border-left: none;
    height: 2000px;
    margin-left: 0;
    margin-right: 0;
  }

  .void {
    width: 55vw;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;
const PageBar = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
`;

const Questions = ({ loginSuccess }) => {
  const [filterOn, setFilter] = useState(false);
  const [moreOn, setMore] = useState(false);
  const [page, setPage] = useState(1);
  const [perPage, setPerPage] = useState(15);
  let url = `${process.env.REACT_APP_URL}/questions?page=${page}&size=${perPage}`;
  const [data] = useFetch(url);
  const handleFilterMenu = () => {
    setFilter(!filterOn);
  };

  const handleMoreModal = () => {
    setMore(!moreOn);
  };

  const handlePageChange = (page) => {
    setPage(page);
  };
  const handlePerPageChange = (perpage) => {
    setPerPage(perpage);
  };

  return (
    <HomeDiv>
      <SideNav nowPath={"questions"} loginSuccess={loginSuccess} />

      <div className="home">
        {data ? (
          <QuestionHomeDiv>
            <div>
              <Headline conectQuestion={true} loginSuccess={loginSuccess} />
              <PostSort
                postcnt={data.pageInfo.totalElements}
                handleFilterMenu={handleFilterMenu}
                isFilterOn={filterOn}
                handleMoreModal={handleMoreModal}
                isMoreOn={moreOn}
              />
              {filterOn ? <FilterMenu /> : null}
              <QuestionList data={data.data} page={page} />
              <PageBar>
                <Pagination
                  numberPosts={data.pageInfo.totalElements}
                  page={page}
                  handlePageChange={handlePageChange}
                  perPage={perPage}
                />
                <PerPage
                  handlePerPageChange={handlePerPageChange}
                  perPage={perPage}
                  setPage={setPage}
                ></PerPage>
              </PageBar>
            </div>
            <div>
              <SidebarWidget></SidebarWidget>
            </div>
          </QuestionHomeDiv>
        ) : (
          <QuestionHomeDiv>
            <div className="void">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif?20151024034921"
                alt="loading"
              />
            </div>
          </QuestionHomeDiv>
        )}
      </div>
    </HomeDiv>
  );
};

export default Questions;
