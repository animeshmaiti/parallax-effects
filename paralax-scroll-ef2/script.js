let stars = document.getElementById('stars');
let moon = document.getElementById('moon');
let mountains_behind = document.getElementById('mountains_behind');
let mountains_front = document.getElementById('mountains_front');
let text = document.getElementById('text');
let btn = document.getElementById('btn');
let header = document.querySelector('header');

window.addEventListener('scroll', function(){
    let sc_value = window.scrollY;
    stars.style.left = sc_value* 0.25 + 'px';
    moon.style.top= sc_value* 1.05 + 'px';
    mountains_behind.style.top = sc_value*0.5 + 'px';
    mountains_front.style.top = sc_value*0 + 'px';
    text.style.marginRight = sc_value*4 + 'px';
    text.style.marginTop = sc_value*1.5 + 'px';
    btn.style.marginTop = sc_value*1.5 + 'px';
    header.style.top=sc_value*0.5 + 'px';
})
