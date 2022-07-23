var forEach=function(t,o,r){if("[object Object]"===Object.prototype.toString.call(t))for(var c in t)Object.prototype.hasOwnProperty.call(t,c)&&o.call(r,t[c],c,t);else for(var e=0,l=t.length;l>e;e++)o.call(r,t[e],e,t)};
      
          var hamburgers = document.querySelectorAll(".hamburger");
          if (hamburgers.length > 0) {
            forEach(hamburgers, function(hamburger) {
              hamburger.addEventListener("click", function() {
                this.classList.toggle("is-active");
              }, false);
            });
          }


console.log(document.getElementById("barra").children[0])

document.getElementById("hamburguesa").onclick = function(){
  
  if (document.getElementById("barra").className == "desplegarBarra") {
        document.getElementById("barra").className = "esconderBarra";

          document.getElementById("barra").style.transition = "0.8s" 
          document.getElementById("barra").style.visibility = "hidden"     
  } 
  
  else {
        document.getElementById("barra").className = "desplegarBarra";
        document.getElementById("barra").style.visibility = "visible"
  } 
}



