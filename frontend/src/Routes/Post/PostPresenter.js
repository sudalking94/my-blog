import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 60%;
  height: 100vh;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 2fr 1fr;
`;

const PostContainer = styled.div`
  background-color: green;
  width: 100%;
  height: 100%;
`;

const PostTitle = styled.div``;

const Post = styled.div``;

const CategoryContainer = styled.div`
  background-color: yellow;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const SearchBox = styled.input.attrs((props) => ({
  type: "text",
}))`
  height: 40px;
  width: 90%;
  border: 3px solid blue;
  margin-bottom: 15px;
  &:focus {
    outline: none;
  }
`;

const Category = styled.div`
  width: 90%;
  height: 50%;
`;

const CateogoryTitle = styled.h3`
  border-bottom: 1px solid;
  margin-bottom: 20px;
`;

const CategoryUl = styled.ul``;
const CategoryLi = styled.li`
  width: fit-content;
  &:hover {
    opacity: 0.7;
    cursor: pointer;
  }
`;

const PostPresenter = (props) => {
  console.log("Props", props);
  return (
    <Container>
      <PostContainer>
        <PostTitle></PostTitle>
        <Post></Post>
      </PostContainer>
      <CategoryContainer>
        <SearchBox placeholder="검색할 글 제목을 입력하세요."></SearchBox>
        <Category>
          <CateogoryTitle>카테고리</CateogoryTitle>
          <CategoryUl>
            <CategoryLi onClick={props.categoryHandler}>
              <i class="fas fa-caret-right"></i> asdasdasdsaaaaaaaaaaaaaaaaaaaa
            </CategoryLi>
            <CategoryLi>
              <i class="fas fa-caret-right"></i> asdasdasd
            </CategoryLi>
            <CategoryLi>
              <i class="fas fa-caret-right"></i> asdasdasd
            </CategoryLi>
          </CategoryUl>
        </Category>
      </CategoryContainer>
    </Container>
  );
};

export default PostPresenter;
