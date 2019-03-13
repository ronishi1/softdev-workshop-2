var pic = document.getElementById("vimage");
var clear_but = document.getElementById('but_clear');

var drawNew = true;
var clear = () => {
  pic.innerHTML=''

}

clear_but.addEventListener('click',clear);

var draw = (e) => {
  event.preventDefault();
  x = e.offsetX;
  y = e.offsetY;
  var c = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
  c.addEventListener("click",function(e){
    if(c.getAttribute("fill") == "red") {
      c.setAttribute("fill","green");
    }
    else {
      c.setAttribute("fill","red");
      c.setAttribute("cx",Math.random()*500);
      c.setAttribute("cy",Math.random()*500);
    }
    // Prevents drrawing a new circle on top of an existing one
    drawNew = false;
  }
  );
  if(drawNew){
    c.setAttribute("cx",x);
    c.setAttribute("cy", y);
    c.setAttribute("r", 20);
    c.setAttribute("fill", "red");
    c.setAttribute("stroke", "black");
    pic.appendChild(c);
  }
  drawNew=true;
}


pic.addEventListener('click',draw)
