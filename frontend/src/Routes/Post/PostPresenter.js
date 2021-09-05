import React from "react";
import styled from "styled-components";
import Moment from "react-moment";

const PostContainer = styled.div`
  padding-top: 50px;
  height: 100vh;
  width: 50%;
  margin: 0 auto;
  border: 1px dashed black;

  @media screen and (max-width: 800px) {
    width: 100%;
    height: fit-content;
  }
`;

const PostTitle = styled.h2`
  font-weight: 600;
  margin-top: 100px;
  text-align: center;
`;

const CreatedAt = styled.span`
  margin: 10px 0;
  display: inline-block;
  width: 100%;
  text-align: end;
  font-size: smaller;
`;

const PostContents = styled.p``;

const PostPresenter = ({ post }) => {
  console.log(post);
  return (
    <PostContainer>
      <PostTitle>{post.title}</PostTitle>
      <CreatedAt>
        <Moment format="YYYY년 MM월 DD일">{post.createdAt}</Moment>
      </CreatedAt>
      <PostContents>{post.content}</PostContents>
    </PostContainer>
  );
};

export default PostPresenter;
