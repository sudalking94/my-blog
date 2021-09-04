import React from "react";
import styled from "styled-components";

const Bottom = styled.div`
  border-top: 1px solid rgb(206, 203, 202);
  width: 60%;
  margin: 0 auto;
  @media screen and (max-width: 800px) {
    width: 100%;
  }
`;

const BottomContentsContainer = styled.div`
  padding: 46px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 10px;
`;

const BottomNavigation = () => {
  return (
    <Bottom>
      <BottomContentsContainer>
        <span>Please don't copy us. </span>
        <span>© 2021 J-Blog. All rights reserved.</span>
      </BottomContentsContainer>
    </Bottom>
  );
};

export default BottomNavigation;
