d3.json('/data/patents.json').then(data => {
    const patents = data.countryPatents
    
    const div = d3.select('body')
    const margin = { top: 200, right: 200, bottom: 200, left: 200 }
    const width = window.innerWidth - margin.left - margin.right
    const height = window.innerHeight - margin.top - margin.bottom
    const svg = div.append('svg')
        .attr('width', width + margin.left + margin.right)
        .attr('height', height + margin.top + margin.bottom)
        .style('background-color', 'black')
        .append('g')
            .attr('transform', `translate(${margin.left}, ${margin.top})`)

    const xScale = d3.scaleBand()
        .domain(patents.map(d => d.country))
        .rangeRound([0, width])
        .padding(0.3)

    const yScale = d3.scaleLinear()
        .domain([0, d3.max(patents.map(d => d.patent))])
        .rangeRound([height, 0])

    const xAxis = svg.append('g')
        .attr('class', 'x axis')
        .attr('transform', `translate(0, ${height})`)
        .call(d3.axisBottom(xScale))
        .append('text')
        .attr('x', width / 2)
        .attr('y', 30)
        .attr('dy', '1em')
        .style('text-anchor', 'middle')
        .style('fill', 'gray')
        .text('Countries')

    const yAxis = svg.append('g')
        .attr('class', 'y axis')
        .call(d3.axisLeft(yScale))
        .append('text')
        .style('text-anchor', 'end')
        .style('fill', 'gray')
        .attr('y', 6)
        .attr('dy', '0.75em')
        .attr('transform', 'rotate(-90)')
        .text('Patents per Country')

    const bars = svg.selectAll('.bar')
        .data(patents)
        .enter().append('rect')
        .attr('class', 'bar')
        .attr('x', d => xScale(d.country))
        .attr('y', height)
        .attr('width', xScale.bandwidth())
        .on('mouseover', function (d, i){
            d3.select(this)
            .transition().duration(100)
            .style('fill-opacity', 0.5)
        })
        .on('mouseout', function (d, i){
            d3.select(this)
            .transition().duration(100)
            .style('fill-opacity', 0.8)
        })
        .style('fill', 'red')
        .style('fill-opacity', 0.8)
        .style('stroke', 'red')
        .style('stroke-width', 1) 
        .transition().duration(1000).delay((d,i) => i * 200)
        .attr('y', d => yScale(d.patent))
        .attr('height', d => height - yScale(d.patent))

    const barTitle = svg.selectAll('.title')
        .data(patents)
        .enter().append('text')
        .attr('class', 'title')
        .attr('x', d => xScale(d.country))
        .attr('dx', xScale.bandwidth() /2)
        .attr('y', d => yScale(d.patent))
        .attr('dy', '-0.6em')
        .style('fill', 'red')
        .style('text-anchor', 'middle')
        .style('opacity', 0)
        .text(d => d.patent)
        .transition().duration(3500).delay((d, i) => i * 200)
        .style('opacity', 1) 

    const chartTitle = svg.append('text')
        .attr('y', -50)
        .attr('x', width / 2)
        .style('text-anchor', 'middle')
        .style('fill', 'lightgray')
        .text('Patents by Country')

})




