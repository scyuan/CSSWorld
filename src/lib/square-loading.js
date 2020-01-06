import '../css/square-loading.scss';


import {
  createElement,
  appendChild
} from '../utils/dom';

let wrapper = createElement('div', 'square-loading');

let squares = new Array(50).fill(null);

squares.forEach((square, i) => {
  i = i + 1;
  square = createElement('div', 'square');
  let no_row = parseInt(i / 11) + 1;
  let no_col = i % 10 === 0 ? 10 : i % 10;

  let delay = no_col / 10 + (no_row - 1) * 0.1;

  square.style.animationDelay = `${delay}s`;
  wrapper.appendChild(square);
})
appendChild(wrapper);