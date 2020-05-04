const svg = d3.select('body').append('svg').attr('width', 500).attr('height', 500)
svg.append('line')
    .attr('x1', 100)
    .attr('y1', 100)
    .attr('x2', 500)
    .attr('y2', 100)
    .style('stroke', 'blue')
    .style('stroke-width', 3)

svg.append('circle')
    .attr('cx', 200)
    .attr('cy', 200)
    .attr('r', 50)
    .style('fill', 'purple')