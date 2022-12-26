import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';


const StyledNav = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-height: 600px;
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 1;
  box-shadow: 0px 1px 4px 1px rgba(236,236,236,1);
  margin-top: 3px;
  .inputbar {
    display: flex;
    flex-direction: column;
    width: 100%;
    .input__icon > svg {
      color: white;
    }
  }
  @media screen and (max-width: 700px) {
    .bubble {
      display: none;
    }
  }
  @media screen and (min-width: 700px) {
    .bubble__hidden {
      display: none;
    }
  }
`
const StyledNavContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  gap: 10px;
  height: 47px;
  padding-right: 10px;
  background: #F8F9F9;
  box-shadow: 0px -5px 0px 0px rgba(244,130,37,1);
`
const StyledLogo = styled.div`
  padding: 7px;
  cursor: pointer;
  :hover {
    background: #dfdfdf;
  }
  img {
    width: 150px;
    height: 30px;
  }
  .logo1 {
    display: flex;
    align-items: center;
    // width: 200px;
    padding: 4px 0;
  }
  .logo2 {
    margin-left: 10px;
  }
  @media screen and (max-width: 700px) {
    .logo1 {
      display: none;
    }
  }
  @media screen and (min-width: 701px) {
    .logo2 {
      display: none;
    }
  }
`
const StyledNavigation = styled.ul`
  display: flex;
  padding: 0;
  margin: 0;
  li {
    font-weight: 500;
    font-size: 13px;
    color: hsl(210,8%,35%);
    padding: 8px;
    cursor: pointer;
    :hover {
      border-radius: 24px;
      background: #dfdfdf;
    }
  }
  @media screen and (max-width: 700px) {
    align-items: center;
    padding: 0;
  }
`
const StyledInput = styled.input`
  background-image: url("https://img.icons8.com/ios-filled/100/737373/search--v1.png");
  background-position: 5px center;
  background-size: 22px 22px;
  background-repeat: no-repeat;
  border: 1px solid #dfdfdf;
  border-radius: 4px;
  padding: 7px;
  outline: none;
  width: 100%;
  text-indent: 27px;
  :focus {
    border: 1px solid #38a9f0;
    // box-shadow: 0px 0px 3px 2px rgba(56, 169, 240, 0.75);
    box-shadow: 0px 0px 0px 4px rgba(179, 220, 252, 0.5);

    .bubble
    {
    position: relative;
    width: 410px;
    height: 185px;
    padding: 1px;
    background: #FFFFFF;
    -webkit-border-radius: 10px;
    -moz-border-radius: 10px;
    border-radius: 10px;
    }

    .bubble:after
    {
    content: '';
    position: absolute;
    border-style: solid;
    border-width: 0 20px 20px;
    border-color: #FFFFFF transparent;
    display: block;
    width: 0;
    z-index: 1;
    top: -20px;
    left: 186px;
    }
    
  }
  @media screen and (max-width: 700px) {
    background-image: url("https://img.icons8.com/ios-filled/100/737373/search--v1.png");
    background-position: center;
    border: none;
    width: 30px;
    height: 30px;
    margin-left: auto;
    cursor: pointer;
    border: 1px solid #38a9f0;
  }
`
const StyledHiddenInput = styled.div`
  @media screen and (min-width: 701px) {
    display: none;
  }
  @media screen and (max-width: 700px) {
    padding: 10px 0;
    background: hsl(210,8%,95%);
    input {
      background-image: url("https://img.icons8.com/ios-filled/100/737373/search--v1.png");
      background-position: 5px;
      background-size: 20px;
      background-repeat: no-repeat;
      border: 1px solid #dfdfdf;
      border-radius: 4px;
      padding: 9px;
      outline: none;
      width: 99%;
      text-indent: 27px;
      cursor: auto;
      :focus {
        border: 1px solid #38a9f0;
        box-shadow: 0px 0px 0px 4px rgba(179, 220, 252, 0.5);
      }
    }
  }

`
const StyledBtn = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
    .nav {
      display: flex;
      align-items: center;
      justify-content: space-around;
    }
    .nav__user {
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 11px;
      width: 24px;
      height: 24px;
      border: 1px solid #f64b3c;
      border-radius: 4px;
      background: #f64b3c;
      color: white;
      margin: 0 10px;
      cursor: pointer;
    }
    .nav__icon {
      padding: 15px 10px 13px 10px;
      svg {
        color: red;
      }
      :hover {
        background: #dfdfdf;
        cursor: pointer;
      }
    }
    .list {
      display: flex;
      flex-direction: column;
      padding-top: 11px;
    }
    .btn {
      width: 65px;
      height: 35px;
      border-radius: 4px;
      font-size: 14px;
      cursor: pointer;
    }
    .login {
      background: hsl(205,46%,92%);
      border: 1px solid hsl(205,41%,63%);
      color: hsl(206,100%,40%);
      :hover {
        background: hsl(205,56%,76%);
      }
    }
    .signup {
      background: hsl(206,100%,52%);
      border: 1px solid hsl(206,85%,57.5%);
      color: white;
      :hover {
        background: hsl(209,100%,37.5%);
      }
    }
