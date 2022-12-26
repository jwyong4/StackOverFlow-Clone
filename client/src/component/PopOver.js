import React from "react";
import "rsuite/dist/rsuite.min.css";
import { Popover, Whisper, Button } from "rsuite";
import { Dropdown } from "rsuite";
import styled from "styled-components";

const VotingContainer = styled.div`
  display: flex;
  flex-direction: column;
  box-sizing: inherit;
  width: 32px;
  height: 36px;
  align-items: center;
  font-size: 2rem;
  .popover {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .vote-cell {
    display: flex;
    align-items: center;
    justify-content: center;
    width: auto;
    padding-bottom: 10px;
    .voting-container {
      display: flex !important;
      align-items: stretch !important;
      justify-content: center;
      flex-direction: column !important;
      margin: 2px;
      color: hsl(210deg 8% 75%);
      .vote-up {
        display: flex;
        justify-content: center;
        cursor: pointer;
        padding: 0;
        border: none;
        outline: initial;
        box-sizing: none;
        background: none;
        color: "hsl(210deg 8% 75%)";
        .pathImg {
          justify-content: center;
          align-items: center;
          justify-content: center;
        }
      }
    }
  }
  .post-cell {
    box-sizing: inherit;
    display: flex;
    font-size: 1.1rem;
    align-items: center;
    flex-direction: column !important;
    width: auto;
    color: hsl(210deg 8% 45%);
    padding-bottom: 10px;
  }
`;

export default function PopOver({ voteCount, votes, id }) {
  const memberId = localStorage.getItem("memberId");

  const voteUpHandler = (e) => {
    e.preventDefault();
    fetch(`${process.env.REACT_APP_URL}/question/${id}/voteup/${memberId}`, {
      method: "POST",
    })
      .then((result) => {
        window.location.reload();
        // console.log(result);
      })
      .catch((error) => console.log("error", error));
  };

  const voteDownHandler = (e) => {
    e.preventDefault();
    fetch(`${process.env.REACT_APP_URL}/question/${id}/votedown/${memberId}`, {
      method: "POST",
    })
      .then((result) => {
        window.location.reload();
        // console.log(result);
      })
      .catch((error) => console.log("error", error));
  };
  return (
    <>
      <VotingContainer className="VotingContainer">
        <div className="vote-cell">
          <div className="voting-container">
            {/* Pop Over 기능 */}
            <div
              className="popover"
              style={{
                display: "block",
              }}
            >
              <Whisper
                trigger="hover"
                placement="right"
                speaker={
                  <Popover>
                    <Dropdown.Menu>
                      <Dropdown.Item>
                        This question shows research effort; it is useful and
                        clear
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Popover>
                }
              >
                <Button
                  className="vote-up"
                  appearance="subtle"
                  onClick={voteUpHandler}
                >
                  <svg
                    width="32"
                    height="16"
                    viewBox="0 0 32 5"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M0 16H32L16 0L0 16Z" fill="hsl(210deg 8% 75%)" />
                  </svg>
                </Button>
              </Whisper>
            </div>
          </div>
        </div>

        <div className="post-cell">{voteCount ? voteCount : 0}</div>

        <div className="vote-cell">
          <div className="voting-container">
            {/* 기능 */}
            <div
              className="popover"
              style={{
                display: "block",
              }}
            >
              <Whisper
                trigger="hover"
                placement="right"
                speaker={
                  <Popover>
                    <Dropdown.Menu>
                      <Dropdown.Item>
                        This question does not show any research effort; it is
                        unclear or not useful
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Popover>
                }
              >
                <Button
                  className="vote-up"
                  appearance="subtle"
                  onClick={voteDownHandler}
                >
                  <svg
                    width="32"
                    height="16"
                    viewBox="0 5 32 16"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M0 0H32L16 16L0 0Z" fill="hsl(210deg 8% 75%)" />
                  </svg>
                </Button>
              </Whisper>
            </div>
          </div>
        </div>

        {/* 즐겨찾기 */}
        <div className="vote-cell">
          <div className="voting-container">
            {/* Pop Over 기능 */}
            <div
              className="popover"
              style={{
                display: "block",
              }}
            >
              <Whisper
                trigger="hover"
                placement="right"
                speaker={
                  <Popover>
                    <Dropdown.Menu>
                      <Dropdown.Item>Save this question.</Dropdown.Item>
                    </Dropdown.Menu>
                  </Popover>
                }
              >
                <Button className="vote-up" appearance="subtle">
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M9 10.5963L13 13.263V3H5V13.263L9 10.5963ZM3 17V3C3 1.89543 3.89543 1 5 1H13C14.1046 1 15 1.89543 15 3V17L9 13L3 17Z"
                      fill="hsl(210deg 8% 75%)"
                    />
                  </svg>
                </Button>
              </Whisper>
            </div>
          </div>
        </div>

        <div className="vote-cell">
          <div className="voting-container">
            {/* Pop Over 기능 */}
            <div
              className="popover"
              style={{
                display: "block",
              }}
            >
              <Whisper
                trigger="hover"
                placement="right"
                speaker={
                  <Popover>
                    <Dropdown.Menu>
                      <Dropdown.Item>Show activity on this post.</Dropdown.Item>
                    </Dropdown.Menu>
                  </Popover>
                }
              >
                <Button className="vote-up" appearance="subtle">
                  <svg
                    width="19"
                    height="17"
                    viewBox="0 0 19 17"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      className="pathImg"
                      d="M2.99999 8C3.00107 6.22563 3.59201 4.50197 4.67985 3.10018C5.76769 1.6984 7.29069 0.698048 9.00924 0.256507C10.7278 -0.185034 12.5444 -0.0427063 14.1732 0.661098C15.802 1.3649 17.1506 2.59024 18.0069 4.14434C18.8631 5.69844 19.1784 7.49311 18.9031 9.24599C18.6279 10.9989 17.7776 12.6105 16.4862 13.8273C15.1948 15.0442 13.5355 15.7971 11.7694 15.9678C10.0032 16.1384 8.23048 15.7171 6.72999 14.77L8.19999 13.3C9.35976 13.9119 10.6881 14.1271 11.9817 13.9125C13.2753 13.698 14.4631 13.0655 15.3632 12.1119C16.2633 11.1584 16.8262 9.93615 16.9659 8.6323C17.1055 7.32844 16.8142 6.01475 16.1364 4.89218C15.4586 3.76961 14.4317 2.9 13.2129 2.41637C11.994 1.93274 10.6503 1.86174 9.3872 2.21422C8.12415 2.56669 7.01135 3.32324 6.21905 4.36813C5.42674 5.41301 4.99855 6.68869 4.99999 8L8.00999 7.99L4.00999 11.99L0.00999451 7.99H3.00999L2.99999 8ZM9.99999 4H11.01L11 8.36L14.22 10.46L13.62 11.39L9.99999 9V4Z"
                      fill="hsl(210deg 8% 75%)"
                    />
                  </svg>
                </Button>
              </Whisper>
            </div>
          </div>
        </div>
      </VotingContainer>
    </>
  );
}
