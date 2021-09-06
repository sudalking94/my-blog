import React, { useState } from "react";
import { Link, withRouter } from "react-router-dom";
import styled from "styled-components";

const Header = styled.div`
  background-color: #f7f7f7;
  position: fixed;
  width: 100%;
  height: 50px;
  z-index: 999;
  border-bottom: 1px solid rgb(132, 129, 129);

  @media screen and (max-width: 800px) {
  }
`;

const List = styled.ul`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  height: 100%;
  margin-right: 30%;

  @media screen and (max-width: 800px) {
    display: none;
  }
`;

const Item = styled.li`
  margin-left: 41px;
`;

const SLink = styled(Link)`
  color: black;
  font-weight: 400;
  text-decoration: none;
  &:hover {
    border-bottom: 2px solid skyblue;
  }
`;
const NavBarContainer = styled.div`
  margin-left: 10px;
  margin-top: -17px;
  width: fit-content;
  cursor: pointer;

  @media screen and (min-width: 800px) {
    display: none;
  }
`;

const NavBarEach = styled.div`
  background-color: black;
  height: 3px;
  width: 18px;
  margin-bottom: 3px;
`;

const MobileHeader = styled.div`
  background-color: #f7f7f7;
  position: fixed;
  width: 100%;
  z-index: 999;
  top: 50px;
  height: fit-content;

  @media screen and (min-width: 800px) {
    display: none;
  }
`;

const MobileTitle = styled.h5`
  text-align: center;
  margin-top: 15px;
  @media screen and (min-width: 800px) {
    display: none;
  }
`;

const MobileList = styled.ul`
  margin-left: 30px;
  padding-bottom: 10px;
  width: fit-content;
`;
const MobileItem = styled.li`
  width: fit-content;
  margin-top: 10px;
`;

export default withRouter(({ location: { pathname } }) => {
  const [show, setShow] = useState(false);
  const navHandler = () => {
    show ? setShow(false) : setShow(true);
  };
  return (
    <>
      <Header>
        <MobileTitle>J-Blog</MobileTitle>
        <List>
          <Item current={pathname === "/"}>
            <SLink to="/">홈</SLink>
          </Item>
          <Item current={pathname === "/posts"}>
            <SLink to="/posts">공부흔적</SLink>
          </Item>
        </List>
        <NavBarContainer onClick={navHandler}>
          <NavBarEach></NavBarEach>
          <NavBarEach></NavBarEach>
          <NavBarEach></NavBarEach>
        </NavBarContainer>
      </Header>

      {show && (
        <>
          <MobileHeader id="mobile-header">
            <MobileList>
              <MobileItem>
                <SLink to="/" onClick={navHandler}>
                  홈
                </SLink>
              </MobileItem>
              <MobileItem>
                <SLink to="/posts" onClick={navHandler}>
                  공부흔적
                </SLink>
              </MobileItem>
            </MobileList>
          </MobileHeader>
        </>
      )}
    </>
  );
});
