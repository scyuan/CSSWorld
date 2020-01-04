import "../css/radio.scss";

import {
  createElement,
  appendChild
} from '../utils/dom';

let wrapper = createElement('div', 'radio-wrapper');

let radios = new Array(4).fill(null);

radios.forEach(() => {
  let radio = createElement('div', 'radio');
  radio.style['--curr'] = 50;
  wrapper.appendChild(radio);
})


appendChild(wrapper);