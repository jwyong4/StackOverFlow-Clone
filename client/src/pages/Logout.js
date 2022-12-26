import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const LogoutContainer = styled.div`
  width: 100%;
  /* height: 100vh; */
  flex: 1 0 auto;
  position: relative;
  text-align: left;
  box-sizing: inherit;
  font-size: 100%;
  padding: 24px;
  border: 0;
  display: flex;
  justify-content: center;
  margin: 0;
  background-color: hsl(210deg 8% 95%);
`;
const Content = styled.div`
  width: 100%;
  max-width: 1264px;
  margin: 0;
  background-color: transparent;
  border-left: 0;
  border-right: 0;
  box-sizing: inherit;
  text-align: left;
  box-sizing: border-box;
  border-top-width: 0;
  border-bottom-width: 0;
  justify-content: center;
  align-items: center;
  display: flex !important;
  vertical-align: baseline;
  align-items: center !important;
  padding: 40px;

  .flex--item {
    /* height: 35rem; */
    width: 35rem;
    box-sizing: inherit;
    display: block;
    text-align: left;
    flex: 1 0 auto;
    position: relative;
    /* margin-top: auto; */
    font-size: 0.9rem;
    margin-left: 3px;
    align-items: center !important;
  }
  .titleText {
    max-width: 30rem !important;
    text-align: center !important;
    font-size: 1.33rem;
    margin-bottom: 24px;
    margin-left: auto !important;
    margin-right: auto !important;
    box-sizing: inherit;
  }
`;

const BodyContainer = styled.div`
  max-width: calc((97rem / 12) * 2.32) !important;

  box-sizing: inherit;
  padding: 24px !important;
  margin-bottom: 24px !important;
  margin-left: auto !important;
  margin-right: auto !important;
  background-color: hsl(0deg 0% 100%) !important;
  border-radius: 7px !important;
  box-sizing: inherit;
  box-shadow: 0 10px 24px hsla(0, 0%, 0%, 0.05),
    0 20px 48px hsla(0, 0%, 0%, 0.05), 0 1px 4px hsla(0, 0%, 0%, 0.1);
  display: block;
  text-align: left;

  .list {
    display: flex !important;
    list-style: none;

    padding: 0;
    padding-bottom: 12px;
    margin-bottom: 16px;
    flex-direction: column !important;
    border-color: hsl(210deg 8% 85%) !important;
    border-bottom-style: solid !important;
    border-bottom-width: 1px !important;
    box-sizing: inherit;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    margin-top: 0px;
    text-align: left;
    .each--li {
      align-items: center !important;
    }
  }
`;

const HrefLink = styled.a`
  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none !important;
    color: hsl(206deg 100% 40%);
  }
  display: flex !important;
  box-sizing: inherit;
  height: 24px;
  line-height: inherit;
  font-size: 1.15rem;

  align-items: center !important;
`;

const IconImage = styled.img`
  width: 24px;
  height: 24px;
  background-color: transparent;
  background-repeat: no-repeat;
  display: block !important;
  box-sizing: inherit;
`;

const CheckContainer = styled.div`
  display: flex !important;
  margin-bottom: 14px;
  margin: 0;
  padding: 0;
  border: 0;
  font: inherit;
  font-size: 100%;
  vertical-align: baseline;
  box-sizing: inherit;
  margin-bottom: 10px;
  .checkbox {
    margin-right: 5px;
  }
  .logout--devices {
    font: inherit;
    font-size: 12px;
    margin-top: 2px;
  }
`;

const ButtonContainer = styled.div`
  display: flex !important;
  box-sizing: inherit;
  .cancel--logout {
    color: hsl(206deg 100% 40%);
    position: relative;
    text-align: center;
    padding: 0.8em;
    font-size: 0.84rem;
    &:focus,
    &:hover,
    &:visited,
    &:link,
    &:active {
      text-decoration: none !important;
      color: hsl(206deg 100% 40%);
    }
  }
`;

const LogoutButton = styled.button`
  min-width: 70px;
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

const CaptionContainer = styled.div`
  text-align: left !important;
  color: hsl(210deg 8% 45%) !important;
  font-size: 12px;

  margin-top: 10px;
  box-sizing: inherit;