`
const StyledBubble = styled.div`
  position: relative;
  height: 0;
  background: #FFFFFF;
  border-radius: 4px;
  box-shadow: 0px 1px 1px 1px rgba(237,226,223,1);
  :after {
    content: '';
    position: absolute;
    border-style: solid;
    border-width: 0 20px 20px;
    border-color: #FFFFFF transparent;
    display: block;
    width: 0;
    top: -5px;
    left: 45%;
  }
  .bubble__content {
    display: flex;
    flex-direction: column;
    border: 1px solid hsl(210,8%,95%);
    background: white;
    padding-top: 10px;
    > div {
      display: flex;
      font-size: 14px;
      padding: 5px 30px;
      > span {
        margin: 3px 20px;
        font-size: 12px;
        color: gray;
      }
    }
  }
  .bubble__btn {
    display: flex;
    align-items: center;
    padding: 20px;
    border-top: 1px solid hsl(210,8%,95%);
    }
    .question__btn {
      margin-top: 5px;
      min-width: 100px;
      height: 30px;
      border-radius: 4px;
      font-size: 12px;
      cursor: pointer;
      background: hsl(205,46%,92%);
      border: 1px solid hsl(205,41%,63%);
      color: hsl(206,100%,40%);
      :hover {
        background: hsl(205,56%,76%);
      }
  }
