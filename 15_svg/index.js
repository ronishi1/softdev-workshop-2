// https://www.mathsisfun.com/data/scatter-xy-plots.html data

var temps = [14.2,16.4,11.9,15.2,18.5,22.1,19.4,25.1,23.4,18.1,22.6,17.2];
var sales = [215,325,185,332,406,522,412,614,544,421,445,408];

var width = 1000;
var height = 1000;

var chart = d3.select(".chart").attr("width", width).attr("height", height)

// a tad broken will need to come back later
// not too sure how scales and stuff work
// y axis is a bit wrong but ok for now,
// x axis is very broken need to return later
var i = 0;
while (i < temps.length){
  var c = chart.append("circle")
  .attr("cx", (temps[i]-8) * (width+200)/d3.max(temps))
  .attr("cy", d3.max(sales)+175-sales[i])
  .attr("r", 5)
  .attr("fill","red");
  i += 1;
}

var x_scale = d3.scaleLinear()
  .domain([d3.min(temps)-1,d3.max(temps)+1])
  .range([d3.min(temps)-1, width]);

var y_scale = d3.scaleLinear()
  .domain([0,d3.max(sales)+1])
  .range([(d3.max(sales))+100,0]);

var x_axis = d3.axisBottom()
  .scale(x_scale)

var y_axis = d3.axisLeft()
  .scale(y_scale)

chart.append('g')
  .attr("transform","translate (100,815)")
  .call(x_axis)

chart.append('g')
  .attr("transform","translate (100,100)")
  .call(y_axis)

chart.append("text")
  .attr("x",width / 2)
  .attr("y", 0)
  .attr("dy","2em")
  .text("Ice Cream Sales Over Temperature");

chart.append("text")
  .attr("transform","rotate(-90)")
  .attr("x",-500)
  .attr("y",10)
  .attr("dy","1em")
  .text("Sales ($)");

chart.append("text")
  .attr("x",width/2)
  .attr("y",height-150)
  .attr("dy","2em")
  .text("Temperature (C°)");
