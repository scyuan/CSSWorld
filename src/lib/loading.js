import '../css/loading.scss';
import {
  createElement
} from '../utils/dom';

let letters = ["l", "o", "a", "d", "i", "n", "g"];

let loadingDiv = createElement('div', "loading-wrap");

letters.forEach((c, i) => {
  let span = createElement('span');
  span.innerText = c;
  span.style.animationDelay = `${i / 10}s`;
  loadingDiv.appendChild(span);
})

document.body.appendChild(loadingDiv);