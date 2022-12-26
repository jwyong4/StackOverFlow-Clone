import React, { useState } from "react";
import styled from "styled-components";
import PopOver from "../component/PopOver";
import { IoPeopleCircleSharp } from "react-icons/io5";
import { questionListTime } from "../util/timeFunc";

const PostLayout = styled.div`
  display: flex;
  grid-template-columns: max-content 1fr;
`;

const PostLayoutRight = styled.div`
  margin-left: 15px;
  position: relative;
  height: auto;
  vertical-align: top;
  min-height: 0;
  width: 680px;
  .post {
    width: auto;
    box-sizing: inherit;
    width: 680px;
    background-color: hsl(0deg 0% 97%);
    color: hsl(210deg 8% 20%);
    border-radius: 5px;
    font-family: "-apple-system", "BlinkMacSystemFont", "Segoe UI", " Roboto",
      "Oxygen", "Ubuntu", "Cantarell", "Open Sans", "Helvetica Neue", sans-serif;
    margin-top: 0;
    margin-bottom: 0.4em;
    padding: 12px;
  }
`;

const TextBottomInfo = styled.div`
  display: flex;
  padding-top: 4px;
  margin-bottom: 16px;
  margin-top: 16px;
  align-items: flex-start !important;
  flex-wrap: wrap !important;
  align-items: flex-start !important;
  flex-wrap: wrap !important;
`;

const InfoContainer = styled.div`
  display: flex;
  flex: 1 auto !important;
  margin: 4px;
  color: hsl(210deg 8% 45%);
  position: relative;
  align-items: center;
  font-size: 12.4px;

  .flex--item {
    margin: 4px;
    box-sizing: inherit;
    a {
      color: hsl(210deg 8% 45%);
      text-decoration: none;
      cursor: pointer;
    }
    button {
      background: none;
      box-shadow: none;
      text-align: inherit;
      text-decoration: none;
      cursor: pointer;
    }
  }
`;

const TimeContainer = styled.div`
  margin-right: 0;
  margin-left: 0;
  margin: 4px;
  display: flex;
  color: hsl(206deg 100% 40%);
  font-size: 11.4px;
  text-align: left;
  vertical-align: top;
  width: 200px;
  align-items: center;
  padding: 5px 6px 7px 7px;
`;

const ProfileContainer = styled.div`
  font-size: 11.4px;
  border-radius: 3px;
  background-color: hsl(205deg 66% 91%);
  margin-right: 0;
  margin-left: 0;
  margin: 4px;
  width: 200px;
  box-sizing: border-box;
  padding-top: 5px;
  padding: 5px 6px 7px 7px;
  .user-info-flex {
    display: flex;
    margin-top: 3px;
  }
  .avatar__image {
    width: 32px;
    height: 32px;
    margin-right: 8px;
  }
  .user-detail {
    width: 130px;
    margin: 0 0 0 0;
  }
  .user-detail-flex {
    display: flex;
    flex-direction: column;
  }
  .user-nickname {
    color: hsl(206deg 100% 40%) !important ;
  }
`;

const CommentConTainer = styled.div`
  box-sizing: inherit;
  .comments {
    width: 100%;
    padding-bottom: 10px;
    margin-top: 12px;
    border-color: hsl(210deg 8% 90%) !important;
    border-top-style: solid !important;
    border-top-width: 1px !important;
  }
  ul {
    display: flex;
    flex-direction: column;
    grid-template-columns: max-content 1fr;
    list-style-type: none;
    margin: 0;
    padding-left: 0;
  }
  li {
    padding: 6px 0;
    border-bottom: 1px solid hsl(210deg 8% 95%);
    flex-grow: 1;
    font-size: 12px;
    line-height: 1.4;
  }
`;

const AddCommentMsg = styled.div`
  box-sizing: inherit;
  opacity: 0.6;
  padding: 0 3px 2px;
  color: hsl(210deg 8% 55%);
  a {
    color: hsl(210deg 8% 55%);
    &:focus,
    &:hover,
    &:visited,
    &:link,
    &:active {
      text-decoration: none !important;
    }
    :hover {
      color: hsl(206deg 100% 40%);
    }
  }
`;

const ProblemTextArea = styled.textarea`
  width: 100%;
  box-sizing: border-box;
  height: 256px;
  min-height: inherit;
  display: flex !important;
  box-shadow: 0 1px 2px hsl(210deg 8% 5% / 10%) inset;
  border: 1px solid hsl(210, 8%, 80%);
  background: hsl(0, 0%, 100%);
  color: hsl(210, 8%, 25%);
  padding: 8px 10px;
  margin-bottom: 24px;
  :focus {
    border: 1px solid #38a9f0;
    box-shadow: 0px 0px 3px 2px rgba(56, 169, 240, 0.75);
  }
`;

