import React from "react";
import styled from "styled-components";

const FooterBlock = styled.footer`
  align-items: center;
  display: flex;
  background-color: hsl(210deg 8% 15%);
  font-size: 17px;
  text-align: left;
  box-sizing: border-box;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  color: hsl(210deg 8% 75%) !important;
  @media screen and (max-width: 1000px) {
    padding: 0 30px;
  }
  @media screen and (max-width: 600px) {
    padding: 0;
  }
  a {
    &:focus,
    &:hover,
    &:visited,
    &:link,
    &:active {
      text-decoration: none !important;
    }
    :hover {
      color: #a2aeb6 !important;
    }
    color: hsl(210deg 8% 75%) !important;
  }
`;

const FooterWrapper = styled.div`
  margin: 0 auto;
  display: flex;
  flex-flow: row wrap;

  padding: 32px 12px 12px 12px;
  max-width: 1264px;
  width: 100%;
  margin: 0 auto;
  @media screen and (max-width: 1000px) {
    flex-direction: column;
    padding: 0 12px;
  }
`;

const Icon = styled.div`
  flex: 0 0 64px;

  img {
    width: 65px;
    height: 67px;
    margin-top: -29px;
    margin-left: 30px;
    margin: 1rem;
  }
  @media screen and (max-width: 1000px) {
    display: none;
  }
`;

const Nav = styled.div`
  display: flex;
  flex: column;
  text-align: left;
  margin: 1rem 0;
  color: hsl(210deg 8% 60%) !important;
  ul {
    padding-inline-start: 0px;
    li {
      display: flex;
      list-style: none;
      padding: 0.25rem 0px 10px 0px;
      font-size: 13px;
      font-weight: lighter;
    }
  }
  @media screen and (max-width: 1000px) {
    padding: 0;
  }
`;

const SiteFooter = styled.div`
  display: flex;
  flex: 2 1 auto;
  flex-wrap: wrap;
`;

const FooterTitle = styled.h5`
  width: 12vw;
  margin: 0px 0px 0px 0px;

  font-size: 13.5px;

  @media screen and (max-width: 1000px) {
    width: 150px;
  }
  @media screen and (max-width: 600px) {
    width: 100px;
  }
`;

const FooterA = styled.a`
  display: block;
  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
  }
`;

const FooterTitleTwo = styled.h5`
  margin: 0px 0px 0px 0px;
  width: 330px;
  font-size: 13.5px;
  @media screen and (max-width: 1000px) {
    padding: 0px 10px;
  }
`;

const FooterRight = styled.div`
  margin-top: 16px;
  font-size: 12px;
  color: hsl(210deg 8% 60%) !important;

  text-align: left;

  flex: 1 1 150px;
  display: flex;
  flex-direction: column;
  ul {
    margin: 0px 0px 0px 0px;
    display: flex;
    flex: column;
    list-style: none;
    padding-inline-start: 0px;
    .link-js-gps {
      margin-left: 12px;
    }
  }
  .copyright {
    margin: 203px 0px 20px 0px;

    .social {
      padding-inline-start: 0px;
    }
  }
  @media screen and (max-width: 1000px) {
    .copyright {
      margin: 0;
    }
  }
`;

