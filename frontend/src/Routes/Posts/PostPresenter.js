import React from "react";
import styled from "styled-components";
import Moment from "react-moment";
import { Link } from "react-router-dom";

const Container = styled.div`
  width: 60%;
  height: fit-content;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 2fr 1fr;
`;

const PostContainer = styled.div`
  width: 100%;
  height: fit-content;
  padding-top: 50px;
`;

const Posts = styled.div`
  border-top: 1px solid rgba(0, 0, 0, 0.2);
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
const SearchBoxForm = styled.form`
  width: 90%;
`;
const SearchBox = styled.input.attrs((props) => ({
  type: "text",
}))`
  height: 40px;
  width: 100%;
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

const CategoryUl = styled.ul`
  height: 500px;
  overflow: scroll;

  @media screen and (max-width: 800px) {
    height: fit-content;
    overflow: unset;
  }
`;
const CategoryLi = styled.li`
  width: fit-content;
  margin-bottom: 5px;
  &:hover {
    opacity: 0.7;
    cursor: pointer;
    background-color: skyblue;
    border-radius: 10px;
  }
`;

const PostPresenter = ({
  categoryHandler,
  category,
  post,
  paginator,
  submitHandler,
  categoryId,
}) => {
  function changeColor(id) {
    document.getElementById(id).classList.add("category-title");
  }
  function removeColor(id) {
    const removeId = document.getElementById(id);
    const allId = document.getElementById("all");
    if (removeId != null) {
      removeId.classList.remove("category-title");
    }
    if (allId != null) {
      allId.classList.remove("category-title");
    }
  }

  const removeTag = (content) => {
    const regex = /(<([^>]+)>)/gi;
    return content.replace(regex, "");
  };
  return (
    <Container className="board-container">
      <PostContainer>
        {post.map((p) => (
          <Link className="post-link" to={`/posts/${p._id}`} key={p._id}>
            <Posts className="popular-post">
              <PostTitle className="post-title">{p.title}</PostTitle>
              <PostContent className="post-content">
                {removeTag(p.content).toString().substring(0, 100)}...
              </PostContent>
              <PostCreatedAt className="createdAt">
                <Moment format="YYYY년MM월DD일">{p.createdAt}</Moment>
              </PostCreatedAt>
            </Posts>
          </Link>
        ))}
        {post.length > 0 && paginator}
      </PostContainer>
      <CategoryContainer className="category-container">
        <SearchBoxForm onSubmit={submitHandler}>
          <SearchBox
            id="searchbox"
            placeholder="검색할 글 제목을 입력하세요."
          ></SearchBox>
        </SearchBoxForm>
        <Category>
          <CateogoryTitle>카테고리</CateogoryTitle>
          <CategoryUl>
            <CategoryLi
              onClick={(e) => {
                removeColor(categoryId);
                changeColor(e.target.id);
                categoryHandler();
              }}
              id="all"
            >
              <i className="fas fa-caret-right"></i> All
            </CategoryLi>
            {category.map((cty) => (
              <CategoryLi
                key={cty._id}
                id={cty._id}
                onClick={(e) => {
                  removeColor(categoryId);
                  changeColor(e.target.id);
                  categoryHandler(cty._id);
                }}
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
