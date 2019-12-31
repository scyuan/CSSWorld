import '../css/loading.scss';

let letters = ["l", "o", "a", "d", "i", "n", "g"];

let loadingDiv = document.createElement('div');
loadingDiv.className = "loading-wrap";
letters.forEach((c, i) => {
  let span = document.createElement('span');
  span.innerText = c;
  span.style.animationDelay = `${i / 10}s`;
  loadingDiv.appendChild(span);
})

document.body.appendChild(loadingDiv);