const footer = () => {
  return (
    <div>
      <FooterBlock>
        <FooterWrapper>
          <Icon>
            <svg
              width="32"
              height="37"
              viewBox="0 0 32 37"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M26 33V24H30V37H0V24H4V33H26Z" fill="#BCBBBB" />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M21.5 0L18.8 2L28.7 15.3L31.4 13.3L21.5 0ZM26 18.4L13.3 7.8L15.4 5.3L28.1 15.9L26 18.4ZM9.1 15.2L24.1 22.2L25.5 19.2L10.5 12.2L9.1 15.2ZM23.0908 25.9902L23.7844 23.041L7.67993 19.687L7 23L23.0908 25.9902ZM23 30H7V27H23V30Z"
                fill="#F48024"
              />
            </svg>
          </Icon>
          <Nav>
            <SiteFooter>
              <FooterTitle>
                <FooterA
                  href="https://stackoverflow.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  STACK OVERFLOW
                </FooterA>
                <ul>
                  <li>
                    <FooterA
                      href="https://stackoverflow.com/questions"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Questions
                    </FooterA>
                  </li>
                  <li>
                    <FooterA
                      href="https://stackoverflow.com/help"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Help
                    </FooterA>
                  </li>
                </ul>
              </FooterTitle>
            </SiteFooter>
            <SiteFooter>
              <FooterTitle>
                <FooterA
                  href="https://stackoverflow.co/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  PRODUCTS
                </FooterA>
                <ul>
                  <li>
                    <FooterA
                      href="https://stackoverflow.co/teams"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Teams
                    </FooterA>
                  </li>
                  <li>
                    <FooterA
                      href="https://stackoverflow.co/advertising"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Advertising
                    </FooterA>
                  </li>
                  <li>
                    <FooterA
                      href="https://stackoverflow.co/collectives"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Collectives
                    </FooterA>
                  </li>
                  <li>
                    <FooterA
                      href="https://stackoverflow.co/talent"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Talent
                    </FooterA>
                  </li>
                </ul>
              </FooterTitle>
            </SiteFooter>
            <SiteFooter>
              <FooterTitle>
                <FooterA
                  href="https://stackoverflow.co/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  COMPANY
                </FooterA>
                <ul>
                  <li>
                    <FooterA
                      href="https://stackoverflow.co/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      About
                    </FooterA>
                  </li>
                  <li>
                    <FooterA
                      href="https://stackoverflow.co/company/press"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Press
                    </FooterA>
                  </li>
                  <li>
                    <FooterA
                      href="https://stackoverflow.co/company/work-here"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Work Here
                    </FooterA>
                  </li>
                  <li>
                    <FooterA
                      href="https://stackoverflow.com/legal"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Legal
                    </FooterA>
                  </li>
                  <li>
                    <FooterA
                      href="https://stackoverflow.com/legal/privacy-policy"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Privacy Policy
                    </FooterA>
                  </li>
                  <li>
                    <FooterA
                      href="https://stackoverflow.com/legal/terms-of-service"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Terms of Service
                    </FooterA>
                  </li>
                  <li>
                    <FooterA
                      href="https://stackoverflow.co/company/contact"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Contact Us
                    </FooterA>
                  </li>
                  <li>
                    <FooterA
                      href="https://stackoverflow.com/questions/ask#"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Cookie Setting
                    </FooterA>
                  </li>
                  <li>
                    <FooterA
                      href="https://stackoverflow.com/legal/cookie-policy"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Cookie Policy
                    </FooterA>
                  </li>
                </ul>
              </FooterTitle>
            </SiteFooter>
            <SiteFooter>
              <FooterTitleTwo>
                <FooterA
                  href="https://stackexchange.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  STACK EXCHANGE NETWORK
                </FooterA>
                <ul>
                  <li>
                    <FooterA
                      href="https://stackexchange.com/sites#technology"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Technology
                    </FooterA>
                  </li>
                  <li>
                    <FooterA
                      href="https://stackexchange.com/sites#culturerecreation"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Culture & recreation
                    </FooterA>
                  </li>
                  <li>
                    <FooterA
                      href="https://stackexchange.com/sites#lifearts"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Life & arts
                    </FooterA>
                  </li>
                  <li>
                    <FooterA
                      href="https://stackexchange.com/sites#science"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Science
                    </FooterA>
                  </li>
                  <li>
                    <FooterA
                      href="https://stackexchange.com/sites#professional"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Professional
                    </FooterA>
                  </li>
                  <li>
                    <FooterA
                      href="https://stackexchange.com/sites#business"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Business
                    </FooterA>
                  </li>
                  <li>
                    <FooterA
                      href="https://api.stackexchange.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      API
                    </FooterA>
                  </li>
                  <li>
                    <FooterA
                      href="https://data.stackexchange.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Data
                    </FooterA>
                  </li>
                </ul>
              </FooterTitleTwo>
            </SiteFooter>
          </Nav>
          <FooterRight>
            <div className="social">
              <ul>
                <li className="js-gps">
                  <FooterA
                    href="https://stackoverflow.blog/?blb=1&_ga=2.6106227.1522570781.1666501865-141326304.1663409695"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Blog
                  </FooterA>
                </li>
                <li className="link-js-gps">
                  <FooterA
                    href="https://www.facebook.com/officialstackoverflow/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Facebook
                  </FooterA>
                </li>
                <li className="link-js-gps">
                  <FooterA
                    href="https://twitter.com/stackoverflow"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Twitter
                  </FooterA>
                </li>
                <li className="link-js-gps">
                  <FooterA
                    href="https://linkedin.com/company/stack-overflow"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    LinkedIn
                  </FooterA>
                </li>
                <li className="link-js-gps">
                  <FooterA
                    href="https://www.instagram.com/thestackoverflow"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Instagram
                  </FooterA>
                </li>
              </ul>
            </div>
            <div className="copyright">
              <p>
                Site design / logo © 2022 Stack Exchange Inc; user contributions
                licensed under
                <a
                  href="https://stackoverflow.com/help/licensing"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  CC BY-SA.
                </a>
                <br />
                rev 2022.10.24.26681
              </p>
            </div>
          </FooterRight>
        </FooterWrapper>
      </FooterBlock>
    </div>
  );
};

export default footer;
