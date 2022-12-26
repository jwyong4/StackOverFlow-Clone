import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import { BiX } from "react-icons/bi";
import { useNavigate } from "react-router-dom";

const AskContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100rem;
  background-color: hsl(180deg 8% 97%);
  padding: 0 5rem 5rem 5rem;
  margin-top: 3rem;
  text-align: left;
  position: relative;
  flex: 1 0 auto;
  justify-content: center;
`;

const Content = styled.div`
  width: 100%;
  max-width: 1264px;
  box-sizing: inherit;
  text-align: left;
`;

const Notice = styled.div`
  height: 31rem;
`;

const AskPublicQuestion = styled.div`
  display: flex;
  height: 10rem;
  flex-direction: row;
  .backGround {
    width: 100% !important;
    height: 130px;
    background-repeat: no-repeat !important;
    flex-direction: row;
    margin-top: 20px;
  }
`;

const AskPublicQuestionTxt = styled.h1`
  width: 100%;
  height: 4rem;
  margin: 5rem 0rem 4rem 0rem;
  line-height: 1.3;
  font-weight: 600 !important;
  box-sizing: inherit;
  color: hsl(200deg 8% 15%);
  @media screen and (max-width: 1210px) {
    font-weight: 600 !important;
    font-size: 30px;
  }
  @media screen and (max-width: 910px) {
    font-weight: 600 !important;
    font-size: 20px;
  }
  /* @media screen and (max-width: 910) {
    font-weight: 600 !important;
    font-size: 10px;
  } */
`;

const WritingInfoContainer = styled.div`
  background-color: hsl(206deg 67% 95%);
  box-sizing: border-box;
  width: 70% !important;
  @media screen and (max-width: 1113px) {
    font-size: 12px;
  }
  @media screen and (max-width: 824px) {
    font-size: 10px;
  }
`;

const WritingTip = styled.div`
  width: 100%;
  height: 19rem;
  display: flex;
  margin-bottom: 2.5rem;
  padding: 1.4rem;
  border: 1px;
  border-style: solid;
  border-color: hsl(207deg 68% 79%);
`;

const WritingTipInfo = styled.div`
  box-sizing: border-box;
  width: 100% !important;
  padding: var(--su24) !important;
  color: hsl(207deg 7% 28%);
  padding: 10px;
`;

const TipTitle = styled.h2`
  width: 100%;
  font-weight: 500 !important;
  font-size: 1.4rem;
  color: hsl(207deg 7% 28%);
  margin-top: -0.7px;
`;

const TipText = styled.p`
  width: 100%;
  font-size: 1rem;
  margin-top: 0 !important;
  color: hsl(207deg 7% 28%);
  margin-bottom: 1px;
`;

const GuideLink = styled.a`
  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none !important;
    color: hsl(206deg 100% 40%);
  }
`;

const Steps = styled.h5`
  font-weight: 600 !important;
  margin-bottom: 0.8rem;
  margin-top: 1rem;
  font-size: 1rem;
`;

const ListStyle = styled.ul`
  list-style: inside;
  margin-right: 0px;
  margin-left: 20px;
  padding-left: 0px;
  padding-right: 0px;
  li {
    @media screen and (max-width: 910px) {
      font-size: 0.1rem;
    }
  }
`;

const QuestionForm = styled.div`
  display: flex !important;
  align-items: flex-start !important;
  width: 100%;
  height: 10rem;
  box-sizing: inherit;
  text-align: left;
  flex-direction: row;
`;

const PostTitle = styled.div`
  background-color: white;
  box-sizing: inherit;
  width: 70% !important;
  height: 8rem;
  text-align: left;
  vertical-align: baseline;
  padding: 24px;
  border: 1px;
  border-style: solid;
  border-color: hsl(206deg 14% 90%);
  color: hsl(200deg 8% 15%);
  flex-shrink: 0 !important;
`;

const TitleBox = styled.div`
  width: 100%;
  height: 5rem;
  display: flex !important;
  flex-direction: column !important;
  margin-right: 0;
  margin-left: 0;
  box-sizing: inherit;
  text-align: left;
  box-sizing: inherit;
`;

const TitleText = styled.label`
  width: 100%;
  height: 1rem;
  font-weight: 600;
  font-size: 1rem;
  font-family: inherit;
`;

const TitleTextTwo = styled.div`
  color: hsl(207deg 6% 29%);
  font-size: 0.8rem;
  margin-top: 5px;
  margin-bottom: 8px;
