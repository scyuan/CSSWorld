import '../css/slide-bar.scss'
let slideTextWapper = document.createElement('div');
slideTextWapper.className = 'slide-text-wrapper';

let p1 = document.createElement('p');
p1.textContent = "I'm yuan";
p1.className = 'title';
let p2 = document.createElement('p');
p2.textContent = "a web developer";
p2.className = 'desc';
slideTextWapper.appendChild(p1);
slideTextWapper.appendChild(p2);

document.body.appendChild(slideTextWapper);