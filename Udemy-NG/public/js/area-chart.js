
// Create Div, Margin, Width, Height, Data
const div = d3.select('body')
const margin = { top: 200, right: 200, bottom: 200, left: 200 }
const width = window.innerWidth - margin.right - margin.left
const height = window.innerHeight - margin.top - margin.bottom
const data = Array(25).fill().map(() => d3.randomUniform(10) ())

// Declare SVG
const svg = div.append('svg')
    .attr('width', width + margin.left + margin.right)
    .attr('height', height + margin.top + margin.bottom)
    .style('background-color', 'floralwhite')
    .append('g')
        .attr('transform', `translate(${margin.left} ${margin.bottom})`)

// Define Curves Array
const curves =[
    'curveLinear',
    'curveBasis',
    'curveBundle',
    'curveCardinal',
    'curveCatmullRom',
    'curveMonotoneX',
    'curveMonotoneY',
    'curveNatural',
    'curveStep',
    'curveStepAfter',
    'curveStepBefore',
    'curveBasisClosed'
]

// Define x-Scale
const xScale = d3.scaleLinear()
    .domain([0, data.length -1])
    .range([0, width])

// Define x-Scale
const yScale = d3.scaleLinear()
    .domain([0, d3.max(data)])
    .range([height, 0])

// Define area
const area = d3.area()
    .x((d, i) => xScale(i))
    .y0(yScale(10))
    .y1(d => yScale(d))
    .curve(d3[curves[8]])

// Append SVG xAxis
const xAxis = svg.append('g')
    .attr('class', 'x axis')
    .attr('transform', `translate(0, ${height})`)
    .call(d3.axisBottom(xScale))

// Append SVG yAxis
const yAxis = svg.append('g')
    .attr('class', 'y axis')
    .call(d3.axisLeft(yScale))

// Line Generator
const line = svg.append('path')
    .datum(data)
    .attr('class', 'data-line')
    .style('stroke', 'red')
    .style('stroke-width', 1)
    .style('fill', 'red')
    .style('fill-opacity', 0.1)
    .attr('d', area)

// Circles Falling from Top of Screen
const cirlce = svg.selectAll('.circle')
    .data(data)
    .enter().append('circle')
    .attr('class', 'circle')
    .attr('cx', (d, i) => xScale(i))
    .attr('cy', -50)
    .attr('r', 5)
    .style('fill', 'red')
    .style('fill-opacity', 0.6)
    .style('stroke', 'white')
    .style('stroke-width', 2)
    .transition().duration(800)
    .attr('r', 5)
    .delay((d,i) => i * 80)
    .attr('cy', d => yScale(d))