`;

const TitleInput = styled.input`
  width: 100%;
  height: 1.8rem;
  padding: 0.6rem 0.7rem;
  border: 1px solid hsl(200deg 7% 74%);
  margin: 0;
  border-radius: 4px;
  font-size: 0.9rem;
  -webkit-box-sizing: border-box; /* Safari/Chrome, other WebKit */
  -moz-box-sizing: border-box; /* Firefox, other Gecko */
  box-sizing: border-box;
  outline: none;
  ::placeholder {
    font-size: 13px;
    color: hsl(213deg 9% 75%);
  }
  :focus {
    border: 1px solid #38a9f0;
    box-shadow: 0px 0px 3px 2px rgba(56, 169, 240, 0.75);
  }
`;
const TitleTip = styled.div`
  margin-left: 20px;
  border: 1px;
  width: 28%;
  height: 100%;
  background-color: hsl(300deg 100% 100%);
  -webkit-box-sizing: border-box; /* Safari/Chrome, other WebKit */
  -moz-box-sizing: border-box; /* Firefox, other Gecko */
  box-sizing: border-box;
  border-radius: 1px;
  border: 1px solid hsl(220deg 8% 85%);
  box-sizing: inherit;
  box-shadow: rgba(0, 0, 0, 0.15) 0px 2px 8px;
  flex-direction: row;
`;
const TitleTopBox = styled.div`
  display: flex;
  background-color: hsl(180deg 8% 97%);
  width: 100%;
  border-bottom: 1px solid hsl(220deg 8% 85%);
  margin: 0;
  padding: 0.4rem;
  color: hsl(216deg 6% 15%);
  font-weight: 249;
`;
const TitleTipContent = styled.div`
  display: flex;
  margin: 16px;
  height: 100%;
`;

const PencilIcon = styled.img`
  width: 68px;
  margin-top: -4px;
  margin-bottom: 0px;
  height: 68px;
`;

const TitleTipText = styled.div`
  margin-top: 0px;
  margin-bottom: 0px;
  font-size: 11.8px;
  .first-line {
    margin-top: 0px;
  }
  @media screen and (max-width: 997px) {
    font-size: 8px;
  }
  @media screen and (max-width: 927px) {
    font-size: 2px;
  }
`;

const ProblemContainer = styled.div`
  display: flex !important;
  align-items: flex-start !important;
  width: 100%;
  box-sizing: inherit;
  text-align: left;
`;

const ProblemDetail = styled.div`
  background-color: white;
  box-sizing: inherit;
  width: 70% !important;
  height: 25rem;
  text-align: left;
  vertical-align: baseline;
  color: hsl(200deg 8% 15%);
  flex-shrink: 0 !important;
  padding: 24px;
  border-style: solid;
  border-color: hsl(206deg 14% 90%);
  color: hsl(200deg 8% 15%);
  margin-bottom: 24px;
  .problem-top-box {
    width: 100%;
    height: 1rem;
    font-weight: 600;
    font-size: 1rem;
    font-family: inherit;
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
  :focus {
    border: 1px solid #38a9f0;
    box-shadow: 0px 0px 3px 2px rgba(56, 169, 240, 0.75);
  }
`;

const TagContainer = styled.div`
  display: flex !important;
  align-items: flex-start !important;
  width: 100%;
  box-sizing: inherit;
  text-align: left;
  margin-bottom: 50px;
`;

const TagDetail = styled.div`
  background-color: white;
  box-sizing: inherit;
  width: 70% !important;
  text-align: left;
  vertical-align: baseline;
  padding: 24px;
  border: 1px;
  border-style: solid;
  border-color: hsl(206deg 14% 90%);
  color: hsl(200deg 8% 15%);
  flex-shrink: 0 !important;
  box-sizing: inherit;
  .problem-top-box {
    width: 100%;
    height: 1rem;
    font-weight: 600;
    font-size: 1rem;
    font-family: inherit;
  }
  .tags {
    display: flex;
    flex-wrap: wrap;
    padding: 0;
    margin-top: 4px;
    gap: 10px;
    min-height: 24px !important;
    padding: 4px;
    color: hsl(205deg 47% 42%);
  }
  .tag {
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-direction: row;
    border: 2px;
    justify-content: center;
    background-color: hsl(205deg 46% 92%);
    border-radius: 5px;
    border-width: 1px;
    border-style: solid;
    border-color: transparent;
    color: hsl(205deg 47% 42%);
    font-size: 14px;
    padding: 2px 2px 2px 2px;
  }
  padding: 24px;
  border: 1px;
  border-style: solid;
  border-color: hsl(206deg 14% 90%);

  .delete {
    width: 20px;
    padding-left: 10px;
    size: 10px;
  }
`;

const TagText = styled.label`
  width: 100%;
  font-weight: 600;
  font-size: 1rem;
  font-family: inherit;
`;

const TagTextTwo = styled.div`
  color: hsl(207deg 6% 29%);
  font-size: 0.8rem;
  margin-top: 5px;
  margin-bottom: 8px;
`;

const TagInput = styled.input`
  width: 100%;
  height: 1.8rem;
  padding: 0.6rem 0.7rem;
  border: 1px solid hsl(200deg 7% 74%);
  margin: 0;
  border-radius: 4px;
  font-size: 0.9rem;
  -webkit-box-sizing: border-box; /* Safari/Chrome, other WebKit */
  -moz-box-sizing: border-box; /* Firefox, other Gecko */
  box-sizing: border-box;
  outline: none;
  color: hsl(205deg 47% 42%);
  ::placeholder {
    font-size: 13px;
    color: hsl(213deg 9% 75%);
  }
  :focus {
    border: 1px solid #38a9f0;
    box-shadow: 0px 0px 3px 2px rgba(56, 169, 240, 0.75);
  }
`;

const TagsLink = styled.a`
  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none !important;
    color: hsl(206deg 100% 40%);
  }
