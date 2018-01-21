import { injectGlobal } from 'styled-components';

injectGlobal`
  .MemeGenerator {
    padding-top: 3rem;
    padding-bottom: 3rem;

    img {
      margin-bottom: 0;
    }

    h1,
    h2,
    h3,
    h4 {
      margin-bottom: 0.25em;
    }

    p {
      margin-top: 0;
    }
  }
`;
