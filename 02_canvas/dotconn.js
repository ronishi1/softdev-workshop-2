// sHaGGy1.0 -- Bill Ni, Ray Onishi
// SoftDev2 pd7
// K02 -- Connecting the Dots
// 2019-02-01

// e.preventDefault() prevents the default action of an event from occurring

// -----------------------------  VAR INIT  -----------------------------

var cb = document.getElementById("clear");     //clear canvas button
var canvas = document.getElementById("playground");  //canvas
var ctx = canvas.getContext("2d");              //canvas context
var x = -1;
var y = -1;
// ----------------------------------------------------------------------


// ------------------------  EVENTLISTENER INIT  ------------------------
cb.addEventListener("click", ca); //clear button eventlistener add

//event.offsetX gives the horizontal distance between the padding edge of the event target
//event.offsetY gives the vertical distance between the padding edge of the event target
// ----------------------------------------------------------------------


// ------------------------  CANVAS STYLE INIT  -------------------------
ctx.fillStyle = 'black'; //set brush color black
// ----------------------------------------------------------------------



// ----------------------------  FUNCTIONS  -----------------------------

// --------------------  CLEAR FUNCTION  --------------------
var ca = () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height); //clear canvas
    x = -1;
    y = -1;
}
// ----------------------------------------------------------

// ---------------------  DRAW FUNCTION  --------------------
var dw = (e) => {
    if(x >= 0) {
	ctx.beginPath(); //begin path records essentially a pd of a turtle
	ctx.moveTo(x,y);
	ctx.lineTo(e.offsetX,e.offsetY);
	ctx.stroke();
	ctx.beginPath();
	ctx.arc(e.offsetX, e.offsetY, 5, 0, 2 * Math.PI, false);
	ctx.fill();
	ctx.stroke();
    }
    else{
	ctx.beginPath();
	ctx.arc(e.offsetX, e.offsetY, 5, 0, 2 * Math.PI, false);
	ctx.fill();
	ctx.stroke();
    }
    x = e.offsetX;
    y = e.offsetY;
	
}
// ----------------------------------------------------------

// ----------------------------------------------------------------------
canvas.addEventListener("click",dw); //canvas draw eventlistener add
cb.addEventListener('click',ca);
