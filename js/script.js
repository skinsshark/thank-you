// anime({
//   targets: ['path', 'polygon'],
//   strokeDashoffset: [anime.setDashoffset, 0],
//   easing: 'easeInOutSine',
//   duration: 2500,
//   delay: function(el, i, l) {
//     return i * 50;
//   },
//   direction: 'normal'
// });

const faces = document.getElementsByTagName('svg');
const cube = document.getElementById('cube');

const SIDES = [
  'front',
  'back',
  'right',
  'left',
  'top',
  'bottom'
];
const numOfSides = SIDES.length;
const seenFaces = new Set();

function switchFace() {
  cube.className = '';
  cube.classList.add(`show-${randoSide()}`);
}

function randoSide() {
  if (seenFaces.size === numOfSides) {
    seenFaces.clear();
  }

  let startLength = seenFaces.size;
  let res, indx;

  do {
    indx = Math.floor(
      Math.random() * Math.floor(numOfSides)
    );
    res = SIDES[indx];
    seenFaces.add(res);
  } while (startLength === seenFaces.size);


  return res;
}
