const scroller = new LocomotiveScroll({
    el: document.querySelector('[data-scroll-container]'),
    smooth: true,
    direction: 'horizontal',
    getDirection: true,
    tablet: {
        direction: 'horizontal',
        smooth: true
    },
    smartphone: {
        direction: 'horizontal',
        smooth: true
    }
});

let scrolling = false;
const character = document.getElementById('char');

scroller.on('scroll', (e) => {
    if (e.delta.x > 0 && e.delta.x < e.limit.x) {

        character.classList.add('run');
        character.classList.remove('idle');
        window.clearTimeout(scrolling);
        if (e.direction === 'left') {
            character.classList.add('left');
        } else {
            character.classList.remove('left');
        }

        scrolling = window.setTimeout(() => {
            character.classList.add('idle');
            character.classList.remove('run');
        }, 500)
    }
})
