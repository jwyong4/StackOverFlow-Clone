import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import useFetch from "../util/useFetch";
import { useParams } from "react-router-dom";
import { questionListTime } from "../util/timeFunc";
import SidebarWidget from "../questionComp/SidebarWidget";
import PopOver from "../component/PopOver";
import { TagInput } from "rsuite";
import { IoPeopleCircleSharp } from "react-icons/io5";
import { Link, useNavigate } from "react-router-dom";
import Answer from "../component/Answer";
import SideNav from "../component/SideNav";
const Container = styled.div`
  height: auto;
  margin: 0;
  padding: 0;
  border: 0;
  font: inherit;
  font-size: 100%;
  line-height: inherit;
  font-size: 100%;
  vertical-align: baseline;
  margin-top: 0;
  max-width: 1264px;
  width: 100%;
  min-height: 100%;
  background: none;
  display: flex;
  justify-content: center;
  position: relative;
  flex: 1 0 auto;
  margin: 0 auto;
  text-align: left;
  /* padding-top: 47px; // Nav 높이만큼 */
  /* background-color: tan; */
  /* box-sizing: inherit; */
  .flex-box {
    display: flex;
    flex-direction: column;
  }
  .void {
    min-width: 50vw;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

const Content = styled.div`
  display: flex;
  max-width: 1100px;
  width: calc(100% - 164px);
  background-color: hsl(0deg 0% 100%);
  border-radius: 0;
  border: 1px solid hsl(210deg 8% 85%);
  border-top-width: 0;
  border-bottom-width: 0;
  border-left-width: 1px;
  border-right-width: 0;
  padding: 47px 24px 24px 24px;
  box-sizing: border-box;
`;

const MainEntity = styled.div`
  box-sizing: inherit;
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
`;
const QuestionHeader = styled.div`
  flex-flow: row nowrap;
  justify-content: space-between;
  display: flex !important;
  box-sizing: inherit;
  .question--title {
    overflow-wrap: break-word !important;
    font-size: 1.6rem;
    margin-bottom: 8px !important;
    flex: 1 auto !important;
    line-height: 1.3;
    margin: 0 0 1em;
    font-weight: 448;
  }
  .ask--flex {
    box-sizing: inherit;
    width: 100px;
  }
`;

const ButtonCSS = styled.button`
  min-width: 100px;
  height: 38px;
  background-color: hsl(206, 100%, 52%);
  color: hsl(0, 0%, 100%);
  border-radius: 5px;
  border: 1px solid transparent;
  outline: none;
  font-weight: normal;
  text-align: center;
  position: relative;
  font-size: 12px;
  cursor: pointer;
  box-shadow: inset 0 1px 0 0 hsl(0deg 0% 100% / 40%);
  &:hover {
    background-color: hsl(206, 100%, 40%);
  }
  &:active {
    box-shadow: none;
  }
`;

const PostInfo = styled.div`
  display: flex !important;
  padding-bottom: 8px !important;
  margin-bottom: 16px !important;
  flex-wrap: wrap !important;
  border-color: hsl(210deg 8% 90%) !important;
  border-bottom-style: solid !important;
  border-bottom-width: 1px !important;
  .post--info {
    white-space: nowrap !important;
    margin-bottom: 8px !important;
    margin-right: 16px !important;
    box-sizing: inherit;
    span {
      color: hsl(210deg 8% 45%);
      margin-right: 3px !important;
      font-size: 0.86rem;
    }
    .post--state {
      font-size: 0.84rem;
    }
  }
`;

const MainBar = styled.div`
  float: left;
  margin: 0;
  padding: 0;
  box-sizing: inherit;
`;

const SurveyContainer = styled.div`
  .div {
    min-height: auto;
    margin-left: 0;
  }
  .button-container {
    width: 728px;
    height: 24px;
    button {
      display: inline;
      padding: 0;
      border: none;
      border-radius: 0;
      outline: initial;
      color: hsl(206deg 100% 40%);
      cursor: pointer;
      user-select: auto;
      -webkit-appearance: none;
      -moz-appearance: none;
      appearance: none;
      background-color: transparent;
      float: right !important;
      font-size: 0.7rem;
    }
  }
