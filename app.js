const input = document.getElementById('inp');
const button = document.getElementById('btn');
const param = document.getElementById('time');

let times = 0;
let timer;

function start() {
  times = input.value;
  timer = setInterval(setTime, 1000);
  param.textContent = times;
}

function setTime() {
  if (times === 0) {
    clear();
    return;
  }
  times--;
  param.textContent = times;
}

function clear() {
  clearInterval(timer);
}
