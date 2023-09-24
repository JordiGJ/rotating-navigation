// get elements
const btn = document.querySelector('button');
const section = document.querySelector('section');
const lis = document.querySelectorAll('li');
const nav = document.querySelector('nav');

// functions

const translate = () => {
  section.classList.toggle('showNav');
  nav.classList.toggle('navHiddenIndex');
};

// position elements inside a group of elements at same distance from each other from the left
const positionLis = (elementsGroup, amountPx) => {
  elementsGroup.forEach((el, index) => {
    const currentPosition = parseFloat(window.getComputedStyle(el).left);
    const left = index * amountPx;
    el.style.left = currentPosition + left + 'px';
  });
};

// eventListeners
btn.addEventListener('click', translate);

// init
positionLis(lis, 15);
