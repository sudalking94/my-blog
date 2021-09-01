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

`;

export default Globalstyles;
