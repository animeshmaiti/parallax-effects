let text = document.getElementById('text');
let bird1 = document.getElementById('bird1');
let bird2 = document.getElementById('bird2');
let btn = document.getElementById('btn');
let rocks = document.getElementById('rocks');
let forest = document.getElementById('forest');
let water = document.getElementById('water');
// let header = document.getElementById('header');

window.addEventListener('scroll', function(){
    let sc_value =window.scrollY;
    text.style.top = 50 + sc_value* -.5 + '%';
    bird1.style.top = sc_value* -1.5 + 'px';
    bird1.style.left = sc_value* 2 + 'px';
    bird2.style.top = sc_value* -1.5 + 'px';
    bird2.style.left = sc_value* -5 + 'px';
    btn.style.marginTop = sc_value* 1.5 + 'px';
    rocks.style.top = sc_value* -.12 + 'px';
    forest.style.top = sc_value* .25 + 'px';
    // header.style.top = sc_value* .5 + 'px';
    
})