`;

const Logout = ({ setLoginSuccess }) => {
  const navigate = useNavigate();

  const logoutClickHandler = (e) => {
    window.localStorage.clear();
    setLoginSuccess(localStorage.getItem("login"));
    navigate("/");
  };

  return (
    <>
      <LogoutContainer className="LogoutContainer">
        <Content className="Content">
          <div contentPadding className="contentPadding">
            <div className="flex--item">
              <div className="titleText">
                Clicking “Log out” will log you out of the following domains on
                this device:
              </div>
              <BodyContainer className="BodyContainer">
                <ul className="list">
                  <li className="each--li">
                    <HrefLink
                      href="https://askubuntu.com"
                      className="ubuntu__link"
                    >
                      <IconImage
                        className="ubuntu__icon"
                        src="./img/askubuntu.png"
                        alt="ubuntu icon"
                      ></IconImage>
                      <div className="flex--item">askubuntu.com</div>
                    </HrefLink>
                  </li>
                  <li>
                    <HrefLink
                      href="https://mathoverflow.net/"
                      className="mathoverflow__link"
                    >
                      <IconImage
                        className="mathoverflow__icon"
                        src="./img/mathoverflow.png"
                        alt="mathoverflow icon"
                      ></IconImage>
                      <div className="flex--item">mathoverflow.net</div>
                    </HrefLink>
                  </li>
                  <li>
                    <HrefLink
                      href="https://serverfault.com/"
                      className="serverfault__link"
                    >
                      <IconImage
                        className="serverfault__icon"
                        src="./img/serverfault.png"
                        alt="serverfault icon"
                      ></IconImage>
                      <div className="flex--item">serverfault.com</div>
                    </HrefLink>
                  </li>
                  <li>
                    <HrefLink
                      href="https://stackapps.com/"
                      className="stackapps__link"
                    >
                      <IconImage
                        className="stackapps__icon"
                        src="./img/stackapps.png"
                        alt="stackapps icon"
                      ></IconImage>
                      <div className="flex--item">stackapps.com</div>
                    </HrefLink>
                  </li>
                  <li>
                    <HrefLink
                      href="https://stackexchange.com/"
                      className="stackexchange__link"
                    >
                      <IconImage
                        className="stackexchange__icon"
                        src="./img/stackexchange.png"
                        alt="stackexchange icon"
                      ></IconImage>
                      <div className="flex--item">stackexchange.com</div>
                    </HrefLink>
                  </li>
                  <li>
                    <HrefLink
                      href="https://stackoverflow.com/"
                      className="stackoverflow__link"
                    >
                      <IconImage
                        className="stackoverflow__icon"
                        src="./img/stackoverflow.png"
                        alt="stackoverflow icon"
                      ></IconImage>
                      <div className="flex--item">stackoverflow.com</div>
                    </HrefLink>
                  </li>
                  <li>
                    <HrefLink
                      href="https://superuser.com/"
                      className="superuser__link"
                    >
                      <IconImage
                        className="superuser__icon"
                        src="./img/superuser.png"
                        alt="superuser icon"
                      ></IconImage>
                      <div className="flex--item">superuser.com</div>
                    </HrefLink>
                  </li>
                </ul>
                <CheckContainer className="CheckContainer">
                  <input className="checkbox" type="checkbox"></input>
                  <div className="logout--devices">Log out on all devices</div>
                </CheckContainer>
                <ButtonContainer>
                  <LogoutButton onClick={logoutClickHandler}>
                    Log out
                  </LogoutButton>
                  <a className="cancel--logout" href="http://localhost:3000/">
                    Cancel
                  </a>
                </ButtonContainer>
                <CaptionContainer>
                  If you’re on a shared computer, remember to log out of your
                  Open ID provider (Facebook, Google, Stack Exchange, etc.) as
                  well.
                </CaptionContainer>
              </BodyContainer>
            </div>
          </div>
        </Content>
      </LogoutContainer>
    </>
  );
};

export default Logout;
