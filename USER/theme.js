const body = document.querySelector('body')
const text= document.querySelectorAll('h1,.links a, .text button,p,footer li a')
const theme=document.querySelector('.theme');
const footer =  document.querySelector('footer')

var color;
var darktheme =false;

theme.addEventListener('click',(e)=>{
    if (darktheme==false) {
        bgcolor="#222831"   
        // bgcolor=null;
        theme.style.backgroundImage = "url('img/moon.png')";
        footer.style.background.color = 'rgb(31, 28, 28)';
        body.style.background = bgcolor;
        for (let i = 0; i < text.length; i++) {
            text[i].style.color="white";    
        }
        darktheme=true;
        
    } else {
        body.style.background='';
        theme.style.backgroundImage="url('img/pngwing.com.png')";
        for (let i = 0; i < text.length; i++) {
            text[i].style.color="";    
        }
        footer.style.background.color = '';

        darktheme=false;
    }
    
})