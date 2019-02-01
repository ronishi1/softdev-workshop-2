// sHaGGy1.0 -- Bill Ni, Ray Onishi
// SoftDev2 pd7
// K01 -- ...and I want to Paint It Better
// 2019-01-31

// e.preventDefault() prevents the default action of an event from occurring

// -----------------------------  VAR INIT  -----------------------------
var m = true; //brush mode -- true is rectangle, false is dot

var sb = document.getElementById("switchm");    //switch brush button
var cb = document.getElementById("clearb");     //clear canvas button
var canvas = document.getElementById("slate");  //canvas
var ctx = canvas.getContext("2d");              //canvas context
// ----------------------------------------------------------------------


// ------------------------  EVENTLISTENER INIT  ------------------------
sb.addEventListener("click", function(){sw()}); //switch button eventlistener add
cb.addEventListener("click", function(){ca()}); //clear button eventlistener add

//event.offsetX gives the horizontal distance between the padding edge of the event target
//event.offsetY gives the vertical distance between the padding edge of the event target
canvas.addEventListener("click", function(event){dw(event.offsetX, event.offsetY)}); //canvas draw eventlistener add
// ----------------------------------------------------------------------


// ------------------------  CANVAS STYLE INIT  -------------------------
ctx.fillStyle = 'black'; //set brush color black
// ----------------------------------------------------------------------



// ----------------------------  FUNCTIONS  -----------------------------

// --------------------  CLEAR FUNCTION  --------------------
var ca = () => {
  ctx.clearRect(0, 0, canvas.width, canvas.height); //clear canvas
}
// ----------------------------------------------------------

// --------------------  TOGGLE FUNCTION  -------------------
var sw = () => {
  m = !m; //change from rect to dot and dot to rect
}
// ----------------------------------------------------------

// ---------------------  DRAW FUNCTION  --------------------
var dw = (x, y) => {
	if(m){
		ctx.fillRect(x, y, 10, 10); //draw rect
	}else{
    //draw dot
  	ctx.beginPath(); //begin path records essentially a pd of a turtle
  	ctx.arc(x, y, 5, 0, 2 * Math.PI, false);
  	ctx.fill();
  	ctx.stroke();
	}
}
// ----------------------------------------------------------

// ----------------------------------------------------------------------
