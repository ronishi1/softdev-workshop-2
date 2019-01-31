var c = document.getElementById("slate");
var ctx = c.getContext("2d");

// Button to clear the canvas
var clearCanvas = function(){
  ctx.clearRect(0,0,c.width,c.height);
}
var clearButton = document.getElementById("clear");
clearButton.addEventListener('click',clearCanvas)

// Getting the offset for the canvas
var canvasI = c.getBoundingClientRect();
var offsetX = canvasI.x;
var offsetY = canvasI.y;

// Toggling between cirlce and rectangle mode
var drawRect = true;
var toggleButton = document.getElementById("toggle");
var toggle = function(){
  drawRect = !drawRect;
  if (drawRect) {
    toggleButton.innerHTML = "Currently in: Rectangle Mode!!!";
  }
  else{
    toggleButton.innerHTML = "Currently in: Dot Mode!!!";
  }
}
toggleButton.addEventListener('click',toggle)

// Function to draw a circle or rectangle based on the toggle
var draw = function(e) {
  var x = e.pageX - offsetX;
  var y = e.pageY - offsetY;
  if(drawRect){
    ctx.fillStyle = "#000000"
    ctx.fillRect(x,y,10,10);
    console.log(e);
  }
  else{
    ctx.fillStyle = "#0000FF";
    ctx.beginPath();
    ctx.ellipse(x,y,5,5,Math.PI / 4, 0, 2 * Math.PI);
    ctx.fill();
  }

}

c.addEventListener('click',draw)
