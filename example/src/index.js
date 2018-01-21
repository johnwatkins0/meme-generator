import React from 'react';
import ReactDOM from 'react-dom';

import Example from './Example';

window.addEventListener('load', () => {
  const root = document.querySelector('[data-meme-generator]');

  ReactDOM.render(<Example />, root);
});

export default Example;
