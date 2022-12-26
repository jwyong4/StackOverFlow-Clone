import React, { useState } from "react";
import styled from "styled-components";
import FilterMenu from "../questionComp/FilterMenu";
import Headline from "../questionComp/Headline";
import PostSort from "../questionComp/PostSort";
import QuestionList from "../questionComp/QuestionList";
import SidebarWidget from "../questionComp/SidebarWidget";
import SideNav from "../component/SideNav";
import useFetch from "../util/useFetch";

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
    margin-left: 0;
    margin-right: 0;
  }
  .void {
    width: 55vw;
    width: 100%;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

const Home = ({ loginSuccess, setLoginSuccess, userInfo, setUserInfo }) => {
  const [filterOn, setFilter] = useState(false);
  const [moreOn, setMore] = useState(false);
  let url = `${process.env.REACT_APP_URL}/questions?page=1&size=30`;
  const [data] = useFetch(url);
  const handleFilterMenu = () => {
    setFilter(!filterOn);
  };

  const handleMoreModal = () => {
    setMore(!moreOn);
  };

  return (
    <HomeDiv>
      <SideNav nowPath={"home"} loginSuccess={loginSuccess} />

      <div className="home">
        {data ? (
          <QuestionHomeDiv>
            <div>
              <Headline
                loginSuccess={loginSuccess}
                setLoginSuccess={setLoginSuccess}
                userInfo={userInfo}
                setUserInfo={setUserInfo}
              />
              <PostSort
                postcnt={data.pageInfo.totalElements}
                handleFilterMenu={handleFilterMenu}
                isFilterOn={filterOn}
                handleMoreModal={handleMoreModal}
                isMoreOn={moreOn}
              />
              {filterOn ? <FilterMenu /> : null}
              <QuestionList data={data.data} nowPath={"home"} />
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

export default Home;
