import React from "react";
import styled from "styled-components";

const PageContainer = styled.div`
  display: flex;
`;

const PageButton = styled.div`
  margin-top: 5px;
  margin-right: 5px;

  border-radius: 50px;

  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  font-size: 1em;
`;

const NextPage = styled.div`
  cursor: pointer;
`;
const PrePage = styled.div`
  margin-right: 5px;
  cursor: pointer;
`;

const Pagination = ({ lastPage, currentPage, preHandle, nextHandle }) => {
  return (
    <>
      <PageContainer>
        {parseInt(currentPage) !== 1 && (
          <PrePage onClick={() => preHandle(parseInt(currentPage) - 1)}>
            <i className="fas fa-angle-left fa-2x"></i>
          </PrePage>
        )}

        <PageButton>
          Page {currentPage} of {lastPage}
        </PageButton>

        {parseInt(currentPage) !== parseInt(lastPage) && (
          <NextPage onClick={() => nextHandle(parseInt(currentPage) + 1)}>
            <i className="fas fa-angle-right fa-2x"></i>
          </NextPage>
        )}
      </PageContainer>
    </>
  );
};

export default Pagination;
