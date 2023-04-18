const box1 = document.querySelector('.box1');
const box2 = document.querySelector('.box2');
const box3 = document.querySelector('.box3');
const box4 = document.querySelector('.box4');
const title =document.querySelector('title')
const titled =document.querySelector('#titled')
const active = document.querySelector('.active');
active.classList.add("box1")    
console.log(titled.textContent);
title.innerHTML=titled.textContent
box1.addEventListener('click', e => {
    e.preventDefault();
    active.classList.add("box1")    
    active.classList.remove("box2")
    active.classList.remove("box3")
    active.classList.remove("box4")
    box1.classList.add("dashed")
    box2.classList.remove("dashed")
    box3.classList.remove("dashed")
    box3.classList.remove("dashed")
});
box2.addEventListener('click', e => {
    e.preventDefault();
    active.classList.add("box2")    
    active.classList.remove("box1")
    active.classList.remove("box3")
    active.classList.remove("box4")
    box1.classList.remove("dashed")
    box2.classList.add("dashed")
    box3.classList.remove("dashed")
    box4.classList.remove("dashed")
    
});
box3.addEventListener('click', e => {
    e.preventDefault();
    active.classList.add("box3")    
    active.classList.remove("box1")
    active.classList.remove("box2")
    active.classList.remove("box4")
    box1.classList.remove("dashed")
    box2.classList.remove("dashed")
    box3.classList.add("dashed")
    box4.classList.remove("dashed")
});
box4.addEventListener('click', e => {
    e.preventDefault();
    active.classList.add("box4")    
    active.classList.remove("box1")
    active.classList.remove("box2")
    active.classList.remove("box3")
    box1.classList.remove("dashed")
    box2.classList.remove("dashed")
    box3.classList.remove("dashed")
    box4.classList.add("dashed")
});

