anime({
  targets: ['.outlined patha', '.outlined polygona'],
  strokeDashoffset: [anime.setDashoffset, 0],
  easing: 'easeInOutSine',
  duration: 2500,
  delay: function(el, i, l) {
    return i * 50;
  },
  direction: 'normal'
});

const faces = document.getElementsByTagName('svg');
const cube = document.getElementById('cube');
console.log(faces, cube)



setTimeout(function(){
  cube.classList.add('show-back');
  console.log(cube);
}, 10);

setTimeout(function(){
  cube.classList.remove('show-back');
  cube.classList.add('show-left');
  console.log(cube);
}, 2010);

setTimeout(function(){
  cube.classList.remove('show-left');
  cube.classList.add('show-top');
  console.log(cube);
}, 4010);

setTimeout(function(){
  cube.classList.remove('show-top');
  cube.classList.add('show-right');
  console.log(cube);
}, 6010);

setTimeout(function(){
  cube.classList.remove('show-right');
  cube.classList.add('show-bottom');
  console.log(cube);
}, 8010);

setTimeout(function(){
  cube.classList.remove('show-bottom');
  cube.classList.add('show-left');
  console.log(cube);
}, 10010);

setTimeout(function(){
  cube.classList.remove('show-left');
  cube.classList.add('show-back');
  console.log(cube);
}, 12010);
