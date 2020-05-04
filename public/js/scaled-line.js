// Need data, line generator, x and y scale
const div = d3.select('body')
// const tileTopLeft = d3.select('#tileTopLeft')
const margin = { top: 200, right: 200, bottom: 200, left: 200 }
const width = window.innerWidth - margin.right - margin.left
const height = window.innerHeight - margin.top - margin.bottom
const svg = div.append('svg')
    .attr('height', height + margin.top + margin.bottom)
    .attr('width', width + margin.left + margin.right)
    .append('g')
        .attr('transform', `translate(${margin.left}, ${margin.bottom})`)

// Create Data
const data = Array(5).fill().map(() => d3.randomUniform(1)())
const curves = [
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
    'curveBasisClosed',
]

// Declare xScale
const xScale = d3.scaleLinear()
    .domain([0, data.length-1])
    .range([0, width])

// Declare yScale
const yScale = d3.scaleLinear()
    .domain(d3.extent(data))
    .range([height, 0])

// Declare Line generator
const line1 = d3.line()
    .x((d, i) => xScale(i))
    .y(d => yScale(d))
    .curve(d3[curves[1]])
    
// Declare line 2 generator
const line2 = d3.line()
    .x((d, i) => xScale(i))
    .y(d => yScale(d))
    .curve(d3[curves[9]])

// Declare line 3 generator
const line3 = d3.line()
    .x((d, i) => xScale(i))
    .y(d => yScale(d))
    .curve(d3[curves[7]])

// Append line 1
svg.append('path')
    .datum(data)
    .style('stroke', 'red')
    .style('stroke-width', 2)
    .style('fill', 'none')
    .attr('d', line1)

// Append line 2
svg.append('path')
    .datum(data)
    .style('stroke', 'gray')
    .style('stroke-width', 1)
    .style('fill', 'none')
    .attr('d', line2)

// Append line 3
svg.append('path')
    .datum(data)
    .style('stroke', 'blue')
    .style('stroke-width', 1)
    .style('fill', 'none')
    .attr('d', line3)