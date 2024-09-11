const stop = document.getElementById('stop');
const hex = '0123456789ABCDEF';

let intervalId ;
let randomColor = function(){
  let color = '#';
  for(let i=0; i<6; i++){
    color += hex[Math.floor(Math.random() * 16)] 
  }
  return color;
}
const startChangeColor = function(){
  intervalId = setInterval(changeColor , 1000);

  function changeColor (){
    document.body.style.backgroundColor = randomColor();
  }
}
const start = document.getElementById('start');
const stopChangingColor = function(){
  clearInterval(intervalId)
}
start.addEventListener('click', startChangeColor);
stop.addEventListener('click', stopChangingColor);