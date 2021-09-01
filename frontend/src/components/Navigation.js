import React from "react";
import { Link, withRouter } from "react-router-dom";
import styled from "styled-components";

const Header = styled.div`
  background-color: black;
  position: fixed;
  width: 100%;
  height: 50px;
`;

const List = styled.ul`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  height: 100%;
`;

const Item = styled.li`
  margin-left: 41px;
`;

const SLink = styled(Link)`
  color: white;

  text-decoration: none;
  &:hover {
    color: yellow;
  }
`;

export default withRouter(({ location: { pathname } }) => (
  <Header>
    <List>
      <Item current={pathname === "/"}>
        <SLink to="/">홈</SLink>
      </Item>
      <Item current={pathname === "/posts"}>
        <SLink to="/posts">공부흔적</SLink>
      </Item>
      <Item current={pathname === "/projects"}>
        <SLink to="/projects">프로젝트</SLink>
      </Item>
    </List>
  </Header>
));
