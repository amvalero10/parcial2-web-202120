import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';

// const Chart = ({ width = 600, height = 600, data }) => {

const Chart = () => {

  const barChart = useRef();

  useEffect(() => {

      // set the dimensions and margins of the graph
const margin = {top: 30, right: 30, bottom: 180, left: 60},
width = 699 - margin.left - margin.right,
height = 600- margin.top - margin.bottom;


    // const svg = d3.select(barChart.current)
    const svg = d3.select("#my_dataviz")
    .append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
    .append("g")
    .attr("transform", `translate(${margin.left},${margin.top})`);
    
    d3.json("/api/products/").then( function(data) {
  
      // X axis
      const x = d3.scaleBand()
      .range([ 0, width ])
      .domain(data.map(d => d.name))
      .padding(0.2);
      svg.append("g")
      .attr("transform", `translate(0, ${height})`)
      .call(d3.axisBottom(x))
      .selectAll("text")
      .attr("transform", "translate(-10,0)rotate(-45)")
      .style("text-anchor", "end");
      
      // Add Y axis
      const y = d3.scaleLinear()
      .domain([0, 500])
      .range([ height, 0]);
      svg.append("g")
      .call(d3.axisLeft(y));
      
      // Bars
      svg.selectAll("mybar")
      .data(data)
      .join("rect")
      .attr("x", d => x(d.name))
      .attr("y", d => y(d.stock))
      .attr("width", x.bandwidth())
      .attr("height", d => height - y(d.stock))
      .attr("fill", "#69b3a2")
      
      })
      


    // Continue with implementation. Don't forget the tooltip
  });

  return (
    <div id='chartArea'>
      {/* <svg ref={barChart}></svg> */}
      
      <div id="my_dataviz"></div> 

    </div>
  );
};

export default Chart