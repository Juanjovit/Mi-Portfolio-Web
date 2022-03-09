var windoHeight = $(window).height();

console.log(windoHeight)



window.onscroll = function() {
    fade3();
    fade4();
    fade5();
    fade6();
    fade7();

  };

window.onload = function(){
    fade1();
    setTimeout(fade2,300);
}


if (windoHeight > 1100) {
    document.getElementById("queHago").className = "slideRight";
    document.getElementById("queHago").style.visibility = "visible";
    
} 
 


  
  
function fade1(){
    document.getElementById("pantallaInicio").className = "slideDown";
    document.getElementById("pantallaInicio").style.visibility = "visible";
}

function fade2(){
    document.getElementById("sobreMi").className = "slideUp";
    document.getElementById("sobreMi").style.visibility = "visible";   
}


function fade3() {
  if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
    document.getElementById("queHago").className = "slideLeft";
    document.getElementById("queHago").style.visibility = "visible";
  }
}

function fade4(){
    if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
        document.getElementById("tecnologias").className = "slideLeft";
        document.getElementById("tecnologias").style.visibility = "visible";
    }    
}

function fade5(){
    if (document.body.scrollTop > 700 || document.documentElement.scrollTop > 700) {
        document.getElementById("idiomas").className = "slideLeft";
        document.getElementById("idiomas").style.visibility = "visible";
    }    
}

function fade6(){
    if (document.body.scrollTop > 1400 || document.documentElement.scrollTop > 1400) {
        document.getElementById("miPortfolio").className = "slideUp2";
        document.getElementById("miPortfolio").style.visibility = "visible";
    }      
}

function fade7(){
    if (document.body.scrollTop > 2500 || document.documentElement.scrollTop > 2500) {
        document.getElementById("contactame").className = "slideUp";
        document.getElementById("contactame").style.visibility = "visible";
    }      
}