`;

const ReviewContainer = styled.div`
  display: flex !important;
  align-items: flex-start !important;
  width: 100%;
  box-sizing: inherit;
  text-align: left;
`;

const ReviewButton = styled.button`
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

const Ask = () => {
  const navigate = useNavigate();

  const [focusNum, setFocusNum] = useState(0);
  const [state, setState] = useState({
    title: "",
    tagState: [],
    content: "",
  });
  const initTags = ["Tags1"];
  const [tags, setTags] = useState(initTags);

  // 엔터키를 누르면 tags가 만들어지는 함수
  const inputHandler = (e) => {
    const copy = [...tags];
    const filterTarget = tags.filter((el) => el === e.target.value);
    if (e.key === "Enter" && filterTarget.length === 0) {
      copy.push(e.target.value);
      setTags(copy);
      e.target.value = "";
    }
  };

  useEffect(() => {
    const copy = [...tags];
    setState({
      ...state,
      tagState: copy,
    });
  }, [tags]);
  const deleteHandler = (idx) => {
    const copy = [...tags];
    const filtered = tags.filter((el, i) => i !== idx);
    setTags(filtered);
  };

  const handleChangeState = (e) => {
    return setState((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  // fetch 코드 교체
  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(`${process.env.REACT_APP_URL}/question/ask`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        memberId: localStorage.getItem("memberId"),
        title: state.title,
        content: state.content,
      }),
      redirect: "follow",
    })
      .then((response) => response.json())
      .then((result) => {
        // console.log(result);
        alert("질문 작성이 완료되었습니다!");
        navigate("/questions");
      })
      .catch((error) => console.log("error", error));
  };

  /// 클릭 시 스크롤 이동
  const handleClickInput = (e) => {
    e.target.scrollIntoView({ behavior: "smooth", block: "center" });
  };

  return (
    <>
      <AskContainer>
        <Content className="content">
          <Notice>
            <AskPublicQuestion className="AskPublicQuestion">
              <AskPublicQuestionTxt>Ask a public question</AskPublicQuestionTxt>
              <img
                className="backGround"
                src="./img/background.svg"
                alt="background"
              />
            </AskPublicQuestion>

            <WritingInfoContainer>
              <WritingTip>
                <WritingTipInfo>
                  <TipTitle>Writing a good question</TipTitle>
                  <TipText>
                    You’re ready to
                    <GuideLink href="https://stackoverflow.com/help/how-to-ask">
                      {" "}
                      ask{" "}
                    </GuideLink>
                    a
                    <GuideLink href="https://stackoverflow.com/help/on-topic">
                      {" "}
                      programming-related question{" "}
                    </GuideLink>
                    and this form will help guide you through the process.{" "}
                  </TipText>
                  <TipText>
                    Looking to ask a non-programming question? See the
                    <GuideLink href="https://stackexchange.com/sites#technology-traffic">
                      {" "}
                      topics here{" "}
                    </GuideLink>
                    to find a relevant site.
                    <br />
                  </TipText>
                  <Steps>Steps</Steps>
                  <ListStyle>
                    <li>Summarize your problem in a one-line title.</li>
                    <li>Describe your problem in more detail.</li>
                    <li>
                      Describe what you tried and what you expected to happen.
                    </li>
                    <li>
                      Add “tags” which help surface your question to members of
                      the community.
                    </li>
                    <li>Review your question and post it to the site.</li>
                  </ListStyle>
                </WritingTipInfo>
              </WritingTip>
            </WritingInfoContainer>
          </Notice>

          {/* 제목 부분 */}
          <QuestionForm className="QuestionForm">
            <>
              <PostTitle className="PostTitle">
                <TitleBox>
                  <TitleText>Title</TitleText>
                  <TitleTextTwo>
                    Be specific and imagine you’re asking a question to another
                    person.
                  </TitleTextTwo>
                  <TitleInput
                    type="text"
                    onFocus={() => setFocusNum(0)}
                    onChange={(e) => handleChangeState(e)}
                    onClick={handleClickInput}
                    name="title"
                    placeholder="e.g. Is there an R function for finding the index of an element in a vector?"
                  />
                </TitleBox>
              </PostTitle>
            </>
            {focusNum === 0 ? (
              <>
                <TitleTip>
                  <TitleTopBox>Writing a good title</TitleTopBox>
                  <TitleTipContent>
                    <PencilIcon src="./img/pencil.png" alt="icon" />
                    <TitleTipText className="title-tip-text">
                      <p className="first-line">
                        Your title should summarize the problem.
                      </p>
                      <p>
                        You might find that you have a better idea of your title
                        after writing out the rest of the question.
                      </p>
                    </TitleTipText>
                  </TitleTipContent>
                </TitleTip>
              </>
            ) : null}
          </QuestionForm>

          {/* 내용 부분 */}
          <ProblemContainer className="ProblemContainer">
            <ProblemDetail>
              <TitleText>What are the details of your problem?</TitleText>
              <TitleTextTwo>
                Include all the information someone would need to answer your
                question
              </TitleTextTwo>
              <ProblemTextArea
                type="text"
                onFocus={() => setFocusNum(1)}
                onChange={(e) => handleChangeState(e)}
                onClick={handleClickInput}
                name="content"
              />
            </ProblemDetail>

            {focusNum === 1 ? (
              <>
                <TitleTip>
                  <TitleTopBox>Proof-read before posting</TitleTopBox>
                  <TitleTipContent>
                    <PencilIcon
                      className="pencil-icon"
                      src="./img/pencil.png"
                      alt="icon"
                    />
                    <TitleTipText className="title-tip-text">
                      <p className="first-line">
                        Now that you’re ready to post your question, read
                        through it from start to finish. Does it make sense?
                      </p>
                      <p>
                        Add any details you missed and read through it again.
                        Now is a good time to make sure that your title still
                        describes the problem!
                      </p>
                    </TitleTipText>
                  </TitleTipContent>
                </TitleTip>
              </>
            ) : null}
          </ProblemContainer>

          {/* 태그 부분 */}
          <TagContainer className="TagContainer">
            <>
              <>
                <TagDetail className="tagDetail">
                  <TagText>Tags</TagText>
                  <TagTextTwo>
                    Add up to 5 tags to describe what your question is about.
                    Start typing to see suggestions.
                  </TagTextTwo>
                  <TagInput
                    type="text"
                    onFocus={() => setFocusNum(2)}
                    onChange={(e) => handleChangeState(e)}
                    onClick={handleClickInput}
                    name="tagState"
                    onKeyUp={inputHandler}
                    placeholder="e.g. (angularjs php jquery)"
                  ></TagInput>
                  <ul className="tags">
                    {tags.map((tag, i) => (
                      <li className="tag" key={i}>
                        <div>{tag}</div>
                        <BiX
                          className="delete"
                          alt="delete icon"
                          onClick={() => deleteHandler(i)}
                        />
                      </li>
                    ))}
                  </ul>
                </TagDetail>
              </>
              {focusNum === 2 ? (
                <>
                  <TitleTip>
                    <TitleTopBox>Adding tags</TitleTopBox>
                    <TitleTipContent>
                      <PencilIcon
                        className="pencil-icon"
                        src="./img/pencil.png"
                        alt="icon"
                      />
                      <TitleTipText className="title-tip-text">
                        <p className="first-line">
                          Tags help ensure that your question will get attention
                          from the right people.
                        </p>
                        <p>
                          Tag things in more than one way so people can find
                          them more easily. Add tags for product lines,
                          projects, teams, and the specific technologies or
                          languages used.
                          <br />
                          <TagsLink
                            className="tagging-page"
                            href="https://stackoverflow.com/help/tagging/"
                          >
                            Learn more about tagging
                          </TagsLink>
                        </p>
                      </TitleTipText>
                    </TitleTipContent>
                  </TitleTip>
                </>
              ) : null}
            </>
          </TagContainer>

          <ReviewContainer>
            <ReviewButton onClick={handleSubmit}>
              Review your question
            </ReviewButton>
          </ReviewContainer>
        </Content>
      </AskContainer>
    </>
  );
};

export default React.memo(Ask);
