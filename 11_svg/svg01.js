// Ray Onishi
// SoftDev pd7
// K11 -- Ask Circles [Change || Die] …While On The Go
// 2019-03-17
var pic = document.getElementById("vimage");
var clear_but = document.getElementById('but_clear');
var move_but = document.getElementById('but_move');
var secret_but = document.getElementById('but_secret');

var drawNew = true;
var moving = false;
var requestID;

var clear = () => {
  pic.innerHTML=''
}

clear_but.addEventListener('click',clear);

var draw = (e) => {
  event.preventDefault();
  x = e.offsetX;
  y = e.offsetY;
  var c = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
  c.addEventListener("click",function(){
    if(c.getAttribute("fill") == "red") {
      c.setAttribute("fill","green");
    }
    else {
      c.setAttribute("fill","red");
      c.setAttribute("cx",Math.random()*500);
      c.setAttribute("cy",Math.random()*500);
    }
    // If the user is clicking on the circle, doesn't allow drawing of a circle on top
    drawNew = false;
  });
  // If the user isn't clicking on a circle, make a new circle where they are clicking
  if(drawNew){
    c.setAttribute("cx",x);
    c.setAttribute("cy", y);
    c.setAttribute("vx",1);
    c.setAttribute("vy",1);
    c.setAttribute("r", 20);
    c.setAttribute("fill", "red");
    c.setAttribute("stroke", "black");
    pic.appendChild(c);
  }
  drawNew=true;
}

pic.addEventListener('click',draw);

var move = () => {
  window.cancelAnimationFrame(requestID);
  for(var i = 0; i < pic.children.length; i++){
    c = pic.children[i];

    var xVel = Number(c.getAttribute("vx"));
    var yVel = Number(c.getAttribute("vy"));

    c.setAttribute("cx", Number(c.getAttribute("cx")) + xVel);
    c.setAttribute("cy", Number(c.getAttribute("cy")) + yVel);

    var xCord = Number(c.getAttribute("cx"));
    var yCord = Number(c.getAttribute("cy"));

    var radius = Number(c.getAttribute("r"))
    if(xCord - radius <= 0 || xCord + radius >= 500 ) {
      c.setAttribute("vx", xVel * -1);
    }
    if(yCord - radius <= 0  || yCord + radius >= 500 ) {
      c.setAttribute("vy", yVel * -1)
    }
  }
  requestID = window.requestAnimationFrame(move);
}

move_but.addEventListener('click',function(){
  if(!moving){
    moving = true;
    move();
  }
});

var secret = () => {
  for(var i = 0; i < pic.children.length; i++){
    c = pic.children[i];
    c.setAttribute("fill","yellow");
    c.setAttribute("vx", Number(c.getAttribute("vx")) * 2);
    c.setAttribute("vy", Number(c.getAttribute("vy")) * 2);
  }
}

secret_but.addEventListener('click',secret);
