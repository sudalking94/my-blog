import React from "react";
import mypic from "../../static/images/전준우.jpg";
import styled from "styled-components";

const HomeContainer = styled.div`
  padding-top: 50px;
  display: grid;

  grid-template-columns: 1fr 2fr;
`;

const MyPicContainer = styled.div`
  background-color: green;
`;

const MyPic = styled.img`
  border: 1px solid black;
  width: 270px;
  height: 270px;
  object-fit: contain;
  border-radius: 100%;
`;

const Biography = styled.div`
  background-color: blue;
`;

const HomePresenter = () => {
  return (
    <HomeContainer>
      <MyPicContainer>
        <MyPic src={mypic}></MyPic>
      </MyPicContainer>
      <Biography></Biography>
    </HomeContainer>
  );
};

export default HomePresenter;