`;

const ModalBackDrop = styled.div`
  position: fixed;
  z-index: 999;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.4);
  display: grid;
  place-items: center;
`;

const ModalView = styled.div.attrs((props) => ({
  role: "dialog",
}))`
  border-radius: 7px;
  background-color: white;
  z-index: 9000;
  opacity: 1;
  max-width: 600px;
  padding: 24px;
  box-shadow: 0 1px 4px hsla(0, 0%, 0%, 0.09), 0 3px 8px hsla(0, 0%, 0%, 0.09),
    0 4px 13px hsla(0, 0%, 0%, 0.13);
  h1 {
    font-size: 2rem;
    font-weight: normal;
    box-sizing: inherit;
    margin-bottom: 16px;
    color: hsl(210, 8%, 5%);
    line-height: calc(13+2) / 13;
  }
  .modal-body {
    margin-bottom: 24px;
    color: hsl(210, 8%, 25%);
  }
  fieldset {
    display: flex !important;
    flex-direction: column !important;
    margin-right: 0;
    margin-left: 0;
    border: 0;
    padding-left: 0;
    legend {
      color: hsl(210, 8%, 5%);
      font-size: 1rem;
      font-weight: 600;
      margin-left: 0;
      padding-left: 0;
    }
    p {
      margin-top: 2px !important;
      font-size: 12px;
      margin-right: 0;
      margin-left: 0;
      margin-bottom: 2px;
      margin-top: 2px;
    }
    .upload {
      width: 400px;
      margin-right: 0;
      margin-left: 0;
      margin: 4;
      position: relative;
      padding: 16px;
      border-color: hsl(210deg 11% 65%);
      border-style: dashed !important;
      border-width: 1px !important;
      margin-top: 10px;
      margin-bottom: 10px;
      p {
        text-align: center;
        margin-bottom: 8px !important;
        margin-top: 0px;
        color: hsl(210deg 8% 25%);
      }
    }
  }
  .fieldset-second {
    display: flex !important;
    flex-direction: column !important;
    margin-right: 0;
    margin-left: 0;
    margin-top: 16px !important;
    margin-bottom: 16px !important;
  }
  .item {
    display: flex !important;
    margin-bottom: 7px;
    label {
      font-size: 0.9rem;
    }
    input {
      margin-left: 0px;
      margin-right: 7px;
      border: 1px solid hsl(210deg 8% 75%);
      outline: 0;
      cursor: pointer;
      vertical-align: middle;
      appearance: none;
      border: max(2px, 0.1em) solid gray;
      border-radius: 50%;
      width: 1.25em;
      height: 1.25em;
      :checked {
        border: 3px solid hsl(206deg 100% 40%);
        box-shadow: 0 0 0 max(4px, 0.2em) hsl(205deg 67% 93%);
      }
      :focus-visible {
        outline-offset: max(2px, 0.1em);
        outline: max(2px, 0.1em) dotted tomato;
      }
    }
  }
`;

const ModalFooter = styled.div`
  display: flex !important;
  margin-top: 0;
  margin-bottom: 0;
  margin: 4;
  .cancel-button {
    display: inline;
    padding: 0;
    border: none;
    border-radius: 0;
    outline: initial;
    color: hsl(206deg 100% 40%);
    cursor: pointer;
    user-select: auto;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    background-color: transparent;
    float: right !important;
    font-size: 0.84rem;
    padding: 0.8rem;
  }
`;

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
    font-family: "-apple-system", "BlinkMacSystemFont", "Segoe UI", "Roboto",
      "Oxygen", "Ubuntu", "Cantarell", "Open Sans", "Helvetica Neue", sans-serif;
    margin-top: 0;
    margin-bottom: 0.4em;
    padding: 12px;
  }
`;

