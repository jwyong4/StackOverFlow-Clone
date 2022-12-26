import React from "react";
import styled from "styled-components";
import SideNav from "../component/SideNav";

const HomeDiv = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  .home {
    max-width: 1700px;
  }
`;

const StyledMypage = styled.div`
  width: 100%;
  height: auto;
  padding: 20px;
  padding-bottom: 0;
  display: flex;
  align-items: flex-start;
  .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;
const StyledMyInfo = styled.div`
  margin: 47px 0 0 200px;
  padding-top: 35px;
  min-width: 700px;
  display: flex;
  align-items: center;
  gap: 20px;
  .user__icon {
    width: 100px;
    height: 100px;
    font-size: 45px;
    color: white;
    background: #f64b3c;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 8px;
  }
  .user__info {
    display: flex;
    flex-direction: column;
    gap: 10px;
    .user__name {
      font-size: 36px;
      color: black;
    }
    ul {
      display: flex;
      gap: 10px;
      padding: 0;
      li {
        display: flex;
        align-items: center;
        gap: 5px;
        svg {
          width: 15px;
          height: 15px;
        }
      }
    }
  }
  @media screen and (max-width: 680px) {
    // margin: 47px 0 0 20px;
    flex-direction: column;
    align-items: flex-start;
  }
  @media screen and (max-width: 600px) {
    margin: 47px 0 0 20px;
    min-width: 400px;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    .user__icon {
      width: 64px;
      height: 64px;
      font-size: 30px;
    }
    .user__info {
      gap: 3px;
      .user__name {
        font-size: 25px;
      }
    }
    ul {
      flex-direction: column;
    }
    li {
      font-size: 12px;
    }
  }
`;
const StyledMyInfoBtn = styled.div`
  display: flex;
  margin-top: 47px;
  padding-top: 35px;
  position: sticky;
  right: 1%;
  left: 40%;
  gap: 10px;
  .user__edit {
    width: 105px;
    height: 35px;
    border: 1px solid hsl(210, 8%, 65%);
    border-radius: 4px;
    color: #6a737c;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 5px;
  }
  .user__profile {
    width: 80px;
    height: 35px;
    border: 1px solid hsl(210, 8%, 65%);
    border-radius: 4px;
    color: #6a737c;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 5px;
  }
`;
const StyledMyList = styled.ul`
  padding-left: 200px;
  margin: 40px 0;
  display: flex;
  gap: 20px;
  font-size: 15px;
  li {
    cursor: pointer;
    padding: 4px 8px;
    border-radius: 24px;
    :hover {
      background: #dfdfdf;
    }
    :first-child {
      background: hsl(27, 90%, 50%);
      color: white;
    }
  }
  @media screen and (max-width: 600px) {
    padding-left: 20px;
  }
`;
const StyledContent = styled.div`
  padding-left: 200px;
  .stats {
    font-size: 20px;
    color: black;
    .stats__container {
      margin-top: 5px;
      padding: 10px;
      border: 1px solid hsl(210, 8%, 65%);
      border-radius: 8px;
      width: 100%;
      height: auto;
      display: flex;
      justify-content: space-around;
      align-items: center;
      > div {
        display: flex;
        align-items: center;
      }
      .stats__num {
        font-size: 20px;
        margin-right: 10px;
      }
      .stats__name {
        font-size: 14px;
      }
    }
  }
  .about,
  .posts,
  .communities {
    margin-top: 40px;
    font-size: 20px;
    color: black;
    .container {
      margin-top: 5px;
      padding: 10px;
      border: 1px solid hsl(210, 8%, 65%);
      border-radius: 8px;
      width: 100%;
      height: auto;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      align-items: center;
      font-size: 16px;
      color: #6a737c;
    }
  }
  @media screen and (max-width: 600px) {
    padding-left: 20px;
    .stats {
      .stats__container {
        height: 7vh;
        .stats__num {
          font-size: 14px;
          margin-right: 5px;
        }
        .stats__name {
          font-size: 12px;
        }
      }
    }
    .about,
    .posts,
    .communities {
      .container {
        height: 8vh;
        font-size: 14px;
        overflow: auto;
        justify-content: flex-start;
      }
    }
  }
`;

