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
        smooth: true,
        gestureDirection: 'both',
    }
});

let scrolling = false;
const character = document.getElementById('char');

scroller.on('scroll', (e) => {
    //console.log(e);
    if (e.scroll.x > 0.5 && e.delta.x < e.limit.x) {
        document.querySelector('.msh-container').classList.add('fadeOut');
        window.clearTimeout(scrolling);
        if (e.direction === 'left') {
            character.classList.add('left');
        } else {
            character.classList.remove('left');
        }
        character.classList.add('run');
        character.classList.remove('idle');

        scrolling = window.setTimeout(() => {
            character.classList.add('idle');
            character.classList.remove('run');
        }, 250)
    }
})