import "../css/radio.scss";

import {
  createElement,
  appendChild
} from '../utils/dom';

let wrapper = createElement('div', 'radio-wrapper');

let radios = new Array(4).fill(null);

let arr = ["JavaScript", "NodeJs", "Vue", "HTML"]

radios.forEach((e, index) => {
  let radio = createElement('div', 'radio');
  let p = createElement('p', 'text');
  p.textContent = arr[index];
  radio.appendChild(p);
  radio.setAttribute('style', `--curr:${Math.round(Math.random()*50) + 50}`);
  wrapper.appendChild(radio);
})


appendChild(wrapper);