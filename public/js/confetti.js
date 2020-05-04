/*
1. SVG
2. Data
3. cx, cy, r
*/

const width = window.innerWidth
const height = window.innerHeight
const radius = 20

const svg = d3.select('body')
    .attr('margin', 0)
    .append('svg')
    .style('width', width)
    .style('height', height)
    .style('background-color', "floralwhite")


const data = Array(120).fill().map(_ => {
    return {
        'cx': Math.round(Math.random() * width),
        'cy': Math.round(Math.random() * height)
    }
})

const colorScale = d3.scaleOrdinal(d3.schemeReds[3]);
const circle = svg.selectAll('circle')
    .data(data).enter()
    .append('circle')
    .attr('cx', d => d.cx)
    .attr('cy', -10)
    .style('stroke', 'red')
    // .call('click',)

// On click has to happen before the circle.transition
circle.on('click', function (d, i) {
    d3.select(this)
        .transition().duration(250)
        .style('fill', 'blue')
})

circle.transition().duration(10000).delay((d, i) => i).ease(d3.easeSin)
    .attr('cy', d => d.cy)
    .attr('r', (d, i) => {
        return i % 2 === 0 ? 10 : 5
})
    .style('fill', 'none')
    .style('stroke', (d, i) => colorScale(i))
    .style('stroke-width', 3)

