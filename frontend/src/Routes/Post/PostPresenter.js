import React from "react";
import styled from "styled-components";
import Moment from "react-moment";
import { BASE_URL } from "../../constants/urls";

const PostContainer = styled.div`
  padding-top: 50px;
  width: 50%;
  margin: 0 auto;

  @media screen and (max-width: 800px) {
    width: 100%;
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

const PostContents = styled.p`
  padding: 100px 0;
`;
const Section = styled.div``;

const PhotoContainer = styled.div`
  margin-bottom: 100px;
`;

const PhotoCaption = styled.h3`
  text-align: center;
  margin-bottom: 10px;
`;

const PhotoImg = styled.div`
  background-image: url(${(props) => props.bgUrl});
  height: 180px;
  background-size: cover;
  border-radius: 4px;
  background-position: center center;
`;

const PhotoDescription = styled.div``;

const PostPresenter = ({ post, photos }) => {
  return (
    <PostContainer>
      <PostTitle>{post.title}</PostTitle>
      <CreatedAt>
        <Moment format="YYYY년 MM월 DD일">{post.createdAt}</Moment>
      </CreatedAt>
      <PostContents dangerouslySetInnerHTML={{ __html: post.content }} />
      <Section>
        {photos.map((photo) => (
          <PhotoContainer key={photo.id}>
            <PhotoCaption>{photo.caption}</PhotoCaption>
            <PhotoImg bgUrl={`${BASE_URL}${photo.file}`}></PhotoImg>
            <PhotoDescription
              dangerouslySetInnerHTML={{ __html: photo.content }}
            />
          </PhotoContainer>
        ))}
      </Section>
    </PostContainer>
  );
};

export default PostPresenter;
