import '../css/slide-bar.scss';

import {
  createElement
} from '../utils/dom';

let slideTextWapper = createElement('div', 'slide-text-wrapper');

let p1 = createElement('p', 'title');
p1.textContent = "I'm yuan";

let p2 = createElement('p', 'desc');
p2.textContent = "a web developer";

slideTextWapper.appendChild(p1);
slideTextWapper.appendChild(p2);

document.body.appendChild(slideTextWapper);