const TagContainer = styled.div`
  background-color: white !important;
  text-align: left;
  vertical-align: baseline;
  padding: 24px;
  color: hsl(200deg 8% 15%);
  padding: 0 0 0 0 !important;
  padding-right: 100px;
  .tags {
    display: flex;
    padding: 0;
    min-height: 24px !important;
    color: hsl(205deg 47% 42%);
    font-size: 0.08rem;
    font-weight: 0;
    margin-top: 24px;
    margin-bottom: 15px;
  }
  .tag {
    align-items: center;
    border: 2px;
    justify-content: center;
    background-color: hsl(205deg 46% 92%);
    border-radius: 5px;
    border-width: 1px;
    border-style: solid;
    border-color: transparent;
    color: hsl(205deg 47% 42%);
    font-size: 12px;
    margin-right: 10px;
    padding: 5px;
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
    color: hsl(206deg 100% 40%);
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

const FirstAnswer = styled.div`
  width: 100%;
  margin-top: 10px;
  float: none;
  padding-top: 10px;
  margin-bottom: 12px !important;
  h2 {
    padding-top: 8px;
    font-weight: normal;
    padding: 0 10px 0 0;
    line-height: 1.4;
    font-size: 1.1rem;
  }
`;

const Answers = styled.div``;

const WriteAnswer = styled.div`
  width: auto;
  float: none;
  padding-top: 10px;
  h2 {
    padding-top: 8px;
    font-weight: normal;
    padding: 0 10px 0 0;
    line-height: 1.4;
    font-size: 1rem;
  }
  .your-answer-header {
    font-weight: 540;
    padding-top: 10px;
    font-size: 1.1rem;
    margin: 0 0 1em;
    box-sizing: inherit;
  }
