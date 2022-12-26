import React from "react";
import styled from "styled-components";

const SideDiv = styled.div`
  width: 300px;
  height: 90%;

  padding: 0;
  margin-top: 47px;
  margin-left: 24px;
  margin-bottom: 15px;
  @media screen and (max-width: 1080px) {
    width: 96%;
  }
`;
const Anchors = styled.div`
  width: 100%;
  margin-bottom: 16px;
  padding: 0;

  color: #525960;
  border: 1px solid hsl(47, 65%, 84%);
  background-color: #fdf7e2;

  box-shadow: rgba(0, 0, 0, 0.05) 0px 1px 2px 0px,
    rgba(0, 0, 0, 0.05) 0px 1px 4px 0px, rgba(0, 0, 0, 0.05) 0px 2px 8px 0px;
  > :first-child .anchors__title {
    border-radius: 3px 3px 0 0;
    border-bottom: 1px solid hsl(47, 65%, 84%);
  }
  > :last-child .anchors__title {
    border-radius: 0 0 3px 3px;
    border: 1px solid hsl(47, 65%, 84%);
  }
  .anchors__title {
    padding: 12px 15px;
    margin: -1px -1px -1px -1px;
    background-color: #fbf3d5;
    font-weight: bold;
    border: 1px solid hsl(47, 65%, 84%);
  }

  .anchors__icon {
    margin-right: 5px;
  }
  .anchors__content {
    padding: 6px 0;
    margin: 0 16px;
    color: #3b4045;

    line-height: 17px;
    display: flex;
    flex-direction: row;

    > span {
      font-size: 13px;
    }
  }
`;

const SidebarWidget = () => {
  return (
    <SideDiv>
      <Anchors>
        {/* The Overflow Blog */}
        <div className="anchors__title">The Overflow Blog</div>
        <div className="anchors__content">
          <div className="anchors__icon">
            {/* 스택오버플로우 아이콘 사용 */}
            <svg
              width="11"
              height="11"
              viewBox="0 0 11 11"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9.09369 0.710806L10.2347 1.83019C10.4347 2.03005 10.4347 2.33983 10.2347 2.53968L9.08978 3.70381L7.21 1.86474L8.38369 0.710806C8.58369 0.510949 8.89369 0.510949 9.09369 0.710806Z"
                fill="black"
              />
              <path
                d="M0 9.12003L6.37 2.69427L8.24664 4.57034L1.88 11H0V9.12003Z"
                fill="black"
              />
            </svg>
          </div>
          <span>
            Introducing the Ask Wizard: Your guide to crafting high-quality
            questions
          </span>
        </div>
        <div className="anchors__content">
          <div className="anchors__icon">
            {" "}
            <svg
              width="11"
              height="11"
              viewBox="0 0 11 11"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9.09369 0.710806L10.2347 1.83019C10.4347 2.03005 10.4347 2.33983 10.2347 2.53968L9.08978 3.70381L7.21 1.86474L8.38369 0.710806C8.58369 0.510949 8.89369 0.510949 9.09369 0.710806Z"
                fill="black"
              />
              <path
                d="M0 9.12003L6.37 2.69427L8.24664 4.57034L1.88 11H0V9.12003Z"
                fill="black"
              />
            </svg>
          </div>
          <span>
            How to get more engineers entangled with quantum computing (Ep. 501)
          </span>
        </div>
        {/* Featured on Meta */}
        <div className="anchors__title">Featured on Meta</div>
        <div className="anchors__content">
          <div className="anchors__icon">
            <svg
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M10 11L13 14V4C13 2.89543 12.1046 2 11 2H3C1.89543 2 1 2.89543 1 4V9C1 10.1046 1.89543 11 3 11H10Z"
                fill="black"
              />
            </svg>
          </div>

          <span>The 2022 Community-a-thon has begun!</span>
        </div>
        <div className="anchors__content">
          <div className="anchors__icon">
            <svg
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M10 11L13 14V4C13 2.89543 12.1046 2 11 2H3C1.89543 2 1 2.89543 1 4V9C1 10.1046 1.89543 11 3 11H10Z"
                fill="black"
              />
            </svg>
          </div>
          <span>Mobile app infrastructure being decommissioned</span>
        </div>
        <div className="anchors__content">
          <div className="anchors__icon">
            <svg
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M10 11L13 14V4C13 2.89543 12.1046 2 11 2H3C1.89543 2 1 2.89543 1 4V9C1 10.1046 1.89543 11 3 11H10Z"
                fill="black"
              />
            </svg>
          </div>
          <span>Staging Ground Workflow: Canned Comments</span>
        </div>
        <div className="anchors__content">
          <div className="anchors__icon">
            <svg
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M10 11L13 14V4C13 2.89543 12.1046 2 11 2H3C1.89543 2 1 2.89543 1 4V9C1 10.1046 1.89543 11 3 11H10Z"
                fill="black"
              />
            </svg>
          </div>
          <span>The Ask Wizard (2022) has graduated</span>
        </div>
        {/* Hot Meta Posts
        <div className="anchors__title">Hot Meta Posts</div>
        <div className="anchors__content">
          <div className="anchors__icon"></div>
          <span>Unsure about an edit that changes a very popular answer</span>
        </div>
        <div className="anchors__content">
          <div className="anchors__icon"></div>
          <span>Don't read the freaking [user-manual]</span>
        </div> */}
      </Anchors>
    </SideDiv>
  );
};
export default SidebarWidget;
