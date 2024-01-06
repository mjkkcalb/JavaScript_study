const man = document.querySelector('.man');
const h1 = document.querySelector('h1');
const mountainLeft = document.querySelector('.mountain_left');
const mountainRight = document.querySelector('.mountain_right');

addEventListener('scroll', () => {
  h1.style.bottom = `-${scrollY}px`;
  mountainLeft.style.left = `-${scrollY / 5 }px`;
  mountainRight.style.left = `${scrollY / 5}px`;
  man.style.bottom = `-${scrollY / 3}px`;
});