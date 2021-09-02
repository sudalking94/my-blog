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
  width: 100%;
  height: 90vh;
  padding-top: 50px;
`;

const Posts = styled.div`
  border-bottom: 1px solid rgba(0, 0, 0, 0.5);
  width: 100%;
  height: 200px;
  position: relative;
`;

const PostTitle = styled.h2`
  margin-bottom: 10px;
`;

const PostContent = styled.h5`
  opacity: 0.7;
`;

const PostCreatedAt = styled.div`
  position: absolute;
  bottom: 40px;
  opacity: 0.5;
`;

const CategoryContainer = styled.div`
  width: 100%;
  height: 100vh;
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
  margin-bottom: 5px;
  &:hover {
    opacity: 0.7;
    cursor: pointer;
  }
`;

const PostPresenter = ({ categoryHandler, category, post, paginator }) => {
  return (
    <Container>
      <PostContainer>
        {post.map((p) => (
          <Posts key={p._id}>
            <PostTitle>{p.title}</PostTitle>
            <PostContent>{p.content.substring(0, 200)}...</PostContent>
            <PostCreatedAt>{p.createdAt}</PostCreatedAt>
          </Posts>
        ))}
        {paginator}
      </PostContainer>
      <CategoryContainer>
        <SearchBox placeholder="검색할 글 제목을 입력하세요."></SearchBox>
        <Category>
          <CateogoryTitle>카테고리</CateogoryTitle>
          <CategoryUl>
            <CategoryLi onClick={() => categoryHandler()}>
              <i className="fas fa-caret-right"></i> All
            </CategoryLi>
            {category.map((cty) => (
              <CategoryLi
                key={cty._id}
                onClick={() => categoryHandler(cty._id)}
              >
                <i className="fas fa-caret-right"></i> {cty.title}
              </CategoryLi>
            ))}
          </CategoryUl>
        </Category>
      </CategoryContainer>
    </Container>
  );
};

export default PostPresenter;
