const body = document.querySelector('body')
const text= document.querySelectorAll('h1,.links a, .text button,p')
const theme=document.querySelector('.theme');
var color;
var darktheme =false;

theme.addEventListener('click',(e)=>{
    if (darktheme==false) {
        bgcolor="#222831"   
    // bgcolor=null;
    theme.style.backgroundImage = "url('moon.png')";
    body.style.background = bgcolor;
    for (let i = 0; i < text.length; i++) {
        text[i].style.color="white";    
    }
    darktheme=true;
    
    } else {
        theme.style.backgroundImage="url('pngwing.com.png')";
        body.style.background='';
        for (let i = 0; i < text.length; i++) {
            text[i].style.color="";    
        }
        darktheme=false;
    }
    
})