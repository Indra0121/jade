
const overlayCon = document.getElementById('overlayCon');
const container = document.getElementById('container');
const btn1=document.querySelector('.btnl');
const btn2=document.querySelector('.btnv');

console.log('helllo');
btn1.addEventListener('click',e=>{
    console.log('heyY') 
    e.preventDefault();
    container.classList.add("right-panel-active");
})
btn2.addEventListener('click',e=>{
    e.preventDefault();
    console.log('heyay') 
    container.classList.remove("right-panel-active");
})


// const overlayCon = document.getElementById('overlayCon');
// const overlayBtn = document.getElementById('overlayBtn');
// const container = document.getElementById('container');
// overlayBtn.addEventListener('click',()=>{
//     main.classList.add("right-panel-active");
// });