`
const StyledMenuBubble = styled.div`
position: relative;
height: 0;
background: #FFFFFF;
border-radius: 4px;
box-shadow: 0px 1px 1px 1px rgba(237,226,223,1);
.bubble__content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  border: 1px solid hsl(210,8%,95%);
  background: white;
  padding: 10px 20px; 
  width: 200px;
  height: 50px;
  position: absolute;
  top: 13px;
  right: -1px;
  > div {
    color: #0074cc;
    display: flex;
    font-size: 14px;
    padding: 5px 30px;
    > span {
      margin: 3px 20px;
      font-size: 12px;
      color: gray;
    }
  }
}
`

const Nav = ({ loginSuccess }) => {
  
  const [openSearchBar, setOpenSearchBar] = useState(false);
  const [focusSearchBar, setFocusSearchBar] = useState(false);
  const [clickNavList, setClickNavList] = useState(false);

  const clickSearchIcon = () => {
    if(window.innerWidth <= 700) {
      setOpenSearchBar(!openSearchBar);
      setFocusSearchBar(false);
    }
  }


  const navBtnClickHandler = (e) => {
    setClickNavList(!clickNavList)  ;
  }

  return (
    <StyledNav>
      <StyledNavContainer>
        <Link to='/'>
          <StyledLogo>
            <div className='logo1'>
              <svg width="30" height="25" viewBox="0 0 25 30" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" clipRule="evenodd" d="M14.5 0L11.8 2L21.7 15.3L24.4 13.3L14.5 0ZM19 18.4L6.3 7.8L8.4 5.3L21.1 15.9L19 18.4ZM2.1 15.2L17.1 22.2L18.5 19.2L3.5 12.2L2.1 15.2ZM16.0908 25.9902L16.7844 23.041L0.679932 19.687L0 23L16.0908 25.9902ZM16 30H0V27H16V30Z" fill="#F48024"/>
              </svg>
              <svg width="140" height="25" viewBox="0 0 152 21" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M7 12L4.8 11.8C3.1 11.7 2.5 11 2.5 9.8C2.5 8.4 3.5 7.6 5.5 7.6C6.8 7.5 8.1 7.9 9.1 8.7L10.4 7.4C9 6.4 7.3 5.9 5.6 6C2.7 6 0.7 7.5 0.7 9.9C0.7 12.1 2.1 13.3 4.7 13.5L6.9 13.7C8.5 13.8 9.1 14.5 9.1 15.7C9.1 17.3 7.7 18.1 5.5 18.1C3.9 18.2 2.4 17.6 1.3 16.5L0 17.8C1.5 19.2 3.5 19.8 5.5 19.7C8.7 19.7 11 18.2 11 15.6C11 13 9.4 12.2 7 12ZM22.8 5.9C20.6 5.9 19.3 6.3 18.1 7.8L19.4 9.1C20.2 8 21.5 7.4 22.8 7.6C25.3 7.6 26.2 8.6 26.2 10.5V11.8H22.2C19.2 11.8 17.6 13.3 17.6 15.7C17.6 16.7 17.9 17.7 18.6 18.4C19.4 19.3 20.5 19.6 22.4 19.6C23.8 19.7 25.3 19.2 26.3 18.2V19.5H28.3V10.4C28.2 7.5 26.4 5.9 22.8 5.9ZM26.2 14.8C26.3 15.6 26.1 16.5 25.5 17.1C25.0862 17.4441 24.6072 17.7012 24.0918 17.8558C23.5763 18.0105 23.0349 18.0595 22.5 18C20.4 18 19.4 17.3 19.4 15.7C19.4 14.1 20.4 13.3 22.4 13.3H26.2V14.8ZM35.9 7.7C37.1 7.7 38.3 8.2 39 9.2L40.3 7.9C39.7724 7.24775 39.1 6.72741 38.3363 6.38025C37.5725 6.03309 36.7384 5.86866 35.9 5.9C32.5 5.9 30 8.2 30 12.8C30 17.4 32.6 19.7 35.9 19.7C37.6 19.8 39.2 19 40.3 17.7L39 16.4C38.3 17.4 37.1 17.9 35.9 17.9C34.7 18 33.5 17.4 32.8 16.4C32.1 15.3 31.8 14.1 31.9 12.8C31.8 11.5 32.1 10.3 32.8 9.2C33.5 8.2 34.7 7.6 35.9 7.7ZM52.7 6.1H50.3L44.2 12V0.0999985H42.2V19.5H44.2V14.6L46.6 12.2L51.1 19.5H53.5L47.9 10.9L52.7 6.1ZM61.9 5.94C60.3 5.84 58.7 6.44 57.6 7.64C56.3 8.94 56 10.54 56 13.04C56 15.54 56.3 17.14 57.6 18.44C58.7 19.54 60.3 20.14 61.9 20.14C63.5 20.24 65.1 19.64 66.2 18.44C67.5 17.14 67.8 15.54 67.8 13.04C67.8 10.54 67.5 8.94 66.2 7.64C65.6547 7.05481 64.9858 6.59857 64.2419 6.30449C63.4981 6.01041 62.698 5.88589 61.9 5.94ZM63.6 16.44C62.7 17.24 61.3 17.24 60.4 16.44C59.7 15.74 59.6 14.44 59.6 13.04C59.6 11.64 59.7 10.34 60.4 9.64C61.3 8.84 62.7 8.84 63.6 9.64C64.3 10.34 64.4 11.54 64.4 13.04C64.4 14.54 64.3 15.74 63.6 16.44ZM77.2 6.04L74.4 14.64L71.6 6.04H67.9L73.1 20.04H75.8L80.9 6.04H77.2ZM86.8 5.94C83.2 5.94 80.7 8.54 80.7 13.04C80.7 18.74 83.9 20.24 87.2 20.24C89.2 20.34 91.2 19.54 92.5 18.04L90.4 15.94C89.6 16.84 88.4 17.34 87.2 17.24C85.6 17.34 84.2 16.14 84.1 14.54V14.14H92.8V12.54C92.9 8.74 90.7 5.94 86.8 5.94ZM84.1 11.74C84.1 11.24 84.2 10.74 84.4 10.24C84.8 9.34 85.7 8.84 86.7 8.84C87.7 8.74 88.6 9.34 89 10.24C89.2 10.74 89.3 11.24 89.3 11.74H84.1ZM97.43 7.44V6.14H94.03V20.14H97.53V11.74C97.43 10.44 98.33 9.34 99.63 9.14H99.83C100.53 9.14 101.23 9.44 101.63 9.94L104.23 7.34C103.812 6.89008 103.299 6.53969 102.728 6.31469C102.157 6.08969 101.542 5.99581 100.93 6.04C99.63 5.94 98.33 6.44 97.43 7.44ZM105.03 4.64V20.04H108.53V9.04H111.13V6.34H108.53V4.84C108.43 4.24 108.83 3.64 109.43 3.54H111.03V0.539999H109.03C108.518 0.526697 108.008 0.614453 107.53 0.798252C107.051 0.982051 106.614 1.25829 106.243 1.61119C105.871 1.96408 105.573 2.38672 105.365 2.85494C105.157 3.32316 105.043 3.82779 105.03 4.34V4.64ZM125.3 5.94C123.7 5.84 122.1 6.44 121 7.64C119.7 8.94 119.4 10.54 119.4 13.04C119.4 15.54 119.7 17.14 121 18.44C122.1 19.54 123.7 20.14 125.3 20.14C126.9 20.24 128.5 19.64 129.6 18.44C130.9 17.14 131.2 15.54 131.2 13.04C131.2 10.54 130.9 8.94 129.6 7.64C129.055 7.05481 128.386 6.59857 127.642 6.30449C126.898 6.01041 126.098 5.88589 125.3 5.94ZM127 16.44C126.1 17.24 124.7 17.24 123.8 16.44C123.1 15.74 123 14.44 123 13.04C123 11.64 123.1 10.34 123.8 9.64C124.7 8.84 126.1 8.84 127 9.64C127.7 10.34 127.8 11.54 127.8 13.04C127.8 14.54 127.7 15.74 127 16.44ZM147.7 6.04L145.4 14.64L142.5 6.04H140L137.2 14.74L134.9 6.14H131.2L135.5 20.14H138.4L141.3 11.34L144.2 20.14H147.2L151.5 6.14L147.7 6.04ZM116.48 15.84V0.639998H112.98V16.04C112.953 16.5392 113.025 17.0388 113.191 17.5102C113.358 17.9816 113.616 18.4155 113.95 18.787C114.284 19.1586 114.689 19.4606 115.14 19.6756C115.591 19.8906 116.081 20.0144 116.58 20.04H119.08V17.04H117.78C117.18 17.14 116.68 16.84 116.48 16.24V15.84ZM17.7 6.4H14V2H12V15.9C12 17.9 13.1 19.5 15.4 19.5H16.8V17.8H15.8C14.5 17.8 14 17.1 14 15.8V8.1H15.9L17.7 6.4Z" fill="#222426"/>
              </svg>

            </div>
            <div className='logo2'>
              <svg width="25" height="20" viewBox="0 0 25 30" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" clipRule="evenodd" d="M14.5 0L11.8 2L21.7 15.3L24.4 13.3L14.5 0ZM19 18.4L6.3 7.8L8.4 5.3L21.1 15.9L19 18.4ZM2.1 15.2L17.1 22.2L18.5 19.2L3.5 12.2L2.1 15.2ZM16.0908 25.9902L16.7844 23.041L0.679932 19.687L0 23L16.0908 25.9902ZM16 30H0V27H16V30Z" fill="#F48024"/>
              </svg>
            </div>
            </StyledLogo>
        </Link>
        <StyledNavigation>
          {loginSuccess ? null : <li>About</li>}
          <li>Products</li>
          </StyledNavigation>
          <div className='inputbar'>
            
            <StyledInput 
            type="search" 
            placeholder="Search..." 
            onClick={clickSearchIcon} 
            onFocus={() => {
              if(window.innerWidth >= 700) {
                setFocusSearchBar(true)
              }
            }}
            onBlur={() => {
              if(window.innerWidth >= 700) {
                setTimeout(() => {
                  setFocusSearchBar(false);
                }, 200);
              }
            }} 
            />
            {focusSearchBar ?
              <StyledBubble className='bubble'>
                <div className='bubble__content'>
                  <div>words here<span>exact phrase</span></div>
                  <div>user:1234<span>search by author</span></div>
                  <div>answers:0<span>unanswered questions</span></div>
                  <div className='bubble__btn'>
                  <Link to='/ask'>
                    <button className='question__btn'>Ask a question</button>
                  </Link>
                  </div>
                </div>
              </StyledBubble>
              : null
            }
          </div>

        <StyledBtn>
          {loginSuccess 
            ? 
              <div className='nav'>
                <Link to='/mypage'><div className='nav__user'>{localStorage.getItem('name').slice(-2)}</div></Link>
                <div className='nav__icon'>
                  <svg width="20" height="15" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M4.63 -2.03915e-05H15.19C16.0618 -0.0211123 16.8468 0.525144 17.13 1.34998L20 9.78998V14C20 15.1045 19.1046 16 18 16H2C0.89543 16 0 15.1045 0 14V9.78998L2.78 1.34998C3.03141 0.541196 3.78307 -0.00731591 4.63 -2.03915e-05ZM12.91 12L14.91 9.99998H17.86L15.42 2.67998C15.2824 2.27267 14.8999 1.99887 14.47 1.99998H5.35C4.92008 1.99887 4.53757 2.27267 4.4 2.67998L1.96 9.99998H4.91L6.91 12H12.91Z" fill="black"/>
                  </svg>
                </div>
                <div className='nav__icon'>
                  <svg width="18" height="15" viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15 1V0H3V1H0V5C0 6.6 1.4 8 3 8V9C3.4 10.5 6 11.6 8 12V14H5C5 14 4 15.5 4 16H14C14 15.6 13 14 13 14H10V12C12 11.6 14.6 10.5 15 9V8C16.6 7.8 18 6.6 18 5V1H15ZM3 6C2.5 6 2 5.5 2 5V3H3V6ZM11.4 8.5L9 7L6.6 8.4L7.6 5.7L5 4H8L9 1.3L10 4H12.8L10.5 5.8L11.5 8.5H11.4ZM16 5C16 5.5 15.5 6 15 6V3H16V5Z" fill="black"/>
                  </svg>
                </div>
                <div className='nav__icon'>
                  <svg width="16" height="15" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8 0C3.64267 0 0 3.64267 0 8C0 12.3573 3.64266 16 8 16C12.3573 16 16 12.3573 16 8C16 3.64266 12.3573 0 8 0ZM8.81 12.13C8.79 12.84 8.26 13.28 7.57 13.26C6.91 13.24 6.4 12.77 6.42 12.06C6.44 11.34 6.98 10.88 7.64 10.9C8.34 10.93 8.84 11.41 8.81 12.13ZM10.77 7C10.1836 7.6629 8.99229 8.08507 8.72 8.97C8.66641 9.2166 8.63627 9.46772 8.63 9.72C8.63 9.77 8.6 9.88 8.45 9.88H6.88C6.72 9.88 6.7 9.78 6.7 9.73C6.76152 8.37659 7.36087 7.53141 8.53 6.85C8.91723 6.55958 9.22247 6.10274 9.22824 5.60861C9.24275 4.36872 7.5915 3.79041 6.88 4.89C6.67 5.22 6.7 5.62 6.7 5.99H4.75C4.75 4.01906 5.77665 2.73 7.78 2.73C9.53471 2.73 11.25 3.60389 11.25 5.56C11.25 6.13 11.05 6.61 10.77 7Z" fill="black"/>
                  </svg>
                </div>
                <div className='nav__icon list' onClick={navBtnClickHandler}>
                  <svg width="16" height="23" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M14 0H2C0.89543 0 0 0.89543 0 2V4H16V2C16 0.89543 15.1046 0 14 0ZM0 12C0 13.1046 0.89543 14 2 14H10V17L13 14H14C15.1046 14 16 13.1046 16 12V10H0V12ZM16 5H0V9H16V5Z" fill="black"/>
                  </svg>
                  {clickNavList ?
                    <>
                      <StyledMenuBubble>
                        <div className='bubble__content'>
                          <Link to='/logout'><div>Log out</div></Link>
                        </div>
                      </StyledMenuBubble>
                    </>
                    : null
                  }
                </div>
              </div>
            : 
              <>
                <Link to='/login'><button className="btn login" type="submit">Log in</button></Link>
                <Link to='/signup'><button className="btn signup" type="submit">Sign up</button>
              </Link>
              </>
          }
        </StyledBtn>
      </StyledNavContainer>
      {openSearchBar || focusSearchBar ? 
        <>
          <StyledHiddenInput>
            <StyledInput 
              type="search" 
              placeholder="Search..."
              onFocus={() => setFocusSearchBar(true)} 
              onBlur={() => {
                setTimeout(() => {
                  setFocusSearchBar(false)
                }, 200);
              }} 
            />
          </StyledHiddenInput>
          {focusSearchBar ?
            <StyledBubble className='bubble__hidden'>
              <div className='bubble__content'>
                <div>words here<span>exact phrase</span></div>
                <div>user:1234<span>search by author</span></div>
                <div>answers:0<span>unanswered questions</span></div>
                <div className='bubble__btn'>
                <Link to='/ask'>
                  <button className='question__btn'>Ask a question</button>
                </Link>
                </div>
              </div>
            </StyledBubble>
            : null
          }
        </>
        : null
      }
    </StyledNav>
  );
};

export default Nav;