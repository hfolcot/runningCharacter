const scroller = new LocomotiveScroll({
    el: document.querySelector('[data-scroll-container]'),
    smooth: true,
    direction: 'horizontal',
    tablet: {
        smooth: true
    },
    smartphone: {
        smooth: true
    }
});

scroller.on('scroll', (e) => {
    console.log(e);
})
const character = document.getElementById('char');
const scrollContainer = document.querySelector('[data-scroll-container]');

let scrolling = false;
let scrollDirection = 'd';

document.addEventListener('wheel', function (e) {
    character.classList.add('run');
    character.classList.remove('idle');
    window.clearTimeout(scrolling);
    if (e.deltaY <= 0) {
        scrollDirection = 'u';
    } else {
        scrollDirection = 'd';
    }
    if (scrollDirection === 'u') {
        character.classList.add('left');
    } else {
        character.classList.remove('left');
    }

    scrolling = window.setTimeout(() => {
        character.classList.add('idle');
        character.classList.remove('run');
    }, 500)
})
