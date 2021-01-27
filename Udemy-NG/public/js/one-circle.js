/*
1. SVG
2. Data Coordinates
3. Circle Coordinates
*/

// Declare SVG
const svg = d3.select('body')
    .attr('margin', 0)
    .append('svg')
        .attr('width', window.innerWidth)
        .attr('height', window.innerHeight)


// Append Circle 
const circle = svg.append('circle')
    .attr('cx', window.innerWidth/2)
    .attr('cy', window.innerHeight/2)
    .attr('r', 100)
    .style('fill', 'red')
    .style('stroke', 'red')
    .style('stroke-width', 5)

// Add event listener
circle.on('click', function (d, i) {
    d3.select(this)
    .transition().duration(1000)
    .attr('r', 50)
})

// Add Mouseover event
circle.on('mouseover', function (d, i) {
    d3.select(this)
    .transition().duration(250)
    .style('fill', 'floralwhite')

})

// Add Mouseout event
circle.on('mouseout', function (d, i) {
    d3.select(this)
    .transition().duration(250)
    .style('fill', 'red')
    
})