`;

const EditInputArea = styled.input`
  width: 712px;
  box-sizing: border-box;
  height: 36px;
  min-height: inherit;
  display: flex !important;
  box-shadow: 0 1px 2px hsl(210deg 8% 5% / 10%) inset;
  border: 1px solid hsl(210, 8%, 80%);
  background: hsl(0, 0%, 100%);
  color: hsl(210, 8%, 25%);
  padding: 8px 10px;
  margin-bottom: 24px;
  padding: 12px;
  :focus {
    border: 1px solid #38a9f0;
    box-shadow: 0px 0px 3px 2px rgba(56, 169, 240, 0.75);
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

const NoticeContainer = styled.aside`
  display: flex;
  background: hsl(47deg 87% 94%);
  border-color: hsl(47deg 69% 69%);
  border-style: solid;
  font-size: 13px;
  border-radius: 3px;
  border-width: 1px;
  padding: 16px;
  display: flex !important;
  padding-right: 4px;
  padding-top: 4px;
  align-items: flex-start !important;
  margin-top: 14px;
  margin-bottom: 24px;
  div {
    padding-top: 8px;
    box-sizing: inherit;
    position: relative;
    flex: 1 0 auto;
    margin: 0 auto;
    text-align: left;
  }
  p {
    margin-bottom: 1em;
  }
  ul {
    li {
      display: list-item;
      list-style-type: disc !important;
    }
  }
  button {
    background-color: transparent;
    padding: 0.8em;
  }
`;

const Navigate = styled.span`
  color: hsl(206deg 100% 40%);
  text-decoration: none;
  cursor: pointer;
`;

const LeftSide = styled.div`
  display: flex;
  box-sizing: inherit;
  width: 100%;
  height: auto;
`;

const HeaderContainer = styled.div`
  box-sizing: inherit;
  width: 100%;
  height: auto;
`;

const Question = ({ loginSuccess }) => {
  const { id } = useParams();

  let url = `${process.env.REACT_APP_URL}/question/${id}`;
  const [data, error] = useFetch(url);
  const [isOpen, setIsOpen] = useState(false);
  const [notice, setNotice] = useState(false);
  const [state, setState] = useState({
    questionId: id,
    memberId: localStorage.getItem("memberId"),
    content: "",
  });

  // 본문 편집
  const [editState, setEditState] = useState({
    title: "",
    content: "",
  });

  const [isEdit, setIsEdit] = useState(false);

  let navigate = useNavigate();

  const handleChangeEditState = (e) => {
    return setEditState((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const openModalHandler = () => {
    setIsOpen(!isOpen);
  };

  // 답변창 - 입력 값에 따라 상태 변경으로 답변 텍스트 저장
  const handleChangeState = (e) => {
    return setState((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  // 답변 등록 - 서버 통신
  const postAnswerHandler = (e) => {
    e.preventDefault();
    fetch(`${process.env.REACT_APP_URL}/question/${id}/answers`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(state),
      redirect: "follow",
    })
      .then((response) => response.json())
      .then((result) => {
        setState({
          questionId: id,
          memberId: localStorage.getItem("memberId"),
          content: "",
        });
        // console.log(result);
        window.location.reload();
      })
      .catch((error) => console.log("error", error));
  };

  // 게시물 수정 - 서버 통신
  const fetchQuestionHandler = (e) => {
    e.preventDefault();
    fetch(`${process.env.REACT_APP_URL}/question/ask/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(editState),
      redirect: "follow",
    })
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

  // 질문 삭제 - 서버 통신
  const deleteQuestionHandler = (e) => {
    if (window.confirm("정말 삭제합니까?")) {
      e.preventDefault();
      fetch(`${process.env.REACT_APP_URL}/question/${id}`, {
        method: "DELETE",
      })
        .then((result) => {
          window.location.reload();
          // console.log(result);
        })
        .catch((error) => console.log("error", error));
      alert("삭제되었습니다.");
      navigate("/questions");
      window.location.reload();
    } else {
      alert("취소되었습니다.");
    }
  };

  // report add 목록
  const inputArray = ["Inappropriate", "Distracting", "Other"];
  // 게시물의 태그 기본 데이터,
  const tags = [
    "javascript",
    "python",
    "php",
    "android",
    "c++",
    "css",
    "ios",
    "sql",
    "r",
    "node.js",
    "reactjs",
    "arrays",
    "mysql",
    "c#",
    "json",
  ];
  const tagArray = [];
  const getTags = () => {
    for (let i = 0; i < 4; i += 1) {
      const pick = tags.splice(Math.floor(Math.random() * (15 - i)), 1)[0];
      tagArray.push(pick);
    }
    return tagArray;
  };

  // 편집 상태 변경 함수
  const toggleIsEdit = () => setIsEdit(!isEdit);
  // 편집 취소 함수
  const handleQuitEdit = () => setIsEdit(false);

  const memberId = localStorage.getItem("memberId");

  return (
    <div>
      {getTags()}
      <Container>
        <SideNav nowPath={"questions"} loginSuccess={loginSuccess} />
        {data ? (
          <Content>
            <MainEntity className="MainEntity">
              <HeaderContainer className="HeaderContainer">
                <QuestionHeader className="QuestionHeader">
                  <h1 className="question--title">
                    {isEdit ? (
                      <EditInputArea
                        type="text"
                        name="title"
                        onChange={(e) => handleChangeEditState(e)}
                      ></EditInputArea>
                    ) : (
                      data.data.title
                    )}
                  </h1>

                  <div className="ask--flex">
                    <ButtonCSS
                      onClick={() => {
                        if (loginSuccess) {
                          navigate("/ask");
                        } else {
                          alert(
                            "You must be logged in to ask a question on Stack Overflow"
                          );
                          navigate("/login");
                        }
                      }}
                    >
                      Ask Question
                    </ButtonCSS>
                  </div>
                </QuestionHeader>
                <PostInfo>
                  <div className="post--info">
                    <span>Asked</span>
                    <span className="post--state">
                      {questionListTime(data.data.createdTime)}
                    </span>
                  </div>
                  <div className="post--info">
                    <span>Modified</span>
                    <span className="post--state">
                      {questionListTime(data.data.createdTime)}
                    </span>
                  </div>
                  <div className="post--info">
                    <span>Viewed</span>
                    <span className="post--state">{data.data.view}</span>
                  </div>
                </PostInfo>
              </HeaderContainer>

              <LeftSide className="LeftSide">
                <MainBar className="MainBar">
                  <SurveyContainer>
                    <div>
                      <img src="../img/survey.png" alt="survey ad"></img>
                    </div>
                    <div className="button-container">
                      <button onClick={openModalHandler}>Report this ad</button>
                    </div>
                    {isOpen === true ? (
                      <ModalBackDrop onClick={openModalHandler}>
                        <ModalView onClick={(e) => e.stopPropagation()}>
                          <h1>Report Ad</h1>
                          <div className="modal-body">
                            <fieldset>
                              <legend>Why are you reporting this ad?</legend>
                              {inputArray.map((it) => (
                                <div className="item">
                                  <input
                                    name="report-input"
                                    type="radio"
                                  ></input>
                                  <label>{it}</label>
                                </div>
                              ))}
                            </fieldset>
                            <fieldset className="fieldset-second">
                              <legend>Ad Image</legend>
                              <p>
                                Provide an image of the ad you are reporting
                              </p>
                              <div className="upload">
                                <p>Upload from your computer</p>
                                <p>Allows *.png and *.jpg - up to 2MB</p>
                              </div>
                            </fieldset>
                            <ModalFooter>
                              <ButtonCSS onClick={openModalHandler}>
                                Send Feedback
                              </ButtonCSS>
                              <button
                                className="cancel-button"
                                onClick={openModalHandler}
                              >
                                Cancel
                              </button>
                            </ModalFooter>
                          </div>
                        </ModalView>
                      </ModalBackDrop>
                    ) : null}
                  </SurveyContainer>

                  <PostLayout>
                    <PopOver voteCount={data.data.voteCount} id={id} />
                    <PostLayoutRight>
                      <div className="post">
                        <div>
                          {isEdit ? (
                            <>
                              <ProblemTextArea
                                type="text"
                                name="content"
                                onChange={(e) => handleChangeEditState(e)}
                              ></ProblemTextArea>
                              <EditContainer>
                                <button onClick={fetchQuestionHandler}>
                                  Save
                                </button>
                                <button onClick={handleQuitEdit}>Cancel</button>
                              </EditContainer>
                            </>
                          ) : (
                            <>
                              {" "}
                              {data.data.content
                                .split("\n")
                                .map((line, index) => {
                                  return (
                                    <span key={index}>
                                      {line}
                                      <br />
                                    </span>
                                  );
                                })}
                            </>
                          )}
                        </div>
                      </div>

                      <TagContainer>
                        <ul className="tags">
                          {tagArray.map((tag, i) => (
                            <li className="tag" key={i}>
                              <div>{tag}</div>
                            </li>
                          ))}
                        </ul>
                      </TagContainer>
                      <TextBottomInfo>
                        <InfoContainer>
                          <div className="flex--item">
                            <a href="https://stackoverflow.com/">Share</a>
                          </div>

                          {memberId == data.data.memberId ? (
                            <div className="flex--item">
                              <button onClick={() => toggleIsEdit()}>
                                Edit
                              </button>
                            </div>
                          ) : null}

                          <div className="flex--item">
                            <button>Following</button>
                          </div>

                          {memberId == data.data.memberId ? (
                            <div className="flex--item">
                              <button onClick={deleteQuestionHandler}>
                                Delete
                              </button>
                            </div>
                          ) : null}
                        </InfoContainer>

                        <TimeContainer>
                          {questionListTime(data.data.createdTime)}
                        </TimeContainer>

                        <ProfileContainer>
                          <div>
                            asked {questionListTime(data.data.createdTime)}
                          </div>
                          <div className="user-info-flex">
                            <IoPeopleCircleSharp className="avatar__image" />
                            <div className="user-detail">
                              <div className="user-detail-flex">
                                <div className="user-nickname">
                                  {data.data.memberName}
                                </div>
                                <div>{data.data.memberId}</div>
                              </div>
                            </div>
                          </div>
                        </ProfileContainer>
                      </TextBottomInfo>
                      <CommentConTainer>
                        <div className="comments">
                          <ul>
                            <li>
                              You may need one more HTML that wrap sidebar and
                              content together to be a single row. Then controls
                              the center position in that row for sidebar and
                              content.
                            </li>
                            <li>
                              @vee, Thank you for the comment. Yes, the
                              additional wrap is the easy solution but I am
                              expecting that vaunted CSS Grid can do without the
                              additional wrapper.{" "}
                            </li>
                            <li>
                              Yes, of course it can. But your target layout
                              clearly has four grid columns, not two.
                            </li>
                          </ul>
                        </div>
                        <AddCommentMsg>
                          <a href="#">add a comment</a>
                        </AddCommentMsg>
                      </CommentConTainer>
                    </PostLayoutRight>
                  </PostLayout>
                  <FirstAnswer>
                    <h2>{data.data.answers.length} Answer</h2>
                  </FirstAnswer>

                  <div>
                    {data.data.answers.map((it) => (
                      <Answer key={it.answerId} {...it} />
                    ))}
                  </div>
                  <FirstAnswer>
                    <h2>
                      Know someone who can answer? Share a link to this
                      <a href="#"> question </a>
                      via email, Twitter, or Facebook.
                    </h2>
                  </FirstAnswer>
                  <Answers></Answers>
                  <WriteAnswer>
                    <h2 className="your-answer-header">Your Answer</h2>
                    <ProblemTextArea
                      type="text"
                      name="content"
                      onFocus={() => setNotice(true)}
                      onChange={(e) => handleChangeState(e)}
                    />
                    {notice === true ? (
                      <NoticeContainer>
                        <div>
                          <p>
                            Thanks for contributing an answer to Stack Overflow!
                          </p>
                          <ul>
                            <li>
                              Please be sure to
                              <em> answer the question</em>. Provide details and
                              share your research!
                            </li>
                          </ul>
                          <p>
                            But
                            <em> avoid</em> ...
                          </p>
                          <ul>
                            <li>
                              Asking for help, clarification, or responding to
                              other answers.
                            </li>
                            <li>
                              Making statements based on opinion; back them up
                              with references or personal experience.
                            </li>
                          </ul>
                          <p>
                            To learn more, see our
                            <a href="https://stackoverflow.com/help/how-to-answer">
                              {" "}
                              tips on writing great answers
                            </a>
                            .
                          </p>
                        </div>
                        <button onClick={() => setNotice(false)}>
                          <svg
                            width="13"
                            height="13"
                            viewBox="0 0 10 10"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M10 1.41L8.59 0L5 3.59L1.41 0L0 1.41L3.59 5L0 8.59L1.41 10L5 6.41L8.59 10L10 8.59L6.41 5L10 1.41Z"
                              fill="black"
                            />
                          </svg>
                        </button>
                      </NoticeContainer>
                    ) : null}
                    <ButtonCSS onClick={postAnswerHandler}>
                      Post your Answer
                    </ButtonCSS>

                    <div className="your-answer-header">
                      Not the answer you're looking for? Browse other questions
                      tagged or
                      <Navigate onClick={() => navigate("/ask")}>
                        {" "}
                        ask your own question.
                      </Navigate>
                    </div>
                  </WriteAnswer>
                </MainBar>
                <SidebarWidget className="SidebarWidget"></SidebarWidget>
              </LeftSide>
            </MainEntity>
          </Content>
        ) : (
          <Content>
            <div className="void">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif?20151024034921"
                alt="loading"
              />
            </div>
          </Content>
        )}
      </Container>
    </div>
  );
};

export default Question;
