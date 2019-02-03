// sHaGGy1.0 -- Bill Ni, Ray Onishi
// SoftDev2 pd7
// K02 -- Connecting the Dots
// 2019-02-01

// e.preventDefault() prevents the default action of an event from occurring
//event.offsetX gives the horizontal distance between the padding edge of the event target
//event.offsetY gives the vertical distance between the padding edge of the event target

// -----------------------------  VAR INIT  -----------------------------

var cb = document.getElementById("clear");     //clear canvas button
var canvas = document.getElementById("playground");  //canvas
var ctx = canvas.getContext("2d");              //canvas context
var x = -1;
var y = -1;
// ----------------------------------------------------------------------

// ------------------------  CANVAS STYLE INIT  -------------------------
ctx.fillStyle = 'black'; //set brush color black
// ----------------------------------------------------------------------



// ----------------------------  FUNCTIONS  -----------------------------

// --------------------  CLEAR FUNCTION  --------------------
var ca = () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height); //clear canvas
    x = -1; // negative to indicate that the dot is going to be the first dot
    y = -1;
}
// ----------------------------------------------------------

// ---------------------  DRAW FUNCTION  --------------------
var dw = (e) => {

    if(x >= 0) { //checks if this is a dot drawn after the first
		ctx.beginPath(); //begin path records essentially a pd of a turtle
		ctx.moveTo(x,y); // move to the previous location
		ctx.lineTo(e.offsetX,e.offsetY); // move to the current location and draw a line
		ctx.stroke();
		ctx.beginPath();
		ctx.arc(e.offsetX, e.offsetY, 15, 0, 2 * Math.PI, false); // creating a dot
		ctx.fillStyle = '#0000ff'; // change the fill style to blue
		ctx.fill();
		ctx.stroke();
		ctx.beginPath();
		ctx.arc(x, y, 15, 0, 2 * Math.PI, false); // drawing a dot over the previous dot to get rid of line overlapping the dot
		ctx.fillStyle = '#0000ff';
		ctx.fill();
    }
    else{ // if it is the first dot being drawn, only draws the dot
		ctx.beginPath();
		ctx.arc(e.offsetX, e.offsetY, 15, 0, 2 * Math.PI, false);
		ctx.fillStyle = '#0000ff';
		ctx.fill();
		ctx.stroke();
    }
    x = e.offsetX; // recording x coordinate of dot for when drawing the next one
    y = e.offsetY; // same as above but with y coordinate
}
// ----------------------------------------------------------

// ------------------------  EVENTLISTENER INIT  ------------------------
canvas.addEventListener("click",dw); //canvas draw eventlistener add
cb.addEventListener('click',ca); // clear eventlistener add
// ----------------------------------------------------------------------
