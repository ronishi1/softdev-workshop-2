var margin = {top: 20, right: 20, bottom: 30, left: 40},
    width = 960 - margin.left - margin.right,
    height = 500 - margin.top - margin.bottom;

var xValue = function(d) { return d.Calories;},
    x_scale = d3.scaleLinear().range([0, width]),
    x_map = function(d) { return x_scale(xValue(d));},
    x_axis = d3.axisBottom(x_scale);

var yValue = function(d) { return d["Fat"];},
    y_scale = d3.scaleLinear().range([height, 0]),
    y_map = function(d) { return y_scale(yValue(d));},
    y_axis = d3.axisLeft(y_scale);


var c_value = function(d) { return d.Manufacturer;},
    color = d3.scaleOrdinal(d3.schemeCategory10);


var svg = d3.select("body").append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom + 100)
  .append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");


d3.csv("cereal.csv").then(function(data) {
  data.forEach(function(d) {
    d.Calories = +d.Calories;
    d["Fat"] = +d["Fat"];
  });

  x_scale.domain([d3.min(data, xValue)-1, d3.max(data, xValue)+1]);
  y_scale.domain([d3.min(data, yValue)-1, d3.max(data, yValue)+1]);

  // x
  svg.append("g")
      .attr("class", "x axis")
      .style("fill","black")
      .attr("transform", "translate(30," + height + ")")
      .call(x_axis)
  svg.append("text")
      .attr("class", "x label")
      .attr("x", width / 2)
      .attr("y", height + 50)
      .attr("font-size","16px")
      .style("text-anchor", "middle")
      .text("Calories");

  // y
  svg.append("g")
      .attr("class", "y axis")
      .style("fill","black")
      .attr("transform", "translate(30,0)")
      .call(y_axis)
  svg.append("text")
      .attr("class", "x label")
      .attr("transform","rotate(-90)")
      .attr("x", -height/2)
      .attr("y", -15)
      .attr("font-size","16px")
      .style("text-anchor", "middle")
      .text("Fat");

  svg.selectAll(".dot")
      .data(data)
    .enter().append("circle")
      .attr("class", "dot")
      .attr("r", 3.5)
      .attr("cx", x_map)
      .attr("cy", y_map)
      .style("fill", function(d) { return color(cValue(d));})
});
