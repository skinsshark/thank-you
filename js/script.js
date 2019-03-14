anime({
  targets: ['.outlined path', '.outlined polygon'],
  strokeDashoffset: [anime.setDashoffset, 0],
  easing: 'easeInOutSine',
  duration: 2500,
  delay: function(el, i, l) {
    return i * 50;
  },
  direction: 'normal'
});
