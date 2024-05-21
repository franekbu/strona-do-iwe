const switchButton = document.querySelector('.light__mode__button');
const body = document.querySelector('body');
let theme=localStorage.getItem('theme')

switchButton.addEventListener('click',()=>{
    if (!body.classList.contains('night')) {
        body.classList.add('night');
        document.querySelector('.section__landing--img--orange').classList.add('hidden');
        document.querySelector('.section__landing--img--purple').classList.remove('hidden');
        theme = 'night';
    } else {
        body.classList.remove('night');
        document.querySelector('.section__landing--img--purple').classList.add('hidden');
        document.querySelector('.section__landing--img--orange').classList.remove('hidden');
        theme = 'light';
    }
    localStorage.setItem('theme',theme)
})

if (theme === 'night') {
    document.querySelector('body').classList.add('night');
    document.querySelector('.section__landing--img--orange').classList.add('hidden');
	document.querySelector('.section__landing--img--purple').classList.remove('hidden');
}

if (theme === 'light') {
    document.querySelector('body').classList.remove('night');
    document.querySelector('.section__landing--img--purple').classList.add('hidden');
    document.querySelector('.section__landing--img--orange').classList.remove('hidden');
}





const navbar = document.querySelector('header');
let lastScrolllTop = 0;

window.addEventListener('scroll', ()=> {
    var {scrollY} = window;
    if (scrollY > lastScrolllTop) {
        navbar.classList.remove('visible');
    } else if (scrollY < lastScrolllTop) {
        navbar.classList.add('visible');
    }
    lastScrolllTop = scrollY <= 0 ? 0 : scrollY;
}, 
{passive: true}
)
