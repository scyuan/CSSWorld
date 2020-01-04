import '../css/spin-card.scss';
import {
    createElement,
    appendChild
} from '../utils/dom';

import {
    rgb
} from '../utils/color';

let spinCardWarpper = createElement('div', 'spin-card-warpper');


// ES6初始化指定大小的数组，并指定值
let cards = new Array(6).fill(null);

// 通过嵌套一层子元素，实现曲线运动，但是效果不是很好
cards.forEach((ele, index) => {
    let yAxis = createElement('div', 'yAxis');
    yAxis.style.animationDelay = `${0.1 * index}s`;


    let span = createElement('span');
    span.style.backgroundColor = rgb();
    span.style.animationDelay = `${0.1 * index}s`;

    yAxis.appendChild(span);


    spinCardWarpper.appendChild(yAxis);
})

appendChild(spinCardWarpper);