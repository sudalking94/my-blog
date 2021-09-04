import React from "react";
import mypic from "../../static/images/전준우.jpg";
import styled from "styled-components";
import { Link } from "react-router-dom";

const HomeContainer = styled.div`
  padding-top: 50px;
  width: 60%;
  margin: 0 auto;

  @media screen and (max-width: 800px) {
    width: 100%;
  }
`;

const IntroContainer = styled.div`
  margin-top: 50px;
  display: flex;
  border: 1px dashed black;
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

const SocialLink = styled(Link)`
  width: fit-content;
`;

const PopularPostContainer = styled.div`
  width: 100%;
  height: fit-content;
  padding-top: 50px;
`;

const PopularPosts = styled.div`
  border-top: 1px solid rgba(0, 0, 0, 0.2);
  width: 100%;
  height: 200px;
  position: relative;
`;

const PopularPostTitle = styled.h2`
  margin-bottom: 10px;
`;

const PopularPostContent = styled.h5`
  opacity: 0.7;
`;

const PopularPostCreatedAt = styled.div`
  position: absolute;
  bottom: 40px;
  opacity: 0.5;
`;

const HomePresenter = ({ post }) => {
  return (
    <HomeContainer>
      <IntroContainer>
        <MyPic src={mypic} />
        <MyIntro>
          <h5>블로그 주인 입니다.</h5>
          <MyIntroContents>공부한 것들을 기록하는 공간입니다.</MyIntroContents>
          <SocialLink
            target="_blank"
            to={{ pathname: "https://github.com/sudalking94" }}
          >
            <i className="fab fa-github fa-lg"></i>
          </SocialLink>
        </MyIntro>
      </IntroContainer>
      <PopularPostContainer>
        <h3>인기있는 글: top 3</h3>
        {post.map((p) => (
          <PopularPosts className="popular-post" key={p._id}>
            <PopularPostTitle className="post-title">
              {p.title}
            </PopularPostTitle>
            <PopularPostContent className="post-content">
              {p.content.substring(0, 100)}...
            </PopularPostContent>
          </PopularPosts>
        ))}
      </PopularPostContainer>
    </HomeContainer>
  );
};

export default HomePresenter;
