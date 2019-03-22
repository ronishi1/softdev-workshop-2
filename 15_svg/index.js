// **********************************
// DOESN'T WORK COME BACK TO IT LATER
// **********************************
var testx = [0,1,2,3,4,5];
var testy= [0,2,4,6,8,10];

// d3.csv("cars.csv").then(function(data) {
var width = 500;
var height = 500;

var chart = d3.select("body").append("svg")

var x = d3.scaleLinear()
    .domain([d3.min(testx) - 1, d3.max(testx) + 1])
    .range([0, width]);

var y = d3.scaleLinear()
    .domain([d3.min(testy) - 1, d3.max(testy  ) + 1])
    .range([0, height]);

var chart = d3.select(".chart").attr("width", width).attr("height", height);
