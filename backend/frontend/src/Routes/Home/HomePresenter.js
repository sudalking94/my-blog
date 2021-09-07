import React from "react";
import mypic from "../../static/images/전준우.jpg";
import styled from "styled-components";
import Moment from "react-moment";
import { Link } from "react-router-dom";

const HomeContainer = styled.div`
  padding-top: 50px;
  height: 100vh;
  width: 60%;
  margin: 0 auto;

  @media screen and (max-width: 800px) {
    width: 100%;
    height: fit-content;
  }
`;

const IntroContainer = styled.div`
  margin-top: 50px;
  display: flex;
`;

const CategoryContainer = styled.div`
  height: 70px;
  margin: 0 auto;
  margin-top: 30px;
  background-color: #f2f2f3;
  padding: 0 15px;
  display: flex;
  align-items: center;
  gap: 10px;
  overflow: auto;
  border-radius: 5px;

  @media screen and (max-width: 800px) {
    width: 90%;
  }
`;

const CategoryItem = styled.div`
  background-color: white;
  cursor: pointer;
  padding: 10px;
  height: 15px;
  width: fit-content;
  border-radius: 10px;
  &:hover {
    background-color: skyblue;
  }
`;

const CategorySpan = styled.span`
  white-space: nowrap;
`;

const MyPic = styled.img`
  border: 1px solid black;
  width: 75px;
  height: 75px;
  object-fit: contain;
  border-radius: 100%;
`;

const MyIntro = styled.div`
  padding-left: 15px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const MyIntroContents = styled.p`
  font-size: smaller;
`;

const SocialLink = styled.a`
  width: fit-content;
`;

const PostContainer = styled.div`
  width: 100%;
  height: fit-content;
  padding-top: 50px;
`;

const Posts = styled.div`
  border-top: 1px solid rgba(0, 0, 0, 0.2);
  width: 100%;
  height: 150px;
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
  bottom: 10px;
  opacity: 0.5;
`;

const MoreReadContainer = styled.div`
  margin: 10px 0;
`;
const MoreRead = styled(Link)`
  color: skyblue;
  text-decoration: none;
`;

const HomePresenter = ({ post, category, categoryHandler, categoryId }) => {
  const removeTag = (content) => {
    const regex = /(<([^>]+)>)/gi;
    return content.replace(regex, "");
  };
  function changeColor(id) {
    const Eid = document.getElementById(id);
    Eid.style.backgroundColor = "skyblue";
  }
  function removeColor(id) {
    const removeId = document.getElementById(id);
    const allId = document.getElementById("cty-all");
    if (removeId != null) {
      removeId.style.backgroundColor = "white";
    }
    if (allId != null) {
      allId.style.backgroundColor = "white";
    }
  }
  return (
    <HomeContainer>
      <IntroContainer>
        <MyPic src={mypic} />
        <MyIntro>
          <h5>안녕하세요. 개발자 전준우 입니다.</h5>
          <MyIntroContents>공부한 것들을 기록하는 공간입니다.</MyIntroContents>
          <SocialLink target="_blank" href="https://github.com/sudalking94">
            <i className="fab fa-github fa-lg"></i>
          </SocialLink>
        </MyIntro>
      </IntroContainer>
      <CategoryContainer>
        <CategoryItem
          id="cty-all"
          onClick={(e) => {
            removeColor(categoryId);
            changeColor("cty-all");
            categoryHandler();
          }}
        >
          <CategorySpan>All</CategorySpan>
        </CategoryItem>
        {category.map((cty) => (
          <CategoryItem
            key={cty._id}
            id={cty._id}
            onClick={(e) => {
              removeColor(categoryId);
              changeColor(cty._id);
              categoryHandler(cty._id);
            }}
          >
            <CategorySpan>{cty.title}</CategorySpan>
          </CategoryItem>
        ))}
      </CategoryContainer>
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
      </PostContainer>
      <MoreReadContainer>
        <MoreRead to="/posts">더 보기...</MoreRead>
      </MoreReadContainer>
    </HomeContainer>
  );
};

export default HomePresenter;
