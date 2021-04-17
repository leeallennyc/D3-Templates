d3.json('/data/utilities.json').then(data => {
    const years = data.utilitiesByYear;
    
    const div = d3.select('body')
    const margin = { top: 100, right: 200, bottom: 100, left: 200 }
    const width = window.innerWidth - margin.left - margin.right
    const height = window.innerHeight - margin.top - margin.bottom
    const svg = div.append('svg')
        .attr('width', width + margin.left + margin.right)
        .attr('height', height + margin.top + margin.bottom)
        .style('background-color', 'black')
        .append('g')
            .attr('transform', `translate(${margin.left}, ${margin.top})`)

    const xScale = d3.scaleBand()
        .domain(years.map(d => d.year))
        .rangeRound([0, width])
        .padding(0.1)

    const yScale = d3.scaleLinear()
        .domain([0, d3.max(years.map(d => d.number))])
        .rangeRound([height, 0])

    const xAxis = svg.append('g')
        .attr('class', 'x axis')
        .attr('transform', `translate(0, ${height})`)
        .call(d3.axisBottom(xScale))
        .append('text')
        .attr('x', width/2)
        .attr('y', 50)
        .attr('dy', '0.75em')
        .style('text-anchor', 'middle')
        .text('Years 2000 - 2019')

    const applications = svg.append('g')
        .attr('transform', `translate(0, ${height})`)
        .append('rect')
        .attr('class', 'applications')
        .attr('x', 0)
        .attr('y', 50)

    const applicationsText = svg.append('g')
        .attr('class', 'applicationsText')
        .attr('transform', `translate(0, ${height})`)
        .append('text')
        .attr('x', 50)
        .attr('y', 50)
        .attr('dy', '0.75em')
        .style('text-anchor', 'start')
        .text('PATENT APPLICATIONS')

    const grants = svg.append('g')
        .append('rect')
        .attr('transform', `translate(0, ${height})`)
        .attr('class', 'grants')
        .attr('x', 0)
        .attr('y', 75)

    const grantsText = svg.append('g')
        .attr('class', 'grantsText')
        .append('text')
        .attr('transform', `translate(0, ${height})`)
        .attr('x', 50)
        .attr('y', 75)
        .attr('dy', '0.75em')
        .style('text-anchor', 'start')
        .text('GRANTED PATENTS')
        
    
    const yAxis = svg.append('g')
        .attr('class', 'y axis')
        .call(d3.axisLeft(yScale))
        .append('text')
        .style('text-anchor', 'end')
        .attr('y', -100)
        .attr('dy', '0.75em')
        .attr('transform', 'rotate(-90)')
        .text('# of Utility Applications Vs. Patent Grants in the U.S.')

    const bars = svg.selectAll('.bar')
        .data(years)
        .enter().append('rect')
        .attr('class', 'bar')
        .attr('x', d => xScale(d.year))
        .attr('y', height)
        .attr('width', xScale.bandwidth() * .8)
        .on('mouseover', function (d, i){
            d3.select(this)
            .transition().duration(5)
            .style('fill-opacity', 0.5)
        })
        .on('mouseout', function (d, i){
            d3.select(this)
            .transition().duration(5)
            .style('fill-opacity', 1)
        })
        .style('fill', 'orange')
        .style('fill-opacity', 1)
        .transition().duration(100).delay((d,i) => i * 30)
        .attr('y', d => yScale(d.number))
        .attr('height', d => height - yScale(d.number))

    const barTitle = svg.selectAll('.title')
        .data(years)
        .enter().append('text')
        .style("text-anchor", "middle")
        .attr('class', 'title')
        .attr('x', d => xScale(d.year))
        .attr('dx', xScale.bandwidth() /2)
        .attr('y', d => yScale(d.number))
        .attr('dy', '-0.6em')
        .style('fill', 'floralwhite')
        .style('opacity', 0)
        .text(d => d.number)
        .transition().duration(100).delay((d, i) => i * 30)
        .style('opacity', 1) 

    d3.json('/data/grants.json').then(data => {
        const grants = data.grantsByYear;


        const bars2 = svg.selectAll('.bar2')
            .data(grants)
            .enter().append('rect')
            .attr('class', 'bar2')
            .attr('x', d => xScale(d.year))
            .attr('y', height)
            .attr('width', xScale.bandwidth() * .4)
            .on('mouseover', function (d, i){
                d3.select(this)
                .transition().duration(5)
                .style('fill-opacity', 0.5)
            })
            .on('mouseout', function (d, i){
                d3.select(this)
                .transition().duration(100)
                .style('fill-opacity', 1)
            })
            .style('fill', 'blue')
            .style('fill-opacity', 1)
            .transition().duration(200).delay((d,i) => i * 50)
            .attr('y', d => yScale(d.number))
            .attr('height', d => height - yScale(d.number))
    
        const barTitle2 = svg.selectAll('.title2')
            .data(grants)
            .enter().append('text')
            .style("text-anchor", "middle")
            .attr('class', 'title2')
            .attr('x', d => xScale(d.year))
            .attr('dx', xScale.bandwidth() /2)
            .attr('y', d => yScale(d.number))
            .attr('dy', '-0.6em')
            .style('fill', 'floralwhite')
            .style('opacity', 0)
            .text(d => d.number)
            .transition().duration(100).delay((d, i) => i * 30)
            .style('opacity', 1) 
    })
})






