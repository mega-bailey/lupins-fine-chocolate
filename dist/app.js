const hero = document.querySelector('.hero');
const navbar = document.querySelector('.nav-bar');
const logo = document.querySelector('.nav-logo');
const headlineTop = document.querySelector('.headline--top-main');
const headlineTopSub = document.querySelector('.headline--top-sub');
const headlineBottom = document.querySelector('.headline--bottom');

const timeline = new TimelineMax();

timeline
  .fromTo(
    hero,
    1.2,
    { height: '0%' },
    { height: '100%', ease: Power2.easeInOut }
  )
  .fromTo(navbar, 0.6, { opacity: 0, y: -20 }, { opacity: 1, y: 0 }, '-=.7')
  .fromTo(logo, 0.7, { opacity: 0, x: -30 }, { opacity: 1, x: 0 }, '-=.5')
  .fromTo(
    headlineTop,
    0.5,
    { opacity: 0, y: -70 },
    { opacity: 1, y: 0 },
    '-=.5'
  )
  .fromTo(
    headlineTopSub,
    0.5,
    { opacity: 0, x: 60 },
    { opacity: 1, x: 0 },
    '-=.5'
  )
  .fromTo(
    headlineBottom,
    0.9,
    { opacity: 0, y: 60 },
    { opacity: 1, y: 0 },
    '-=.10'
  );
