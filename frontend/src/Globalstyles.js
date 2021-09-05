import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const Globalstyles = createGlobalStyle`
  ${reset};
  h1 {
  font-size: 56px;
  }
  h2 {
  font-size: 36px;
  }
  h3 {
    font-size: 28px;
  }
  h4 {
    font-size: 24px;
  }
  h5 {
    font-size: 20px;
  }
  h6 {
    font-size: 16px;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  strong {
    font-weight: 500;
  }

  body * {
  transition: 0.3s;
  }

  .category-title {
    background-color: skyblue;
    border-radius: 10px;
  }

  .popular-post {
    &:hover {
      background-color: #F7F7F7;
    }
  }

  .post-link {
    color: unset;
  text-decoration: none;
  }
  @media screen and (max-width: 800px) {
    .board-container {
      grid-template-columns: 1fr;
      width: 100%;            
    }

    .category-container {
      margin-top: 10px;
      height: fit-content;            
    }

    .createdAt {
      bottom: 5px;
    }
    .post-title {
      font-size: 25px;
    }
    .post-content {
      font-size: 15px;
    }
  }
`;

export default Globalstyles;
