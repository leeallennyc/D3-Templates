/*
1. SVG
2. Data Coordinates
3. Line Generator
*/

// Declare Width and Height
const width = window.innerWidth
const height = window.innerHeight 


// Declare SVG
const svg = d3.select('body')
    .attr('margin', 0)
    .append('svg')
        .attr('width', width)
        .attr('height', height)
        .style('background-color', 'navy')

//Data Coordinates
const coordinates = [
    {x: width / 4, y: height / 2 }, 
    {x: (width / 4) * 3, y: height / 2 }
]

// Line Generator
const line = d3.line()
                .x(d => d.x)
                .y(d => d.y)


// Drawing on to SVG
const path = svg.append('path')
    // using datum will create a smooth path
    .datum(coordinates)
    .style('fill', 'none')
    .style('stroke', 'red')
    .style('stroke-width', 3)
    .attr('d', line)