const EditContainer = styled.div`
  background: none;
  box-shadow: none;
  text-align: inherit;
  text-decoration: none;
  cursor: pointer;
  display: flex;
  flex: 1 auto !important;
  margin: 4px;
  color: hsl(210deg 8% 45%);
  position: relative;
  align-items: center;
  font-size: 13px;
  padding: 0;
  button {
    margin-right: 13px;
  }
`;

const Answer = ({
  answerId,
  content,
  createdTime,
  questionId,
  memberId,
  memberName,
}) => {
  const [editState, setEditState] = useState({
    content: "",
  });
  const [isEdit, setIsEdit] = useState(false);
  const handleQuitEdit = () => setIsEdit(!isEdit);

  const handleChangeEditState = (e) => {
    return setEditState((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  // 답변 수정 - 서버 통신
  const fetchAnswerHandler = (e) => {
    e.preventDefault();
    fetch(
      `${process.env.REACT_APP_URL}/question/${questionId}/answers/${answerId}`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(editState),
        redirect: "follow",
      }
    )
      .then((response) => response.json())
      .then((result) => {
        setEditState({
          title: "",
          content: "",
        });
        // console.log(result);
        window.location.reload();
      })
      .catch((error) => console.log("error", error));
  };

  // 답변 삭제 - 서버 통신
  const deleteAnswerHandler = (e) => {
    if (window.confirm("정말 삭제합니까?")) {
      e.preventDefault();
      fetch(
        `${process.env.REACT_APP_URL}/question/${questionId}/answers/${answerId}`,
        {
          method: "DELETE",
        }
      )
        .then((result) => {
          window.location.reload();
          // console.log(result);
        })
        .catch((error) => console.log("error", error));
      alert("삭제되었습니다.");
    } else {
      alert("취소되었습니다.");
    }
  };

  const localMemberId = localStorage.getItem("memberId");

  return (
    <>
      <PostLayout key={answerId}>
        <PopOver />
        <div className="flex-box">
          <PostLayoutRight className="PostLayoutRight">
            <div className="post">
              <span>
                {isEdit ? (
                  <>
                    <ProblemTextArea
                      type="text"
                      name="content"
                      onChange={(e) => handleChangeEditState(e)}
                    ></ProblemTextArea>
                    <EditContainer>
                      <button onClick={fetchAnswerHandler}>Save</button>
                      <button onClick={handleQuitEdit}>Cancel</button>
                    </EditContainer>
                  </>
                ) : (
                  <>
                    {" "}
                    {content.split("\n").map((line, index) => {
                      return (
                        <span key={index}>
                          {line}
                          <br />
                        </span>
                      );
                    })}
                  </>
                )}
              </span>
            </div>

            <TextBottomInfo>
              <InfoContainer>
                <div className="flex--item">
                  <a href="https://stackoverflow.com/">Share</a>
                </div>

                {localMemberId == memberId ? (
                  <div className="flex--item" onClick={handleQuitEdit}>
                    <button>Edit</button>
                  </div>
                ) : null}

                <div className="flex--item">
                  <button>Following</button>
                </div>

                {localMemberId == memberId ? (
                  <div className="flex--item">
                    <button onClick={deleteAnswerHandler}>Delete</button>
                  </div>
                ) : null}
              </InfoContainer>

              <TimeContainer>
                editied {questionListTime(createdTime)}
              </TimeContainer>

              <ProfileContainer>
                <div>answered {questionListTime(createdTime)}</div>
                <div className="user-info-flex">
                  <IoPeopleCircleSharp className="avatar__image" />
                  <div className="user-detail">
                    <div className="user-detail-flex">
                      <div className="user-nickname">{memberName}</div>
                      <div>{memberId}</div>
                    </div>
                  </div>
                </div>
              </ProfileContainer>
            </TextBottomInfo>

            <CommentConTainer>
              <div className="comments">
                <ul>
                  <li>
                    You may need one more HTML that wrap sidebar and content
                    together to be a single row. Then controls the center
                    position in that row for sidebar and content.
                  </li>
                  <li>
                    @vee, Thank you for the comment. Yes, the additional wrap is
                    the easy solution but I am expecting that vaunted CSS Grid
                    can do without the additional wrapper.{" "}
                  </li>
                  <li>
                    Yes, of course it can. But your target layout clearly has
                    four grid columns, not two.
                  </li>
                </ul>
              </div>
              <AddCommentMsg>
                <a href="#">add a comment</a>
              </AddCommentMsg>
            </CommentConTainer>
          </PostLayoutRight>
        </div>
      </PostLayout>
    </>
  );
};

export default Answer;
