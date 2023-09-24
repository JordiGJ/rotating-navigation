// get elements
const section = document.querySelector('section');
const lis = document.querySelectorAll('li');
const nav = document.querySelector('nav');
const lineContainer = document.querySelector('.container');
const lines = document.querySelectorAll('.line');

// add id to each line
lines.forEach((line, index) => (line.id = 'line' + Number(index + 1)));

// functions

const handleLinesClick = () => {
  lines.forEach(line => {
    if (line.id === 'line1') {
      line.classList.toggle('rotDown');
    }
    if (line.id === 'line2') {
      line.classList.toggle('hide');
    }
    if (line.id === 'line3') {
      line.classList.toggle('rotUp');
    }
  });
  translate();
};

const translate = () => {
  section.classList.toggle('showNav');
  nav.classList.toggle('navHiddenIndex');
};

// position elements inside a group of elements at same distance from each other from the left
const positionEls = (elementsGroup, amountPx) => {
  elementsGroup.forEach((el, index) => {
    const currentPosition = parseFloat(window.getComputedStyle(el).left);
    const left = index * amountPx;
    el.style.left = currentPosition + left + 'px';
  });
};

// eventListeners
lineContainer.addEventListener('click', handleLinesClick);

// init
positionEls(lis, 15);
