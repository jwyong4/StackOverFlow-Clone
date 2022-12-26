import React from "react";
import styled from "styled-components";
import { IoPeopleCircleSharp } from "react-icons/io5";
import { Link } from "react-router-dom";
import { questionListTime } from "../util/timeFunc";

const QuestionList = ({ data, nowPath }) => {
  return (
    <BodyDiv className="post__list">
      {data &&
        data.map((post) => (
          <Post key={post.questionId}>
            <Stats>
              <div>{post.voteCount ? post.voteCount : 0} votes</div>
              <div>{post.answers.length} answers</div>
              <div>{post.view ? post.view : 0} views</div>
            </Stats>
            <Content>
              <Link to={`/question/${post.questionId}`} className="title">
                <span>{post.title}</span>
              </Link>
              {nowPath === "home" ? null : (
                <div className="post__content">{post.content}</div>
              )}
              <div className="user__info">
                <IoPeopleCircleSharp className="avatar__image"></IoPeopleCircleSharp>
                <div className="nickname">{post.memberName}</div>
                <time className="time">
                  asked {questionListTime(post.createdTime)}
                </time>
              </div>
            </Content>
          </Post>
        ))}

      {/* {testData &&
        testData
          .map((post) => (
            <Post key={post.id}>
              <Stats>
                
              </Stats>
              <Content>
                <Link to={`/question/${post.id}`}>
                <h3>{post.title}</h3>
                </Link>
                <div className="post__content">{post.body}</div>
                <div className="user__info">
                  <IoPeopleCircleSharp className="avatar__image"></IoPeopleCircleSharp>
                  <div className="nickname">{post.id}</div>
                  <time className="time">
                    asked {timedata(post.createdTime)}
                  </time>
                </div>
              </Content>
            </Post>
          ))
          .slice((page - 1) * 15, page * 15)} */}
    </BodyDiv>
  );
};

const BodyDiv = styled.div`
  width: 750px;
  height: auto;
  min-height: 70%;
  > :last-child {
    border-bottom: 1px solid rgba(106, 115, 124, 0.3);
  }
  @media screen and (max-width: 1080px) {
    width: 100%;
    flex-direction: column;
  }
`;

const Post = styled.div`
  width: 100%;

  padding: 16px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;

  border-top: 1px solid rgba(106, 115, 124, 0.3);
  @media screen and (max-width: 605px) {
    flex-direction: column;
  }
`;
const Stats = styled.div`
  width: 100px;
  margin-right: 16px;
  margin-bottom: 4px;
  font-size: 13px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-end;
  > div {
    margin-bottom: 5px;
  }
`;

const Content = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  text-align: start;

  .title {
    text-decoration-line: none;
    > span {
      margin: -2px 0px 8px;
      color: hsl(206, 100%, 40%);
      font-size: 20px;
      font-weight: 400;
      // 글자수가 화면 넘어가면 자동으로 자름
      overflow: hidden;
      display: -webkit-box;
      -webkit-line-clamp: 2; /* 라인수 */
      -webkit-box-orient: vertical;
      text-overflow: ellipsis;

      &:hover {
        color: #1ea8fc;
        cursor: pointer;
      }
    }
  }
  > .post__content {
    height: auto;
    margin: -2px 0px 8px;
    font-weight: 300;

    // 글자수가 화면 넘어가면 자동으로 자름
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 2; /* 라인수 */
    -webkit-box-orient: vertical;
    text-overflow: ellipsis;
  }
  .user__info {
    width: 100%;
    height: 35px;
    font-size: 12px;
    display: flex;
    justify-content: end;
    align-items: center;
  }
  .nickname {
    color: #0074cc;
    margin-right: 5px;
  }
  .time {
    color: #6a737c;
  }
  .avatar__image {
    width: 30px;
    height: 30px;
    margin-right: 5px;
  }
`;

export default QuestionList;