const Mypage = ({ loginSuccess }) => {
  return (
    <HomeDiv>
      <StyledMypage>
        <SideNav nowPath={"mypage"} loginSuccess={loginSuccess} />

        <div className="container">
          <div className="center__container">
            <StyledMyInfo>
              <div className="user__icon">
                {localStorage.getItem("name").slice(-2)}
              </div>
              <div className="user__info">
                <div className="user__name">{localStorage.getItem("name")}</div>
                <ul>
                  <li>
                    <svg
                      width="15"
                      height="15"
                      viewBox="0 0 14 17"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M7 4.5C7.8325 4.5 8.5 3.825 8.5 3C8.5 2.715 8.425 2.4525 8.2825 2.2275L7 0L5.7175 2.2275C5.575 2.4525 5.5 2.715 5.5 3C5.5 3.825 6.175 4.5 7 4.5Z"
                        fill="black"
                      />
                      <path
                        d="M10.45 11.9925L9.6475 11.19L8.8375 11.9925C7.8625 12.9675 6.1525 12.975 5.17 11.9925L4.3675 11.19L3.55 11.9925C3.0625 12.48 2.41 12.75 1.72 12.75C1.1725 12.75 0.42 12.5775 0 12.2925V15C0 16.1046 0.89543 17 2 17H12C13.1046 17 14 16.1046 14 15V12.2925C13.58 12.5775 12.8275 12.75 12.28 12.75C11.59 12.75 10.9375 12.48 10.45 11.9925Z"
                        fill="black"
                      />
                      <path
                        d="M11.75 7H8V5H6V7H2.25C1.005 7 0 8.005 0 9.25V10.155C0 10.965 0.91 11.625 1.72 11.625C2.11 11.625 2.485 11.475 2.755 11.1975L4.36 9.6L5.9575 11.1975C6.5125 11.7525 7.48 11.7525 8.035 11.1975L9.64 9.6L11.2375 11.1975C11.515 11.475 11.8825 11.625 12.2725 11.625C13.0825 11.625 14 10.965 14 10.155V9.25C14.0075 8.005 12.995 7 11.75 7Z"
                        fill="black"
                      />
                    </svg>
                    <span>Member for 13 days</span>
                  </li>
                  <li>
                    <svg
                      width="15"
                      height="15"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M8 16C3.64266 16 0 12.3573 0 8C0 3.64267 3.64267 0 8 0C12.3573 0 16 3.64266 16 8C16 12.3573 12.3573 16 8 16ZM8 14C11.268 14 14 11.268 14 8C14 4.732 11.268 2 8 2C4.732 2 2 4.732 2 8C2 11.268 4.732 14 8 14ZM7 4H8.01L8 8.36L11.22 10.46L10.62 11.39L7 9V4Z"
                        fill="black"
                      />
                    </svg>
                    <span>Last seen this week</span>
                  </li>
                  <li>
                    <svg
                      width="15"
                      height="15"
                      viewBox="0 0 16 17"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M13 2H14C14.5304 2 15.0391 2.21071 15.4142 2.58579C15.7893 2.96086 16 3.46957 16 4V15C16 15.5304 15.7893 16.0391 15.4142 16.4142C15.0391 16.7893 14.5304 17 14 17H2C1.46957 17 0.960859 16.7893 0.585786 16.4142C0.210714 16.0391 0 15.5304 0 15V4C0 2.9 0.9 2 2 2H3V0H5V2H11V0H13V2ZM2 6V15H14V6H2ZM4 8H6V10H4V8ZM4 11H6V13H4V11ZM7 11H9V13H7V11ZM10 11H12V13H10V11ZM10 8H12V10H10V8ZM7 8H9V10H7V8Z"
                        fill="black"
                      />
                    </svg>
                    <span>Visited 12 days, 4 consecutive</span>
                  </li>
                </ul>
              </div>
            </StyledMyInfo>
            <StyledMyList>
              <li>Profile</li>
              <li>Activity</li>
              <li>Saves</li>
              <li>Settings</li>
            </StyledMyList>
            <StyledContent>
              <div className="stats">
                <div>Stats</div>
                <div className="stats__container">
                  <div>
                    <span className="stats__num">1</span>
                    <span className="stats__name">reputation</span>
                  </div>
                  <div>
                    <span className="stats__num">0</span>
                    <span className="stats__name">reached</span>
                  </div>
                  <div>
                    <span className="stats__num">0</span>
                    <span className="stats__name">answers</span>
                  </div>
                  <div>
                    <span className="stats__num">0</span>
                    <span className="stats__name">questions</span>
                  </div>
                </div>
              </div>
              <div className="about">
                <div>About</div>
                <div className="container">
                  Your about me section is currently blank. Would you like to
                  add one?
                </div>
              </div>
              <div className="posts">
                <div>Badges</div>
                <div className="container">You have not earned any badges.</div>
              </div>
              <div className="communities">
                <div>Posts</div>
                <div className="container">
                  Just getting started? Try answering a question! Your most
                  helpful questions, answers and tags will appear here. Start by
                  answering a question or selecting tags that match topics
                  you’re interested in.
                </div>
              </div>
            </StyledContent>
          </div>
        </div>
        <StyledMyInfoBtn>
          <div className="user__edit">
            <svg
              width="14"
              height="15"
              viewBox="0 0 14 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M11.68 0.15L13.85 2.32C14.05 2.52 14.05 2.83 13.85 3.03L12.5 4.39L9.62 1.51L10.97 0.15C11.17 -0.05 11.48 -0.05 11.68 0.15ZM0 11.13L8.5 2.63L11.38 5.51L2.88 14.01H0V11.13Z"
                fill="black"
              />
            </svg>
            <div>Edit profile</div>
          </div>
          <div className="user__profile">
            <div>Profiles</div>
            <svg
              width="8"
              height="4"
              viewBox="0 0 8 4"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M0 0H8L4 4L0 0Z" fill="black" />
            </svg>
          </div>
        </StyledMyInfoBtn>
      </StyledMypage>
    </HomeDiv>
  );
};

export default Mypage;
